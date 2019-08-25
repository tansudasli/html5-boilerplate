/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6960df71042ce58a4716027a6385aa51"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "5e7bb9c1b59630a0a57a10b506ba83b8"
  },
  {
    "url": "assets/archive/archive.html",
    "revision": "6e8f64ba61f0b6af710a1683e4e8b2b1"
  },
  {
    "url": "assets/css/normalize.css",
    "revision": "112272e51c80ffe5bd01becd2ce7d656"
  },
  {
    "url": "assets/icons/icon-128x128.png",
    "revision": "c868628f85920746394b72634dfcc4f9"
  },
  {
    "url": "assets/icons/icon-144x144.png",
    "revision": "cd8497548afb834dda62757379542627"
  },
  {
    "url": "assets/icons/icon-152x152.png",
    "revision": "fe8578eb15d077ca8c61b136d721f816"
  },
  {
    "url": "assets/icons/icon-192x192.png",
    "revision": "cba69c4d0a85d58c52948906f09cc2e5"
  },
  {
    "url": "assets/icons/icon-384x384.png",
    "revision": "09e0f809670656f359124debc2f18af5"
  },
  {
    "url": "assets/icons/icon-512x512.png",
    "revision": "499374c2e19adb5ef3b3dadc7cc53412"
  },
  {
    "url": "assets/icons/icon-72x72.png",
    "revision": "18f662ec383f61bfe9db19a5a43fcec5"
  },
  {
    "url": "assets/icons/icon-96x96.png",
    "revision": "5e7bb9c1b59630a0a57a10b506ba83b8"
  },
  {
    "url": "assets/icons/tile-150x150.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/icons/tile-310x150.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/icons/tile-310x310.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/icons/tile-70x70.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/js/modernizr-3.7.1.min.js",
    "revision": "ee25e20d7e9ab3a9176a13b399811ba3"
  },
  {
    "url": "assets/privacy.html",
    "revision": "674c4ed7ef8f948d8c415243d13636fa"
  },
  {
    "url": "assets/terms.html",
    "revision": "5d515213b173489072e0b94e65a5f6ad"
  },
  {
    "url": "browserconfig.xml",
    "revision": "533fdc0d5e06d14634d27bb5c9f4076d"
  },
  {
    "url": "dist/404.html",
    "revision": "6960df71042ce58a4716027a6385aa51"
  },
  {
    "url": "dist/apple-touch-icon.png",
    "revision": "5e7bb9c1b59630a0a57a10b506ba83b8"
  },
  {
    "url": "dist/assets/archive/archive.html",
    "revision": "6e8f64ba61f0b6af710a1683e4e8b2b1"
  },
  {
    "url": "dist/assets/css/normalize.css",
    "revision": "112272e51c80ffe5bd01becd2ce7d656"
  },
  {
    "url": "dist/assets/icons/icon-128x128.png",
    "revision": "c868628f85920746394b72634dfcc4f9"
  },
  {
    "url": "dist/assets/icons/icon-144x144.png",
    "revision": "cd8497548afb834dda62757379542627"
  },
  {
    "url": "dist/assets/icons/icon-152x152.png",
    "revision": "fe8578eb15d077ca8c61b136d721f816"
  },
  {
    "url": "dist/assets/icons/icon-192x192.png",
    "revision": "cba69c4d0a85d58c52948906f09cc2e5"
  },
  {
    "url": "dist/assets/icons/icon-384x384.png",
    "revision": "09e0f809670656f359124debc2f18af5"
  },
  {
    "url": "dist/assets/icons/icon-512x512.png",
    "revision": "499374c2e19adb5ef3b3dadc7cc53412"
  },
  {
    "url": "dist/assets/icons/icon-72x72.png",
    "revision": "18f662ec383f61bfe9db19a5a43fcec5"
  },
  {
    "url": "dist/assets/icons/icon-96x96.png",
    "revision": "5e7bb9c1b59630a0a57a10b506ba83b8"
  },
  {
    "url": "dist/assets/icons/tile-150x150.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "dist/assets/icons/tile-310x150.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "dist/assets/icons/tile-310x310.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "dist/assets/icons/tile-70x70.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "dist/assets/js/modernizr-3.7.1.min.js",
    "revision": "ee25e20d7e9ab3a9176a13b399811ba3"
  },
  {
    "url": "dist/assets/privacy.html",
    "revision": "674c4ed7ef8f948d8c415243d13636fa"
  },
  {
    "url": "dist/assets/terms.html",
    "revision": "5d515213b173489072e0b94e65a5f6ad"
  },
  {
    "url": "dist/bundle.css",
    "revision": "040340818af03d60be8a0c82c2c2c119"
  },
  {
    "url": "dist/bundle.js",
    "revision": "4b99aa2250cee6387b192715df0635a6"
  },
  {
    "url": "dist/favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "dist/index.html",
    "revision": "972a77d335695b12680f49413b17a451"
  },
  {
    "url": "dist/precache-manifest.a02351fbf6742d47ddb6c131f7588743.js",
    "revision": "a02351fbf6742d47ddb6c131f7588743"
  },
  {
    "url": "dist/site.webmanifest",
    "revision": "4bffe56f1b35066af7af508a07c7b63e"
  },
  {
    "url": "favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "firebase.json",
    "revision": "90400c939fe2e98ea64d1906aa7ddbc8"
  },
  {
    "url": "index.html",
    "revision": "a2a21d418275cafbd1a8f3da11975b3e"
  },
  {
    "url": "main.js",
    "revision": "fbd47ef292edb6faa9f481504155352d"
  },
  {
    "url": "material.components.scss",
    "revision": "8b5f34509dad04f3abcfa414a8fe3642"
  },
  {
    "url": "material.layout.scss",
    "revision": "63e98a2d479a2d50da32966d026240d8"
  },
  {
    "url": "material.theme.scss",
    "revision": "6f14c01e895731ad508cede6f4c6495b"
  },
  {
    "url": "package-lock.json",
    "revision": "b09fd85cf12551a5b26a652473d94592"
  },
  {
    "url": "package.json",
    "revision": "a23251b9e8028f42483f04a916023813"
  },
  {
    "url": "README.md",
    "revision": "04bd97003a8ff44701a6fb28c71c08dd"
  },
  {
    "url": "site.webmanifest",
    "revision": "4bffe56f1b35066af7af508a07c7b63e"
  },
  {
    "url": "style.scss",
    "revision": "463eca43d8754821a89288ec67efcd45"
  },
  {
    "url": "webpack.config.js",
    "revision": "3c13509e8a5049d7282b5bc5e6be5021"
  },
  {
    "url": "workbox-config.js",
    "revision": "2d0edaf786fb2f70fbd40abb95a324c1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|ico|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images-www", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, maxAgeSeconds: 864000, purgeOnQuotaError: false })] }), 'GET');
