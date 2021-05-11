# StoryPick
A JIRA-like app in which users can post stories and admins can review those stories. Made using React and Redux 

# Features

Login: a user can login as a normal user or an admin

Users: can add stories and view user stories

Admins: can view user stories and accept or reject them. Users and admins will be notified of the status of the stories 

# Tools

React | Redux | react-router 

# Cloning and Installation

Clone this repo and install npm first using:

1. #### `git clone https://github.com/alti21/StoryPick`
2. #### `cd story-pick`
3. #### `npm install`

# Dependency

The server needs to be running for the api

https://github.com/Archimydes/coding-challenge-mock-api

1. #### `git clone https://github.com/Archimydes/coding-challenges.git`
2. #### `cd coding-challenges`
3. #### `npm install`
4. #### `npm start`

## Running the Application

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Testing the Application

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Building the Application for Production 

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Other Scripts

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
