# SpaceX 🚀🛰
Using the Space X API, I’ve created a React application to render a list of Dragons and Rockets. On clicking these, an expanded view of either the Dragon or Rocket will appear in a modal with further information. To do this, I’ve used the `/rockets` and `/dragons` endpoints of the API and have used the CSS framework Bulma for styling the UI.

## Tech Used

- HTML
- JavaScript
- React
- Webpack 
- Babel 
- Axios
- SCSS
- Bulma 

## How to run Space X locally on your device. 

  ### Step One: 

  Open your preferred command line system, and navigate to the folder where you would like Space X to be on your device. 
  
  **Note:** This will create a new folder named ‘SpaceX’!  

  ### Step Two: 

  Once in your designated folder, press the lovely <span style='color:green'>**GREEN**</span> code button up there⬆️. You can choose between using an HTTPS or SSH. From here, type the following command into your terminal window: 

  **Note:** I’ve used SSH for the example below

    git clone git@github.com:annie-kayal/SpaceX.git

  ### Step Three: 

  Once completed, this should have created a new folder called ‘SpaceX’. Run the following command to install the dependencies: 

    Npm install 

  ### Step Four: 

  You’re nearly there! In your command line run: 

    Npm run start 

And that's it! 

This should navigate to localhost:8001 in your preferred browser and load the SpaceX application I've built. Alternatively, copy and paste the following URL into the browser:

    http://localhost:8001/

Happy searching!🔍

## Future Features

- To implement React router for navigation to different components across the application and for the UI to be inline with URL.

- Have a spinner to be available if data was yet to fetched from the API for user experience.

- Add a fade on the modal element to ensure a smooth transition once the user has clicked the plus button. 

- Have an animated background image of the stars twinkling by using an appropriate gif.  


