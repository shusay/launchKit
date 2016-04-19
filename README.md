# Web project launcher
## Requires
- node.js >=0.12.0
- npm
- bower
- slim


## LaunchKit
Web development environment using
- gulp
- browserSync
- browserify
- bootstrap

## Setup
```
$ npm install; npm run gulp -- init
```

## How to run gulp tasks

```
$ npm run gulp
```

Normally browserSync runs as with proxy option. To avoid proxy option, use server mode.

```
$ npm run gulp -- default --mode server
or
$ npm run gulp-server
```

If tunnel option has strings instead of false, gulp-web-starter is automatically enable it.

```
'tunnel'       : 'randomstring23232',
```

To call specified task.

```
$ npm run gulp -- taskname
```

## browserify

```
src/js/app.js
```

## File structure
Basically source file placed in "src/". It passed to "shared/" as destination through the "gulp".

```
├── README.md
├── bower.json
├── gulpfile.js
├── package.json
├── src
│   ├── gulp
│   │   ├── bundlejs.js
│   │   ├── config.js
│   │   ├── functions.js
│   │   ├── image.js
│   │   ├── install.js
│   │   ├── pug.js
│   │   └── tasks.js
│   ├── images
│   │   ├── sprite
│   │   │   ├── pc
│   │   │   │   └── _dummy.png
│   │   │   └── sp
│   │   │       └── _dummy.png
│   │   └── sprite-svg
│   │       ├── pc
│   │       │   └── dummy.svg
│   │       └── sp
│   │           └── dummy.svg
│   ├── pug
│   │   ├── inc
│   │   │   ├── core
│   │   │   │   ├── _base.pug
│   │   │   │   ├── _config.pug
│   │   │   │   └── _mixin.pug
│   │   │   ├── layout
│   │   │   │   ├── _l-footer.pug
│   │   │   │   └── _l-header.pug
│   │   │   └── module
│   │   │       └── _m-button.pug
│   │   └── index.pug
│   ├── js
│   │   ├── pc
│   │   │   ├── app
│   │   │   │   └── script.js
│   │   │   └── app.js
│   │   └── sp
│   │       ├── app
│   │       │   └── script.js
│   │       └── app.js
│   ├── json
│   │   └── setting.json
│   ├── scss
│   │   ├── app.scss
│   │   ├── base
│   │   │   ├── _sprite-pc.scss
│   │   │   └── _sprite-sp.scss
│   │   ├── core
│   │   │   │   ├── inc
│   │   │   │   │   ├── _webfonts.scss
│   │   │   ├── _config.scss
│   │   │   ├── _default.scss
│   │   │   └── _mixins.scss
│   │   ├── layout
│   │   │   ├── _footer.scss
│   │   │   ├── _header.scss
│   │   │   └── _layout.scss
│   │   └── module
│   │       └── _buttons.scss
│   └── shell
│       ├── _s.sh
│       ├── bootstrap.sh
│       └── foundation.sh
└── style.css
```
