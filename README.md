# Shop do pet
*Made by:*
- Dennis Lemke Green, 11219108.
- Gabriel Tavares Brayn Rosati, 11355831.
- Filipe Augusto Oliveira da Costa, 11219161.
- Pedro Henrique Magalhães Cisdeli, 10289804.
# To-do
- [ ] Tests
- [ ] Comment Code
- [ ] Fill in project Report
### JS Functionalities
- [ ] Minor changes
### Front/Back integration
- [x] ADM
- [x] Login
- [x] Signup
- [x] Checkout
- [ ] Product 
### Backend
- [x] Customer
- [x] Order
- [x] Product
- [ ] Add images do product backend
- [x] Checkout

# Project Report
### Requirements
* README file contains the Project Report and the designated topics for the **second milestone**.
* Our navigation diagram is included in the [Project Description](#Project-Description) topic.
* All pages are now desined: ADM, Home, 3 store categories (Accessories, Cat, Dog), About Us, Login and Sing up, Cart, Checkout and _Unique Feature_.
* Added JS functionalities to pages using mock objects (included in _src/components/authentication/mockCreds.json_).
* ADM funcionality were not developed yet because currently there is no backend to manage.

---

### Project Description
* Our project was designed using bootstrap linked through a CDN and ReactJS, the instalation guide is included in the [Build Procedures](#Build-Procedures) topic.
* All resources used are linked in the footer of every page.
* _Unique Feature_: it is implemented in the Accessories page as a custom shop for collars and tags for your pets. The user can to choose from a variety of pendants and colors. 
* Functionalities added: cart and checkout,  _Unique Feature_ and Login. 
* Functionalities that we pretend to add: logic behind the ADM manage buttons and a fully functional Sing Up. Currently the Sing Up page can only validate user input data, it cannot add new credentials to the mock object. 

<h3 align="center">Navigation Diagram</h3>
<img alt="Navigation Diagram" title="Navigation-Diagram" src=".github/nav_diagram.png" />

---

### Comments About the Code
* **_public_** folder contains the main html file.
  * _index.html_ were JS is injected.
* **_src_** folder contains all components, images, css and main JS files.
  * _index.js_ sets up react-router-dom and injects the JS code in the _index.html_ file in **_public_** folder.
  * _App.js_ contains the structure of every page, Header, Component and Footer
  * _main.js_ contains all components    
* As mentioned in the [Project Description](#Project-Description), some Functionalities such as ADM and Sign Up logic were not added because there is no backend.
* Some features are outputted through alerts, make sure to keep them enable to get all functionalities.
* Login logic was developed using a mock object. All operations are based on the credential ID. ADM IDs are odd numbers and client ones are even numbers.
* To login use any of the credentials in _src/components/authentication/mockCreds.json_. Feel free to add any more credentials, just make sure to keep them in the same format as the ones already in the file.
* ADM page can be accessed via login by clicking on the ADM name in red.
* Login functionality was implemented only as an example of interation with JS. It is **COMPLETLY NOT SAFE**, please check [Comments](#Comments) session to read more about this.
* Session Storage was used to share data between components (cart, checkout, itemPage, uniqueFeat, grid and login components).

---

### Test Plan
#### Pre Login
1. Access any product page (Accessories, Cats or Dogs).
 * Try to add any product in the grid to the cart, via the shortcut button and inside the item page.
 * Inside an Item Page, test the product quantity, it should stop at 1 and there is no max limit for now.
2. Access accessorires product page and enter the _Unique Feature_.
 * Try to add it to the cart.
#### Logged in
* You can log in with a client or ADM account.
* Client: c1@hotmail.com; psw: 123.
* ADM: a1@hotmail.com; psw: 123.
1. Access any product page (Accessories, Cats or Dogs).
 * Try to add any product in the grid to the cart, via the shortcut button and inside the item page.
2. Access accessorires product page and enter the _Unique Feature_.
 * Try to add it to the cart.
3. On the cart page click the button to go to Checkout.
4. On the cart, try to remove all items by clicking the _trash icon_.
5. Add some items to cart, log out and log in on the same account.
#### Sign Up validation 
1. Try to sign up but fail to put the same passwords on both fields.
2. Try to sign up using an email already registered (c1@hotmail.com).
3. Fill every field the correct way (using an unregistered email and both passwords fields equal).
---
### Test Results
#### Pre Login
1. An alert should pop up telling the user to login.
2. An alert should pop up telling the user to login.
#### Logged in
1. A template item should be added to the cart.
2. Another of the same template item should be added to the cart (there is no product differentiation for now).
3. On the right side of the Checkout page, there should be the exact amount of products that your cart has.
4. The cart page should now display a _cart empty_ text.
5. Your cart should be **empty**.
#### Sign Up validation 
1. An alert should pop up confirming that the passwords don't match.
2. An alert should pop up confirming that the email is already in use.
3. An alert should pop up confirming that the Sign Up was successful.
---

### Build Procedures
#### Tested Versions

- The project was developed and tested with the following versions of Node and npm:
  - Node 10.19.0, 14.17.1, 16.4.0
  - npm 6.14.4, 6.14.13, 7.18.1 

#### Windows

- Download and install [Node.js](https://nodejs.org/en/download/)
- Test installation by running:
```sh
    $ node -v
    $ npm -v
```
#### Linux
- Follow the instructions according to you linux distribution [Node.js](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
- Test installation by running:
```sh
    $ node --version
    $ npm --version
```
##### Clone the repository

```sh
    $ git clone https://github.com/sprmbng/projetoWebDev.git
```

##### Install the necessary dependencies using npm and start the application

```sh
    # Make sure to run the following commands inside 'frontend' folder
    $ cd frontend/

    # Install dependencies
    $ npm install

    # After installing all dependencies 
    $ npm start
    # Shortly after a page should open automatically.
    # You can also access it through http://localhost:3000/.
```
---
### Problems
* No problems
### Comments
* Please do not add real credentials to the mock object, the storage of the fake credentials is **COMPLETLY NOT SAFE** so is the functions that handle the login logic.
* We take no responsibility or liability to any issues caused because of this.

