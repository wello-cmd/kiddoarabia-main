import { Helmet } from 'react-helmet-async';

/**
 * Security headers for enhanced protection
 */
const SecurityHeaders: React.FC = () => {
  return (
    <Helmet>
      {/* Content Security Policy */}
      <meta
        httpEquiv="Content-Security-Policy"
        content={[
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          "font-src 'self' https://fonts.gstatic.com",
          "img-src 'self' data: https: blob:",
          "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-analytics.com https://fonts.googleapis.com",
          "media-src 'self'",
          "frame-src 'none'",
          "object-src 'none'",
          "base-uri 'self'",
          "form-action 'self'",
          "upgrade-insecure-requests"
        ].join('; ')}
      />

      {/* X-Frame-Options */}
      {/* X-Frame-Options - Removed as it must be set via HTTP header */}
      {/* <meta httpEquiv="X-Frame-Options" content="DENY" /> */}

      {/* X-Content-Type-Options */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />

      {/* Referrer Policy */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />

      {/* Permissions Policy */}
      <meta
        httpEquiv="Permissions-Policy"
        content="geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), speaker=()"
      />

      {/* Cross-Origin-Embedder-Policy */}
      <meta httpEquiv="Cross-Origin-Embedder-Policy" content="credentialless" />

      {/* Cross-Origin-Opener-Policy */}
      <meta httpEquiv="Cross-Origin-Opener-Policy" content="same-origin" />

      {/* Cross-Origin-Resource-Policy */}
      <meta httpEquiv="Cross-Origin-Resource-Policy" content="same-origin" />
    </Helmet>
  );
};

export default SecurityHeaders;