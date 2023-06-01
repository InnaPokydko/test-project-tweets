# React homework template

This project was created with
[Create React App](https://github.com/facebook/create-react-app). For acquaintance
and advanced settings
[refer to documentation](https://facebook.github.io/create-react-app/docs/getting-started).

# Test Project Tweets

This project implements the display of user cards with the ability to follow/unfollow users. It utilizes React, Redux Toolkit, RTK Query, and React Router.

## Task Overview

-Display a list of user cards with user information. -Each card includes user details, follower count, and a "Follow" button to follow/unfollow the user. -When the "Follow" button is clicked, the button text changes to "Following" and the button color changes. The follower count increases by 1. -When the page is refreshed, the changes should persist. -The button should remain in the "Following" state with the corresponding color, and the follower count should not reset to the initial value. -When the "Follow" button is clicked again, the button text and color revert to their original state. The follower count decreases by 1. -The number 100,500 should be represented as a single value (100500) in the code, but displayed with a comma (100,500) in the UI. -Create a custom backend for development using the mockapi.io UI service. -Create a "users" resource with user objects as described below.

## Routing

Implement routing using React Router with the following routes: '/' for the home page and '/tweets' for the tweets page. If a user accesses a non-existent route, they should be redirected to the home page.

## Project Structure

The project utilizes React for building the user interface, React Router for handling routing, Redux Toolkit for managing application state, and RTK Query for fetching data from the API.

src/components: Contains components such as TweetCard, Tweets, Home, NotFound. src/routes: Contains components for pages and routing configuration. src/store: Includes Redux Toolkit configuration and global application state.

Clone the repository to your local machine. Install dependencies by running npm install. Start the project by running npm start. Open your browser and go to http://localhost:3000.


## Technologies and Libraries

-React https://legacy.reactjs.org/docs/react-dom.html -Redux Toolkit https://redux-toolkit.js.org/tutorials/quick-start -RTK Query https://redux-toolkit.js.org/tutorials/rtk-query -React Router https://github.com/remix-run/react-router/tree/dev/examples

## Additional Guidelines

Add your own avatar images for each user. Replace the image URLs accordingly. Set up your own development backend using the mockapi.io service. Create a "users" resource with user objects as described in the task. Implement pagination to load the list of users in batches. Keep in mind that user data will only be modified locally on the client-side.