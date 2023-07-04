README

Added dependancies
react-lottie

## App.js
- import all dependencies, components
- function declaration
- state variables, fetch calls, custom functions
- return: routes and what to display on UI

## useEffect
- check for authentication
- reset initial value of user to the decoded jwt
- fetch calls for read functionality

***NOTE: fetch requests will be sent to the backend, $ `rails routes -E`.***
## read functionality - index API endpoint
- fetch defaults to the `GET` http verb so the request only needs the url for the index API endpoint
```js
  const fetchReadmes = () => {
    fetch(`${url}/readmes`)
      .then((response) => response.json())
      .then((payload) => setReadmes(payload))
      .catch((error) => console.log("readme error", error))
  }
```

## create functionality - create API endpoint
- Since fetch defaults to the `GET` http verb, this request needs the url for the create API endpoint and the option to change the http verb to `POST`
- Since there are validations and specifications for what is allowed to be saved into the db, the attributes for the readme have to be sent up with the request. So the fetch request needs to know what to do with those attributes which will be represented by a parameter call `newRead`
```js
  const createReadme = (newRead) => {
    fetch(`${url}/readmes`, {
      body: JSON.stringify(newRead),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => fetchReadmes())
      .catch((errors) => console.log("Readme create errors:", errors))
  }
```

## update functionality - update API endpoint
- Since fetch defaults to the `GET` http verb, this request needs the url for the update API endpoint and the option to change the http verb to `PATCH`
- Since there are validations and specifications for what is allowed to be saved into the db, the attributes for the readme have to be sent up with the request. So the fetch request needs to know what to do with those attributes which will be represented by a parameter call `editRead`
- The update endpoint also needs an id params to know which entry to modify. The id will be represented by a params call `id`.
```js
  const updateReadme = (editRead, id) => {
    fetch(`${url}/readmes/${id}`, {
      body: JSON.stringify(editRead),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then((response) => response.json())
      .then((payload) => fetchReadmes())
      .catch((errors) => console.log("Readme update errors:", errors))
  }
```

## delete functionality - destroy API endpoint
- Since fetch defaults to the `GET` http verb, this request needs the url for the destroy API endpoint and the option to change the http verb to `DELETE`
- The destroy endpoint needs an id params to know which entry to modify. The id will be represented by a params call `deleteId`.
```js
  const deleteReadme = (deleteId) => {
    fetch(`${url}/readmes/${deleteId}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => fetchReadmes())
      .catch((errors) => console.log("Readme delete errors:", errors))
  }
```

## login, signup, logout functionality
- All are using the devise/jwt configuration to track user sessions
- Structure reflects what is used on apartment app
- Track changes to the form using localStorage

## routing components
- the UI will have links that route to each applicable file to display the response from each fetch request
- each route has the path attribute which has a custom url that leads to the applicable react component and element attribute which contains the react component call
- pass fetch requests, state variables, custom functions to each applicable react component call
- conditional rendering for edit, new, show