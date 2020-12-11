# Ellipsis-Drive Challenge: some notes

## Notes on the code and the implementation

- The components are kept quite short on purpose, for better readability and maintainability.
  - The `Overview` component is on the longer side, mainly because I kept all the logic there. If necessary, that logic could be refactored out with custom hooks for example.
- I didn't separate logic and layout in components, mainly because I feel that using functional components make this separation less relevant.
- I kept the file structure quite flat because I feel it isn't large enough to do otherwise. In larger apps more hierarchy could be necessary.
- The `Overview` page is served at `/overview` to mimic how it would be in a real app. `/` redirects to `/overview`.
- Most of the colors are using the theme provided by the `Theme` context, so modifying most of the colors is a simple matter of modifying the `theme` object.
- Styles object are kept in the same files as the components. They could be separated if either got too long.
- The main libraries used are:
  - `react-router-dom` for the small bit of routing used.
  - `fuse.js` for the fuzzy search.
  - `@material-ui/core` and `@material-ui/icons` as the UI library.

## Improvements

The following are some ideas of improvements to the page:
- Better handling of overflow issues
  - For the titles of the objects
- Virtualized lists if many lists are to be displayed on this page
- Add a message when there's no result on the search
- Implement the filters functionality
- Implement the settings menu


## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

