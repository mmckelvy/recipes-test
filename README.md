# Recipe Tracker
A simple way to track your recipes and their necessary ingredients.

## Setup
To view the app on the web without worrying about setup, visit [datasciencerecipe.herokuapp.com](http://datasciencerecipe.herokuapp.com/).

If you want to run the app locally, follow these steps:

1. Make sure you have node.js installed on your machine.  Get it at [nodejs.org](https://nodejs.org/).
1. Clone the repo.
1. Navigate to the directory on your local machine. 
1. In the command line type `npm install` (a bunch of stuff will fly by).
1. Again in the command line type: `gulp`
1. Go to localhost:3000 in your favorite browser.

## Quick notes on technologies used.
I used Backbone, Marionette, and vanilla JS for typical view / model logic.  For templating I used Jade (with Jadeify for client side templating).  Build / module tools included Gulp and Browserify, and for CSS pre-processing I used Stylus.  No CSS frameworks -- the mixins, grid, etc. are my own.