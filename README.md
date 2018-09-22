# my Portfolio Builder

This is a simple & demo React application, which lets user pick stocks and add it to their portfolio. The app also shows some basic analytics related to user's portfolio.

This app is created with `create-react-app` and an external JS library used here is `chart.js`. This app uses only vanilla CSS.

## Installation:
Navigate to project folder and run `npm install`

## Starting the app:

For development build run `npm start`. For production build, you need to build it first with `npm run build` then to start the server with production build run `serve -s build`.

## About the app

This app doesn't use any API, stocks data's are available in `data.json` file. The user can add stocks from "Pick Stocks" section by clicking on "+" icon or else user can also drag & drop it in portfolio area.


The data in portfolio over is calculated based on the portfolio built by the user.
