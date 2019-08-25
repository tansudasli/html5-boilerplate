module.exports = {
  "globDirectory": ".",
  "globPatterns": [
    "**/*.{html,png,css,jpeg,jpg,js,xml,ico,webmanifest,json,scss,md}"
  ],
  "swDest": "./service-worker.js",

  // Define runtime caching rules.
  runtimeCaching: [{
    urlPattern: /\.(?:png|ico|jpg|jpeg|svg)$/,

    handler: 'CacheFirst',

    options: {
      cacheName: 'images-www',

      expiration: {
        maxEntries: 200,
        maxAgeSeconds: 10 * 24 * 60 * 60 //10 days
      },
    },
  }],
};