# About newman_runner
An example of running newman with nodejs

We are using [Go Rest APIs](https://gorest.co.in/) for the tests.

# You will need
- [NodeJs](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/) or similar
- [Postman](https://www.postman.com/)

# Installation

- Clone the repository.
- Run the command on terminal.

```
npm install
```

# Before running the tests

- Open Postman and import the GoRest collection.
- Generate your own token on the [Go Rest APIs](https://gorest.co.in/) website.
- Inside the GoRest collection in Pre-request Script, replace the "YOUR_TOKEN" with your token generated on the Go Rest API website.
- Then save the collection and export in the root of the runner folder.

# Running the Sample Scenarios

- Run the command on terminal.

```
npm test
```
