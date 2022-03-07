## Rick and Morty App

Rick and Morty

**Project Structure**

```
App
|- src
    |- modules
    |     |-rick-and-morty
    |
    |- shared
        |- assets
        |- components
        |- config
        |- constants
        |- contexts
        |- lib
```

## Pre-requisite

1. Node (v14.17.3)

**Test Suite**

Jest and RTL is integrated with the application to do testing.

Test configuration is maintained in setupTests.js file.

## Development Instructions

Follow the provided steps to setup the project.

## Build Instructions

**Install Dependencies**

```sh
$ npm install
```

**Run Tests**

```sh
$ npm run test
```

**Production Build:**

```sh
$ npm run build
```

**Development Build:**

```sh
$ npm run build-dev
```

**Watch Mode:**

```sh
$ npm run start
```

## Application Components

**App State Management** : for app state management, useReducer hook with combined with context is being used to avoid unnecessary inclusion of plethora of state management related packages

**Error Boundary** - to avoid situations where the entire UI breaks due to an error, a proper error boundary is being used.

**Loading Fallback** - to show Loader when components are loading asynchronously.

## Better performance optimizations:

**Lazy loading**: Used Lazy Loading to split the chunk.

**Prefetch**: Using /\* webpackPrefetch: true \*/ to prefetch the module.

## Accessibility

Whole app is structured with improved semantic markup and works perfectly with keyboard.

## Thought Process

We are using virtualized components like react-virtuoso and react-virtualized-select to prevent the UI from lagging. Also, from calculation the list of characters and episodes will be in limit. So no, need to do pagination or infinite scroll as well. Virtualization components can handle lakhs of data without any performance issue.
