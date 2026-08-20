interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  siteName?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export const updateSEO = ({
  title = 'Swahilipot Hub Foundation',
  description = 'Empowering youth through technology, arts, and entrepreneurship across the coastal region of Kenya.',
  keywords = 'youth empowerment, technology, arts, entrepreneurship, Kenya, Mombasa, coastal region, Swahilipot Hub',
  image = '/images/og-default.jpg',
  url = 'https://swahilipothub.co.ke',
  type = 'website',
  author = 'Swahilipot Hub Foundation',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  locale = 'en_KE',
  siteName = 'Swahilipot Hub Foundation',
  twitterCard = 'summary_large_image',
  twitterSite = '@swahilipothub',
  twitterCreator = '@swahilipothub',
  canonical,
  noindex = false,
  nofollow = false
}: SEOProps = {}) => {
  // Update document title
  document.title = title;

  // Update or create meta tags
  const updateMetaTag = (name: string, content: string, property = false) => {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let meta = document.querySelector(selector) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      if (property) {
        meta.setAttribute('property', name);
      } else {
        meta.setAttribute('name', name);
      }
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  // Update or create link tags
  const updateLinkTag = (rel: string, href: string, type?: string) => {
    const selector = `link[rel="${rel}"]`;
    let link = document.querySelector(selector) as HTMLLinkElement;
    
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', rel);
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);
    if (type) {
      link.setAttribute('type', type);
    }
  };

  // Basic meta tags
  updateMetaTag('description', description);
  updateMetaTag('keywords', keywords);
  updateMetaTag('author', author);
  updateMetaTag('robots', `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`);

  // Open Graph tags
  updateMetaTag('og:title', title, true);
  updateMetaTag('og:description', description, true);
  updateMetaTag('og:type', type, true);
  updateMetaTag('og:url', url, true);
  updateMetaTag('og:image', image, true);
  updateMetaTag('og:image:width', '1200', true);
  updateMetaTag('og:image:height', '630', true);
  updateMetaTag('og:image:alt', title, true);
  updateMetaTag('og:site_name', siteName, true);
  updateMetaTag('og:locale', locale, true);

  // Twitter Card tags
  updateMetaTag('twitter:card', twitterCard);
  updateMetaTag('twitter:site', twitterSite);
  updateMetaTag('twitter:creator', twitterCreator);
  updateMetaTag('twitter:title', title);
  updateMetaTag('twitter:description', description);
  updateMetaTag('twitter:image', image);

  // Article specific tags
  if (type === 'article') {
    if (publishedTime) updateMetaTag('article:published_time', publishedTime, true);
    if (modifiedTime) updateMetaTag('article:modified_time', modifiedTime, true);
    if (author) updateMetaTag('article:author', author, true);
    if (section) updateMetaTag('article:section', section, true);
    tags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'article:tag');
      meta.setAttribute('content', tag);
      document.head.appendChild(meta);
    });
  }

  // Canonical URL
  if (canonical) {
    updateLinkTag('canonical', canonical);
  }

  // Additional SEO tags
  updateMetaTag('theme-color', '#29378a');
  updateMetaTag('msapplication-TileColor', '#29378a');
  updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
};

// Structured data helpers
export const generateStructuredData = (data: any) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  script.id = 'structured-data';
  
  // Remove existing structured data
  const existing = document.getElementById('structured-data');
  if (existing) {
    existing.remove();
  }
  
  document.head.appendChild(script);
};

// Organization structured data
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Swahilipot Hub Foundation",
  "url": "https://swahilipothub.co.ke",
  "logo": "https://swahilipothub.co.ke/sph-logo.png",
  "description": "Empowering youth through technology, arts, and entrepreneurship across the coastal region of Kenya.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mombasa",
    "addressCountry": "Kenya"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+254-XXX-XXXXXX",
    "contactType": "General Inquiry",
    "email": "info@swahilipothub.co.ke"
  },
  "sameAs": [
    "https://twitter.com/swahilipothub",
    "https://facebook.com/swahilipothub",
    "https://linkedin.com/company/swahilipothub"
  ]
};

// Article structured data
export const articleStructuredData = (article: {
  title: string;
  description: string;
  publishedTime: string;
  modifiedTime: string;
  author: string;
  image: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "author": {
    "@type": "Organization",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Swahilipot Hub Foundation",
    "logo": {
      "@type": "ImageObject",
      "url": "https://swahilipothub.co.ke/sph-logo.png"
    }
  },
  "datePublished": article.publishedTime,
  "dateModified": article.modifiedTime,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});

// JobPosting structured data
export const jobPostingStructuredData = (job: {
  title: string;
  description: string;
  datePosted: string;
  validThrough: string;
  employmentType: string;
  hiringOrganization: string;
  jobLocation: string;
  baseSalary?: {
    currency: string;
    value: {
      minValue: number;
      maxValue: number;
    };
  };
}) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": job.title,
  "description": job.description,
  "datePosted": job.datePosted,
  "validThrough": job.validThrough,
  "employmentType": job.employmentType,
  "hiringOrganization": {
    "@type": "Organization",
    "name": job.hiringOrganization
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": job.jobLocation,
      "addressCountry": "Kenya"
    }
  },
  ...(job.baseSalary && { "baseSalary": job.baseSalary })
});
