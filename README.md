# Sign-Up Form Application 

## The Application allows users to manage to sign-up form:

This application helps in managing sign-up form and sign-in form.
The Application shows a list of all available registered user and dasboard and all the login user detail to get edit and delete functionality.
Application has the following below feature:

- Build a single page app with a sign-up form.
• The form should allow users to enter first name, last name, email, and password.
• All fields are required.
• Password validation:
    o Should be a minimum of eight characters,
    o Should contain lower and uppercase letters,
    o Should not contain user’s first or last name.
• Email should be validated but there are various ways of accomplishing this. So, show us what
you consider as a proper email validation.

The form should send a POST request to https://demo-api.now.sh/users. The request body
example:

## Tools and Technology used:
Below are the list which we have used to develop our application:
- Angular Js(-version 10) as as a frontend programming language.
- Jasmin TEST module for writing Integration test.
- By default protector e2e folder is running here.
- Cypress Test for E2E.
- IDE used ( Visual Studio Code ).
- GIT as a repository for Distributed Version Control System.
- POSTMAN as a REST Client.

## Structure of Application
src
    -app
        _components
                alert.component.html
                alert.component.ts
                index.ts
        _helpers
                auth.guard.ts
                error.interceptor.ts
                fake-backend.ts
                jwt.interceptor.ts
                index.ts
        _models
                alert.ts
                user.ts
                index.ts
        _services
                account.service.ts
                alert.service.ts
                index.ts
        account
                account-routing.module.ts
                account.module.ts
                layout.component.html
                layout.component.ts
                login.component.html
                login.component.ts
                register.component.html
                register.component.ts
                index.ts
        home
                home.component.html
                home.component.ts
                index.ts
        users
                add-edit.component.html
                add-edit.component.ts
                layout.component.html
                layout.component.ts
                list.component.html
                list.component.ts
                users-routing.module.ts
                users.module.ts
                index.ts
        app-routing.module.ts
        app.component.html
        app.component.ts
        app.module.ts
    environments
    environment.prod.ts
    environment.ts
index.html
main.ts
polyfills.ts
styles.less
package.json
tsconfig.base.json

## Step to see the running application with the following screenshot

- ![Step 1](https://github.com/tanvipriya/compare_product/blob/main/screenshot/Step1.png?raw=true "After run npm install")
- ![compare_two_product](https://github.com/tanvipriya/compare_product/blob/main/screenshot/compare_two_product.png?raw=true "Click on Compare two product")
- ![compare_three_product](https://github.com/tanvipriya/compare_product/blob/main/screenshot/compare_three_product.png?raw=true "Click on Compare three product")

## Configuration discribe into frontend
```
- FRONTEND - https://github.com/tanvipriya/compare_product/tree/main/src
```


## Thank you and welcome everyone to use our Application..!!!

- For any Queries, please reach out to me on below communication channel
- Email = tanvipriya08@gmail.com
- Mobile = +31 644625307
