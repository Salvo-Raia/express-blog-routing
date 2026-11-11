![Boolean Tech Academy](https://img.shields.io/badge/Boolean_Tech_Academy-001632?style=for-the-badge)

# 🎓 Exercise 44/50 - Express Blog Routing

Extend the personal blog backend by introducing modular routing with Express. Create dedicated routes for the posts resource and implement the five main CRUD operations following REST conventions.

## 📌 Project Overview

| Property | Details |
|:--|:--|
| Repository | `express-blog-routing` |
| Category | Boolean Tech Academy |
| Type | Exercise |
| Exercise | 44/50 |

## 🎯 Assignment

Create a dedicated routing file for the posts resource and implement the main CRUD operations.

### Milestone 1 - Create the Posts Router

Create a `routers/posts.js` file to contain all routes related to the posts resource.

### Milestone 2 - Implement CRUD Operations

Create the routes for the five main operations, following REST conventions:

| Operation | HTTP Method | Route | Expected Response |
|:--|:--|:--|:--|
| Index | `GET` | `/posts` | `Lista dei post` |
| Show | `GET` | `/posts/:id` | `Dettaglio del post :id` |
| Create | `POST` | `/posts` | `Creazione di un nuovo post` |
| Update | `PUT` | `/posts/:id` | `Modifica del post :id` |
| Delete | `DELETE` | `/posts/:id` | `Cancellazione del post :id` |

For this exercise, each route must return a text message confirming the operation the server is expected to perform.

### Milestone 3 - Register the Router

Register the posts router inside `app.js`, using `posts/` as its route prefix.

All posts endpoints must therefore be accessible through the `/posts` path.

### Milestone 4 - Keep the Posts Array

Save the provided posts array somewhere in the project.

It will be needed in future exercises and can also be used to experiment with the optional bonus tasks.

### Bonus 1 - Return the Posts List

Modify the Index route to return the complete list of posts in JSON format instead of a plain text message.

### Bonus 2 - Return a Single Post

Modify the Show route to retrieve and return a single post in JSON format, using its ID.

## 🛠️ Technologies
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)

## 💡 What I Learned

- Organizing Express routes into separate modules.
- Creating and registering an Express Router.
- Understanding REST conventions and HTTP methods.
- Implementing CRUD route structures.
- Handling dynamic route parameters with `:id`.
- Returning text and JSON responses from Express endpoints.
- Managing and reusing structured data across routes.

## ©️ Credits

Exercise assigned by **Boolean Tech Academy** as part of the Web Development course - Class 152 - Year 2025-2026
