## Api

Node + Express + Mongoose + TypeScript

#### Installation

```
cd api
npm install
npm start
```

Default port: ``` 3001 ```

Default MONGODB_URI: ``` mongodb://localhost:27017/Donors ```

Both can be changed using a env var or directly on server.ts

#### Testing

Jest + Supertest

``` npm run test:coverage ```

#### Deploy

``` 
npm run build
pm2 start build/server.js
```

## Frontend

React + Redux + Bootstrap 4

Default port: ``` 3000 ```

Default Api URL: ``` http://35.231.121.25/api ```

Api URL can be changed on index.js

#### Installation

```
cd frontend
npm install
npm start
```

#### Deploy

```
npm run build
pm2 serve build 3000
```

## Docs

RAML

#### Installation

There's many tools that can generate a HTML from a RAML file, I've used raml2html for this project.

```
npm i -g raml2html
cd docs
raml2html api.raml > build/index.html
```

#### Deploy

```
pm2 serve build 3003
```
