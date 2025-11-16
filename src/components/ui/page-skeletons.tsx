export const AboutPageSkeleton = () => {
  return (
    <div className="max-w-3xl mx-auto animate-pulse">
      {/* Hero Section Skeleton */}
      <div className="bg-card border border-border rounded-2xl p-12 mb-12">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full bg-muted mb-6"></div>
          <div className="space-y-3 mb-8">
            <div className="bg-muted h-8 w-48 rounded mx-auto"></div>
            <div className="bg-muted h-6 w-64 rounded mx-auto"></div>
          </div>
          <div className="bg-muted h-4 w-full max-w-2xl rounded mb-6"></div>
          <div className="bg-muted h-4 w-3/4 max-w-2xl rounded mb-6"></div>
          <div className="bg-muted h-12 w-40 rounded"></div>
        </div>
      </div>

      {/* Intro Section Skeleton */}
      <div className="mb-12">
        <div className="bg-muted h-4 w-full rounded mb-2"></div>
        <div className="bg-muted h-4 w-5/6 rounded mb-2"></div>
        <div className="bg-muted h-4 w-4/5 rounded"></div>
      </div>

      {/* Education Section Skeleton */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <div className="w-3 h-3 bg-muted rounded-full mr-3"></div>
          <div className="bg-muted h-8 w-32 rounded"></div>
        </div>
        <div className="space-y-6">
          {[1, 2].map((i) => (
            <div key={i} className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="bg-muted h-6 w-64 rounded"></div>
                  <div className="bg-muted h-5 w-48 rounded"></div>
                </div>
                <div className="bg-muted h-6 w-20 rounded"></div>
              </div>
              <div className="bg-muted h-4 w-full rounded"></div>
              <div className="bg-muted h-4 w-4/5 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section Skeleton */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <div className="w-3 h-3 bg-muted rounded-full mr-3"></div>
          <div className="bg-muted h-8 w-32 rounded"></div>
        </div>
        <div className="space-y-6">
          {[1, 2].map((i) => (
            <div key={i} className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="bg-muted h-6 w-56 rounded"></div>
                  <div className="bg-muted h-5 w-40 rounded"></div>
                </div>
                <div className="bg-muted h-6 w-24 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="bg-muted h-4 w-full rounded"></div>
                <div className="bg-muted h-4 w-5/6 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="bg-muted h-4 w-32 rounded"></div>
                <div className="space-y-1">
                  <div className="bg-muted h-4 w-full rounded"></div>
                  <div className="bg-muted h-4 w-4/5 rounded"></div>
                </div>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="bg-muted h-6 w-16 rounded"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section Skeleton */}
      <div>
        <div className="flex items-center mb-6">
          <div className="w-3 h-3 bg-muted rounded-full mr-3"></div>
          <div className="bg-muted h-8 w-20 rounded"></div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-muted rounded-full mr-3"></div>
                <div className="bg-muted h-5 w-32 rounded"></div>
              </div>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5].map((j) => (
                  <div key={j} className="bg-muted h-6 w-20 rounded"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProjectListSkeleton = () => {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="animate-pulse">
          <div className="grid grid-cols-[100px_1fr] gap-6">
            <div className="bg-muted h-6 w-16 rounded"></div>
            <div className="space-y-3">
              <div className="bg-muted h-7 w-3/4 rounded"></div>
              <div className="space-y-2">
                <div className="bg-muted h-4 w-full rounded"></div>
                <div className="bg-muted h-4 w-5/6 rounded"></div>
                <div className="bg-muted h-4 w-2/3 rounded"></div>
              </div>
              <div className="bg-muted h-4 w-32 rounded"></div>
              <div className="flex gap-2">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="bg-muted h-6 w-16 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const BlogListSkeleton = () => {
  return (
    <div className="space-y-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse">
          <article className="overflow-hidden rounded-lg border border-border bg-card">
            {/* Cover Image Skeleton */}
            <div className="bg-muted h-48 w-full"></div>
            
            <div className="p-6 space-y-4">
              <div className="bg-muted h-7 w-3/4 rounded"></div>
              <div className="space-y-2">
                <div className="bg-muted h-4 w-full rounded"></div>
                <div className="bg-muted h-4 w-5/6 rounded"></div>
                <div className="bg-muted h-4 w-4/5 rounded"></div>
              </div>
              <div className="flex gap-4">
                <div className="bg-muted h-4 w-24 rounded"></div>
                <div className="bg-muted h-4 w-20 rounded"></div>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="bg-muted h-6 w-16 rounded"></div>
                ))}
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export const BlogDetailSkeleton = () => {
  return (
    <div className="max-w-3xl mx-auto animate-pulse">
      {/* Back button skeleton */}
      <div className="mb-8">
        <div className="bg-muted h-5 w-32 rounded"></div>
      </div>

      <article className="max-w-none">
        {/* Header skeleton */}
        <header className="mb-8 p-6 border border-border rounded-lg bg-card">
          <div className="bg-muted h-10 w-full mb-4 rounded"></div>
          <div className="space-y-2 mb-6">
            <div className="bg-muted h-6 w-full rounded"></div>
            <div className="bg-muted h-6 w-3/4 rounded"></div>
          </div>
          
          <div className="flex gap-6 mb-6">
            <div className="bg-muted h-5 w-32 rounded"></div>
            <div className="bg-muted h-5 w-24 rounded"></div>
          </div>

          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-muted h-6 w-16 rounded"></div>
            ))}
          </div>
        </header>

        {/* Cover image skeleton */}
        <div className="mb-8">
          <div className="bg-muted w-full h-64 rounded-lg"></div>
        </div>

        {/* Content skeleton */}
        <div className="p-6 border border-border rounded-lg bg-card">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="space-y-2">
                <div className="bg-muted h-4 w-full rounded"></div>
                <div className="bg-muted h-4 w-5/6 rounded"></div>
                <div className="bg-muted h-4 w-4/5 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export const ProjectDetailSkeleton = () => {
  return (
    <div className="max-w-3xl mx-auto animate-pulse">
      {/* Back button skeleton */}
      <div className="mb-8">
        <div className="bg-muted h-5 w-32 rounded"></div>
      </div>

      {/* Header skeleton */}
      <header className="mb-8 p-6 border border-border rounded-lg bg-card">
        <div className="bg-muted h-10 w-full mb-4 rounded"></div>
        <div className="space-y-2 mb-6">
          <div className="bg-muted h-6 w-full rounded"></div>
          <div className="bg-muted h-6 w-3/4 rounded"></div>
        </div>
        
        <div className="flex gap-6 mb-6">
          <div className="bg-muted h-5 w-20 rounded"></div>
          <div className="bg-muted h-5 w-24 rounded"></div>
        </div>

        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-muted h-6 w-16 rounded"></div>
          ))}
        </div>
      </header>

      {/* Image skeleton */}
      <div className="mb-8">
        <div className="bg-muted w-full h-64 rounded-lg"></div>
      </div>

      {/* Content sections skeleton */}
      {[1, 2, 3].map((section) => (
        <div key={section} className="mb-8 p-6 border border-border rounded-lg bg-card">
          <div className="bg-muted h-7 w-40 mb-4 rounded"></div>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-muted h-4 w-full rounded"></div>
            ))}
            <div className="bg-muted h-4 w-3/4 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};