# html5-material-pwa-boilerplate

Pure *Html5 Boilerplate* w/ 
- [x] Material icon css
- [x] Material components used w/ flex
- [x] basic PWA capabilities
- [x] scss w/ npm to css generation
- [x] Tiles capabilities in internet explorer
- [x] optimized normalizer instead of css resets or normalizer
- [x] add to home screen in safari browser
- [x] add to home screen in chrome browser for android
- [x] firebase hosting deployment
- [x] customize Material Theming (typography, shape and color)

This can be used for **static html* parts of an angular material app. So It will be SEO friendly due to separating www and web-app parts.

## How to start

After fork, 

1. Get packages: such as to generate scss-2-css w/ node-sass
    - `npm install`
        - webpack: **Bundles Sass and JavaScript**
            - webpack-dev-server: Development server
            - sass-loader: Loads a Sass file and compiles it to CSS
            - node-sass: Provides binding for Node.js to Sass, peer dependency to sass-loader
            - css-loader: Resolves CSS @import and url() paths
            - extract-loader: Extracts the CSS into a .css file
            - file-loader: Serves the .css file as a public URL
        - in order to add **vendor specific styles**
            - autoprefixer: Parses CSS and adds vendor prefixes to CSS rules
            - postcss-loader: Loader for Webpack used in conjunction with autoprefixer
        - material-components-web: to **customize material theming**
        - babel: **bundle ES2015 into standart JS**
            - @babel/core
            - babel-loader: Compiles JavaScript files using babel
            - @babel/preset-env: Preset for compiling es2015
    - `npm run scss` to generate css files.
2. Install Firebase CLI w/ `npm install -g firebase-tools`
3. `firebase login` to **switch firebase user**. or `firebase logout` to change firebase user.
    - `firebase list` to see projects
    - then, `firebase init` to initialize firebase settings w/ below selected
        1. hosting,
        2. public=.
        3. no route to index.html. 
        4. no overwrite 4040.html
        5. no overwrite index.html<br>
      In a real scenario you will have dev, release, prod, demo stages. And i.e. 
      in dev (as firebase project), you will have 1 hosting which contains 2 apps such as www (static parts) and core-app (dynamic parts).
      So you should consider:
          - [ ] **every links in www** must be redirected correct core-app urls, regarding to stages of core-app !
          - [ ] **deployment of www** must be routed to correct project and correct hosting app ! 
          **Copy and edit .firebaserc, firebase.json files.** Basicly, below steps are...
              - Do not add `site: ...` to the firebae.json. Instead, Use `target: ...` !
              - Add `index.html` firebase js before </body>
              - Run `firebase use --add`, for all projects in related firebase account ! This will define alias for `--project ...`. So you can use easily
              - Run `firebase deploy --project development --only hosting:...`
              - for local test use `firebase serve`.

## How to Customize

1. Change `material.theme.scss` for hange variables w/ your colors, shape requirements etc.
2. then, start changing index.html and creating new html files if needed!

├── webpack.config.js: webpack configuration for scss-2-css, es2015js-2-js etc...
├── style.scss: contains all .scss files, and imports below scss files. Webpack converts it and all other scss-2-css into **bundle.css**
    ├── material.theme.scss: all global varialbles to change material design look and feel. (colors, shapes etc.)
    ├── normalize.scss: to reset browser specific css things. optimized version of `npm install normalizer`.
    ├── material.layout.scss: specific to the layout
    ├── material.components.scss : specific to the material components
├── main.js: access components w/ `querySelectorAll('.className')` then do whatever you want!. Webpack converts it into **bundle.js**
├── dist/: `npm run build` creates for deployments.
    ├── bundle.js
    ├── bundle.css

## How to Run

- for development only and serve from local run `npm run start`
- for production, `npm run build` to create dist/ folder. Then deploy it to firebase or somewhere else