/**
 * LIGHTHOUSE CI CONFIGURATION
 * Production-ready performance monitoring
 */

module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:8080'],
      startServerCommand: 'npm run preview',
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--no-sandbox --disable-dev-shm-usage',
        preset: 'desktop',
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0
        },
        auditMode: false,
        gatherMode: false,
        disableStorageReset: false,
        clearStorageTypes: ['file-systems', 'indexeddb', 'local-storage', 'websql']
      }
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 1.0 }],
        'categories:best-practices': ['error', { minScore: 1.0 }],
        'categories:seo': ['error', { minScore: 1.0 }],
        'first-contentful-paint': ['error', { maxNumericValue: 800 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 1200 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.01 }],
        'total-blocking-time': ['error', { maxNumericValue: 50 }],
        'speed-index': ['error', { maxNumericValue: 1000 }],
        'interactive': ['error', { maxNumericValue: 1500 }]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};