/**
 * Cache middleware for public reference data endpoints
 * Adds appropriate cache headers to improve performance
 */

export const cacheMiddleware = (duration = 3600) => {
  return (req, res, next) => {
    // Set cache headers for public reference data
    res.set({
      'Cache-Control': `public, max-age=${duration}`,
      'Expires': new Date(Date.now() + duration * 1000).toUTCString(),
      'Last-Modified': new Date().toUTCString()
    });
    next();
  };
};

/**
 * Cache middleware with custom cache control directives
 */
export const cacheMiddlewareWithOptions = (options = {}) => {
  const {
    maxAge = 3600,
    staleWhileRevalidate = 86400, // 24 hours
    mustRevalidate = false,
    noCache = false
  } = options;

  return (req, res, next) => {
    let cacheControl = 'public';
    
    if (noCache) {
      cacheControl = 'no-cache, no-store, must-revalidate';
    } else {
      cacheControl = `public, max-age=${maxAge}`;
      
      if (staleWhileRevalidate) {
        cacheControl += `, stale-while-revalidate=${staleWhileRevalidate}`;
      }
      
      if (mustRevalidate) {
        cacheControl += ', must-revalidate';
      }
    }

    res.set({
      'Cache-Control': cacheControl,
      'Expires': noCache ? '0' : new Date(Date.now() + maxAge * 1000).toUTCString(),
      'Last-Modified': new Date().toUTCString()
    });
    
    next();
  };
};
