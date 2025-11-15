import { Metadata } from 'next'

// Fetch personal info from API
async function getPersonalInfoFromAPI() {
  try {
    // Use internal API call during build/runtime
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/personal-info`, {
      cache: 'no-store' // Always fetch fresh data
    })
    
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.log('API not available, using fallback metadata')
  }
  
  // Fallback to default values if API is not available
  return {
    name: 'Shoile Abdulazeez',
    title: 'Full-Stack Developer and AI Enthusiast', 
    bio: 'Portfolio of Shoile Abdulazeez, Full-Stack Developer and AI Enthusiast specializing in machine learning, web development, and intelligent applications.',
    avatar: 'https://avatars.githubusercontent.com/u/170754445?s=400&u=f38310f962ed1a442e43496faaa144419df0e09a&v=4'
  }
}

export async function generateSiteMetadata(): Promise<Metadata> {
  const personalInfo = await getPersonalInfoFromAPI()
  
  const title = `${personalInfo.name} - ${personalInfo.title}`
  const description = personalInfo.bio
  const image = personalInfo.avatar
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: 'website',
    },
    icons: {
      icon: image,
      shortcut: image,
      apple: image,
    }
  }
}