import localFont from 'next/font/local';

export const geistSans = localFont({
  adjustFontFallback: false,
  fallback: [
    'Geist',
    'ui-sans-serif',
    'system-ui',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji',
  ],
  src: [
    {
      path: './geist-sans.woff2',
      style: 'normal',
    },
    {
      path: './geist-sans-italic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-geist-sans',
});

export const geistMono = localFont({
  adjustFontFallback: false,
  fallback: [
    'Geist Mono',
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace',
  ],
  src: [
    {
      path: './geist-mono.woff2',
      style: 'normal',
    },
    {
      path: './geist-mono-italic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-geist-mono',
});
