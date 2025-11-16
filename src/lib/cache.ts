interface CacheItem {
  data: any;
  timestamp: number;
  expiresAt: number;
}

class ApiCache {
  private cache = new Map<string, CacheItem>();
  private readonly DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

  set(key: string, data: any, ttl: number = this.DEFAULT_TTL): void {
    const now = Date.now();
    const item: CacheItem = {
      data,
      timestamp: now,
      expiresAt: now + ttl
    };
    this.cache.set(key, item);
  }

  get(key: string): any | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    if (Date.now() > item.expiresAt) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  invalidate(key: string): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  // Get cache stats for debugging
  getStats(): { size: number; keys: string[] } {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }
}

// Create a singleton instance
const apiCache = new ApiCache();

// Enhanced fetch function with caching
export async function cachedFetch(
  url: string, 
  options?: RequestInit, 
  cacheTtl?: number
): Promise<Response> {
  const cacheKey = `${url}_${JSON.stringify(options || {})}`;
  
  // Only cache GET requests
  if (!options?.method || options.method === 'GET') {
    const cachedData = apiCache.get(cacheKey);
    if (cachedData) {
      // Return a mock response with cached data
      return new Response(JSON.stringify(cachedData), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }

  try {
    const response = await fetch(url, options);
    
    // Only cache successful GET responses
    if (response.ok && (!options?.method || options.method === 'GET')) {
      const clonedResponse = response.clone();
      const data = await clonedResponse.json();
      apiCache.set(cacheKey, data, cacheTtl);
    }
    
    return response;
  } catch (error) {
    // If network fails, try to return stale cached data
    const staleData = apiCache.get(cacheKey);
    if (staleData) {
      console.log('Returning stale data due to network error:', error);
      return new Response(JSON.stringify(staleData), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    throw error;
  }
}

// Utility function for common API calls
export async function fetchWithCache<T = any>(
  url: string, 
  options?: RequestInit, 
  cacheTtl?: number
): Promise<T> {
  const response = await cachedFetch(url, options, cacheTtl);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  
  const data = await response.json();
  return data as T;
}

// Export the cache instance for manual control if needed
export { apiCache };