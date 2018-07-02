# Front-End-Developer-Test
This a developer test based on these specs:

Using the Javascript framework and weather forecast API of your choice (we recommend https://openweathermap.org/), design and build a project that displays the weather in five different cities. The homepage should give an oversight, and there should be five pages linked that give greater insight into each cities’ weather. The app’s functionality and aesthetic will be assessed equally.

This app is developed in Reactjs, using webpack babel, and npm for build tools and set up.

Webpack bundles the app into one js file, bundle.js that minimizes overhead.

As far as structure, the entry point for this react app is index.js. 
index.js imports the main app file app.js
appjs handles all of the routing with react-router-dom and imports all of the component pages.

The home component makes a multiple city query to ge the current weather information for five cities,
New York, London Los Angeles, Sydney, Hong Kong.

The indivual city component page grab the forcast data for that specific city
