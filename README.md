# sequelizedBurger
### Overview
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app displays the burger on the left side of the page. Each burger in the waiting area is also attached a Devour it! button. When the user clicks "Devour It", the burger will move to the right side of the page. Every burger is stored in a database, whether devoured or not.

### Live Link
tbd

### Under the Burger Bun
Eat-Da-Burger is designed using the the **M**odel **V**iew **C**ontroller methodology. 
* **Model**
The model uses sequelize methods to interact with the database.
* **View**
The view portion of the application utilizes jQuery, AJAX, the handlebars framework and css to provide a user interface that is dynamically rendered based on requests from the client and responses from the server to those requests.
* **Controller**
The controller determines all of the routes between server and client and handles requests and responses using the methods created in our model.

### Technologies Used
#### Front-End
* CSS styling incorporating the Bootstrap Framework
* JavaScript and jQuery for UI functionality
* AJAX to post form data and communicate with the back-end

#### Back-End
* Server Environment: Node.js and Express
* Database: JAWS DB MySQL
* Node Package Managers: 
  - Express. This is the Node.js web application framework we use for routing
  - Express-Handlebars. This package handles our html templates that are rendered to the client
  - Sequelize. The Sequelize package provides us with a ready made orm and allows easy interaction with the app's database.

#### Acknowledgements
Burger Icon: <a href='https://www.freepik.com/free-vector/big-hamburger-icon-graphic-illustration_2631301.htm'>Designed by Rawpixel.com</a>
