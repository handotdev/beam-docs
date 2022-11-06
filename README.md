# expressJS/typescript skeleton

* `npm install`
* `tsc`
* `npm run start`

## App Structure
Entry point is `server.ts`, which instantiates the app. Under controllers, we have the `BaseController` class, which represents a generic handler for an API endpoint. In `BaseController`, the `execute` method wraps `executeImpl` and provides request/response objects to your implementation.

### Routes
Routes define endpoints that we can hit in the API, and connect the requester to a specific controller, which pulls the response data from the data source.

### Controllers
Controllers get data from the requested model, and enforce a specific type for that response.
The `Basecontroller` class contains response objects for the HTTP response, such as `success`, `forbidden`, and `ok`.

### Services
Each controller has a companion service that fetches the data to be returned from the API, and executes any logic that has to do with the it, such as
database calls.

### Types
Response data types, enforced by services.