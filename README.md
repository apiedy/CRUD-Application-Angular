# CRUD-Application-Angular
This is a basic CRUD application using AngularJS

### CRUD Application
A CRUD application is an application which does the 4 most basic operations on data being:
- C - Create
- R - Read
- U - Update
- D - Delete

### The App:
All the above mentioned operations can be performed in the application, the home page gives 2 buttons `Create` and `Display` which routes to the respective pages.

Create gives you a form to enter the details and the app redirects to display page after the addition where you are provided with two actions `Edit` and `Delete`. Delete prompts you for confirmation, upon which acts accordingly and edit redirects you to a form where you are to change the details as needed.

On editing successfully you are redirected back to the display page which lists all the available records. You can abort Edit operation by redirecting to the home by clicking the header text.

### Routes:
```
/home                - home page
/display/students    - displays the existing list of students in the DB
/display/students/id - displays details of the particular student also provides options to edit and delete the record
/create              - the form to create a new record in the database
```

`NOTE:` On running the app it is loaded to the display page by default, you can navigate to the home page by clicking the application header on top.

### Node Dependencies
You need to have [json-server](https://github.com/typicode/json-server) installed on your system to run the database. To install:

`npm install -g json-server`

### json-server
Create a new folder at the root level and create a json file in that folder `db.json`. In a different terminal window run the following command to host the database:

`json-server --watch db.json --port 3030`

### Instructions:
```
bower install --save
browser-sync start --server
```
