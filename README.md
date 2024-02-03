# Book-Search-Engine

## Your Task

This is a MERN focused application that allows users to personalize their book data. It contains starter code with a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end.

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

## Mock-Up

Let's start by revisiting the web application's appearance and functionality.

As you can see in the following animation, a user can type a search term (in this case, "star wars") in a search box and the results appear:

![Animation shows "star wars" typed into a search box and books about Star Wars appearing as results.](./Assets/21-mern-homework-demo-01.gif)

The user can save books by clicking "Save This Book!" under each search result, as shown in the following animation:

![Animation shows user clicking "Save This Book!" button to save books that appear in search results. The button label changes to "Book Already Saved" after it is clicked and the book is saved.](./Assets/21-mern-homework-demo-02.gif)

A user can view their saved books on a separate page, as shown in the following animation:

![The Viewing Lernantino's Books page shows the books that the user Lernaninto has saved.](./Assets/21-mern-homework-demo-03.gif)

### Usage

To get the application up and running, you will need to use vite, install the required technologies and run the commands below as follows.

1. npm install (concurrently, apollo/client, apollo server, mongoose, react, express, jwt, bcrypt, eslint)

2. npm start (test server and confirm set up in the backend)

3. npm run dev 

Please also see the link for the launched application below.

[link]()

### Back-End Specifications

* `auth.js`: Updates the auth middleware function to work with the GraphQL API.

* `server.js`: Implements the Apollo Server and apply it to the Express server as middleware.

* `Schemas` directory:

  * `index.js`: Export the typeDefs and resolvers.

  * `resolvers.js`: Defines the query and mutation functionality to work with the Mongoose models.

  * `typeDefs.js`: Defines the necessary `Query` and `Mutation` types:

    * `Query` type:

      * `me`: Which returns a `User` type.
  
    * `Mutation` type:

      * `login`: Accepts an email and password as parameters; returns an `Auth` type.

      * `addUser`: Accepts a username, email, and password as parameters; returns an `Auth` type.

      * `saveBook`: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a `User` type. (Look into creating what's known as an `input` type to handle all of these parameters!)

      * `removeBook`: Accepts a book's `bookId` as a parameter; returns a `User` type.

    * `User` type:

      * `_id`

      * `username`

      * `email`

      * `bookCount`

      * `savedBooks` (This will be an array of the `Book` type.)

    * `Book` type:

      * `bookId` (Not the `_id`, but the book's `id` value returned from Google's Book API.)

      * `authors` (An array of strings, as there may be more than one author.)

      * `description`

      * `title`

      * `image`

      * `link`

    * `Auth` type:

      * `token`

      * `user` (References the `User` type.)

### Front-End Specifications

* `queries.js`: This will hold the query `GET_ME`, which will execute the `me` query set up using Apollo Server.

* `mutations.js`:

  * `LOGIN_USER` will execute the `loginUser` mutation set up using Apollo Server.

  * `ADD_USER` will execute the `addUser` mutation.

  * `SAVE_BOOK` will execute the `saveBook` mutation.

  * `REMOVE_BOOK` will execute the `removeBook` mutation.

* `App.jsx`: Contains the Apollo Provider to make every request work with the Apollo Server.
 
* `SearchBooks.jsx`:

  * Utilizes the Apollo `useMutation()` Hook to execute the `SAVE_BOOK` mutation in the `handleSaveBook()` function instead of the `saveBook()` function imported from the `API` file.

* `SavedBooks.jsx`:

  * Uses the `useMutation()` Hook to execute the `REMOVE_BOOK` mutation in the `handleDeleteBook()` function instead of the `deleteBook()` function that's imported from `API` file.

* `SignupForm.jsx`: Utilized state, react, and the relevant mutation to handle new users. 

* `LoginForm.jsx`: Utilized state, react, and the relevant mutation to facilitate login.

### Credits

I sought help from instructor and TA to resolve issues with token retrieval and the jsx files, as well as a calendy tutor to resolve issues with the server/token.

### License

MIT License

Copyright (c) 2024 aubreymlj96

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
