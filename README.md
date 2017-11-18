# [morland-sandvik.com](morland-sandvik.com)

Deployed to Firebase morland-sandvik

## Quick Start

```shell
$ yarn
$ yarn start
```

## Deploying to Firebase

### Install firebase-tools:

```shell
$ npm install -g firebase-tools
```

### Build and deploy the app:

```shell
$ yarn run build
$ firebase login
$ firebase deploy
```

## NPM Commands

| Script          | Description                                         |
| --------------- | --------------------------------------------------- |
| `npm start`     | Start webpack development server @ `localhost:8080` |
| `npm run build` | Build the application to `./build` directory        |
| `npm test`      | Test the application; watch for changes and retest  |
