/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-site',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              process.env.NODE_ENV === 'production'
                ? "script-src 'self' 'unsafe-inline'"
                : "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://images.unsplash.com",
              "font-src 'self' data:",
              process.env.NODE_ENV === 'production'
                ? "connect-src 'self'"
                : "connect-src 'self' ws: wss:",
              "frame-ancestors 'self'",
              "frame-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/privacy',
        destination: '/confidentialitate',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/confidentialitate',
        permanent: true,
      },
      {
        source: '/gdpr',
        destination: '/confidentialitate',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/termeni',
        permanent: true,
      },
      {
        source: '/legal',
        destination: '/declinare-responsabilitate',
        permanent: true,
      },
      {
        source: '/apple-touch-icon.png',
        destination: '/favicon.svg',
        permanent: true,
      },
      {
        source: '/apple-touch-icon-precomposed.png',
        destination: '/favicon.svg',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
