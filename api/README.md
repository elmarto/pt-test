# Pro Translating Test

This repository demonstrates the usage of Sequelize within an Express app, and a AngularJS client app.

## Starting API

1. Clone this repository.
2. Setup a MySQL database (default name: `protranslating_test`)
3. Configure in `api/config/config.json` your database access settings.
4. From the API folder run these commands to populate and run the API:

  ```
  npm install
  node_modules/.bin/sequelize db:migrate
  node_modules/.bin/sequelize db:seed:all
  npm start
  ```

## Starting the client app

1. Once you have running the API, run this commands:

  ```
  npm install
  python -m SimpleHTTPServer
  ```
  Note: Python was used in this example to run a http server for the frontend, but can be used any other.

2. Visit `http://localhost:8000/` in a browser to start using the app.



## Some pending stuff

  1. Testing
  2. Setup a Task Running tool for compiling, lints and more.
  3. Configure a dynamic Swagger.