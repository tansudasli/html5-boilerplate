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
    "revision": "ada6afdade47b05ada07868761c2a586"
  },
  {
    "url": "apple-touch-icon-114x114.png",
    "revision": "22f695695471bfa1bb91fc6e44df4b54"
  },
  {
    "url": "apple-touch-icon-120x120.png",
    "revision": "742b31d18596b9ba610884467746dc95"
  },
  {
    "url": "apple-touch-icon-144x144.png",
    "revision": "97af787764f5529441c8455ce99035c7"
  },
  {
    "url": "apple-touch-icon-152x152.png",
    "revision": "8f579dd27c3b8eb72f802dbb42cc8834"
  },
  {
    "url": "apple-touch-icon-180x180.png",
    "revision": "c329fd6110caa2d19484087a8e21c273"
  },
  {
    "url": "apple-touch-icon-57x57.png",
    "revision": "1c74df4d78bdb56c416cba95d22681d2"
  },
  {
    "url": "apple-touch-icon-60x60.png",
    "revision": "686e4570bd304de8342fab2f096280b5"
  },
  {
    "url": "apple-touch-icon-72x72.png",
    "revision": "50cb8346070050beae63e8a0dd6cf665"
  },
  {
    "url": "apple-touch-icon-76x76.png",
    "revision": "9333a3fa512cdfd83fa02629c784f461"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c329fd6110caa2d19484087a8e21c273"
  },
  {
    "url": "assets/archive/archive.html",
    "revision": "8d11145a5559e7fdece5e01535d5caa4"
  },
  {
    "url": "assets/css/normalize.css",
    "revision": "112272e51c80ffe5bd01becd2ce7d656"
  },
  {
    "url": "assets/how-it-works/how-it-works.jpg",
    "revision": "7a559bd4d8c5c1508d50f554b59f2e86"
  },
  {
    "url": "assets/icons/android-chrome-144x144.png",
    "revision": "fb5af27b3c6d15987a50b0b9136f62ec"
  },
  {
    "url": "assets/icons/android-chrome-192x192.png",
    "revision": "8e74205472050e74db7edb2cf2bcf429"
  },
  {
    "url": "assets/icons/android-chrome-256x256.png",
    "revision": "43764fdd10a081bcda510f081c20bfe5"
  },
  {
    "url": "assets/icons/android-chrome-36x36.png",
    "revision": "c210f19ff89cafdc45854b7ad1e13f78"
  },
  {
    "url": "assets/icons/android-chrome-384x384.png",
    "revision": "91ef27edfe747b77a7fef1a7e1046af7"
  },
  {
    "url": "assets/icons/android-chrome-48x48.png",
    "revision": "d2f931b4176bc508571a921d0ed79705"
  },
  {
    "url": "assets/icons/android-chrome-72x72.png",
    "revision": "aab8ecdefefecac1aa4309503ab0f4e6"
  },
  {
    "url": "assets/icons/android-chrome-96x96.png",
    "revision": "0376080d00ba8a5767d35a12d4744f95"
  },
  {
    "url": "assets/icons/logo-transparent.png",
    "revision": "09e0f809670656f359124debc2f18af5"
  },
  {
    "url": "assets/icons/logo.png",
    "revision": "09e0f809670656f359124debc2f18af5"
  },
  {
    "url": "assets/icons/mstile-144x144.png",
    "revision": "cd7fa01ac5fd472d9ea1c688b1b63669"
  },
  {
    "url": "assets/icons/mstile-150x150.png",
    "revision": "f8708ce5d60ac6b22c10f372b843addc"
  },
  {
    "url": "assets/icons/mstile-310x150.png",
    "revision": "e5e87d66eaa1e05a0f3fb0f87d9ba0dc"
  },
  {
    "url": "assets/icons/mstile-310x310.png",
    "revision": "60a349bf091ffde9628f6156f16167fb"
  },
  {
    "url": "assets/icons/mstile-70x70.png",
    "revision": "3255658b181466f88c41a98e0f11d869"
  },
  {
    "url": "assets/js/modernizr-3.7.1.min.js",
    "revision": "ee25e20d7e9ab3a9176a13b399811ba3"
  },
  {
    "url": "assets/our-references/company.png",
    "revision": "9ab8107a470268905ede1c25a7c3d728"
  },
  {
    "url": "assets/privacy.html",
    "revision": "674c4ed7ef8f948d8c415243d13636fa"
  },
  {
    "url": "assets/splash/ipad_splash.png",
    "revision": "e62fbcc24e7f2168c0e09c6f242059a5"
  },
  {
    "url": "assets/splash/ipadpro1_splash.png",
    "revision": "77f19d24000dbcabede7e90da6ce499a"
  },
  {
    "url": "assets/splash/ipadpro2_splash.png",
    "revision": "8a42eed5cd0e26349689bc651124a2cf"
  },
  {
    "url": "assets/splash/ipadpro3_splash.png",
    "revision": "2b0436517315231dd3bad6f5e75247ce"
  },
  {
    "url": "assets/splash/iphone5_splash.png",
    "revision": "eb0470dbb42301dd3de1472f12c17688"
  },
  {
    "url": "assets/splash/iphone6_splash.png",
    "revision": "e2d9de50074511a269ab6b5a4dea02a8"
  },
  {
    "url": "assets/splash/iphoneplus_splash.png",
    "revision": "38292be150ad5d69d8c4240f03bf81d9"
  },
  {
    "url": "assets/splash/iphonex_splash.png",
    "revision": "5b3f8a16878dac8e04cd35e7b1a35594"
  },
  {
    "url": "assets/splash/iphonexr_splash.png",
    "revision": "b9d82f34950f5aa70de62d5222f4cef2"
  },
  {
    "url": "assets/splash/iphonexsmax_splash.png",
    "revision": "1b3e5782ffa2bd80c4cb6b4c37f3a722"
  },
  {
    "url": "assets/terms.html",
    "revision": "5d515213b173489072e0b94e65a5f6ad"
  },
  {
    "url": "browserconfig.xml",
    "revision": "4daa3daae3ec249a9c26b3338844c814"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "33c2bd13cfc374edecfcb8a8888f01be"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "edf136123fb5761529ecb4f4af8b1b3d"
  },
  {
    "url": "favicon-data.json",
    "revision": "bd03d01089d0e61a1d79e5660409ece2"
  },
  {
    "url": "favicon-description.json",
    "revision": "50abc2d73c3f677a40bdd7101ff1a9c9"
  },
  {
    "url": "favicon.ico",
    "revision": "dbd623af80dbc9a66f4acc367c4791a2"
  },
  {
    "url": "firebase.json",
    "revision": "90400c939fe2e98ea64d1906aa7ddbc8"
  },
  {
    "url": "index.html",
    "revision": "45509943bef7613e917176907123a8b8"
  },
  {
    "url": "main.js",
    "revision": "c3fb2a1a8034e860dfd60b6c4acbfa92"
  },
  {
    "url": "material.components.scss",
    "revision": "99640e127acd0644e2092d927c0f4c15"
  },
  {
    "url": "material.layout.scss",
    "revision": "d976b9b784a110cc9946b5816e87b69f"
  },
  {
    "url": "material.theme.scss",
    "revision": "dfe980fa2c6f32acf3130f4f06340c2c"
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
    "revision": "6e4ee8803073c2c23f19a0588aef3dcf"
  },
  {
    "url": "site.webmanifest",
    "revision": "32e82d89ea523e5159559eb69032a01e"
  },
  {
    "url": "style.scss",
    "revision": "463eca43d8754821a89288ec67efcd45"
  },
  {
    "url": "webpack.config.js",
    "revision": "198c807cbf2e6afc9bdf41f5fda17c49"
  },
  {
    "url": "workbox-config.js",
    "revision": "2d0edaf786fb2f70fbd40abb95a324c1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|ico|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images-www", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, maxAgeSeconds: 864000, purgeOnQuotaError: false })] }), 'GET');
