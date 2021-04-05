# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#React Component Library
Making a React Component Library with Storybook and NPM.

## Available Scripts

In the project directory, you can run:

#Installation

Create new React App project
### `npx create-react-app my-app --template typescript`
or
### `npx create-react-app my-app`

Create storybook component
### `npx sb init`

Add components for the library that need to be utilized in other projects.

check components by
### `npm run storybook`

# instructions on how deploy the library
1. Change the project name in package.json

   ````
   Add following code in package.json  
      "license": "MIT",
       "main": "lib/index.js",
       "directories": {
       "lib": "lib"
       },

2. Create an account in NPM and login from cli by running
   ### `npm login`
3. For Publishing lib Run:
   ### `npm publish`


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

