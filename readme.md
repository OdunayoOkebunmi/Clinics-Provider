# Clinics-Provider
RESTful API endpoint to allow search in multiple clinic providers and display results from all the available clinics by any of the following:
- Clinic Name
- State [ex: "CA" or "California"]
- Availability [ex: from:09:00, to:20:00]



## API Documentation
https://documenter.getpostman.com/view/10230743/2s93Y2ShD4



## Getting Started

### Tools/Stacks
1. Node.js
2. Express
4. Typescript
5. Docker
6. NodeCache
7. Postman
8. Jest


### Setting up
1. Clone this repository into your local machine:
```
git clone https://github.com/OdunayoOkebunmi/Clinics-Provider
```
2. cd into the folder
```
cd Clinics-Provider
```

3. Create `.env` file and fill out the required information 
```
cp .env.example .env
```
4. Install dependencies

```
npm install
```
5. Start the application by running the server script.

```
npm run server
```

6. Install postman to test all endpoints on port `3000`.

7. Rate Limiting has been set up to manage requests made to the APIs.

### Cache configuration
Set the `LOCAL_CACHE_TTL` in `.env` file to the number of hours `eg  LOCAL_CACHE_TTL=3600`

### API Docs
Routes
- Make a `GET` request to `http://localhost:3000/` for base url
-  Make a `GET` request to `http://localhost:3000/clinics` for list of clinics. You can use the query below:

| query  | Type |Description |
| ------------- | ------------- |------------- |
| name  | string  | Optional  |
| state	  | string  |Optional  |
| from	  | string  |Optional  |
| to	  | string  |Optional  |


### Running Docker

1. Run `docker build -t scratch-pay .`

2. Run `docker run -p 3000:3000 scratch-pay`

3. Server will start on port `3000`

### Test
run test using ```npm test```.

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the MIT license - see the LICENSE.md file for details.
