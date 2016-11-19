# People Manager

Single Page Application that implement CRUD, using Koa Vue and PostgreSQL, with internal API.


## Project Dependencies
- koa
- vue
- gulp
- postgres
- knex
- bookshelf
- and many more, can be see in package.json


## Installation

### Pre-install :
Install a local redis server, postgres, and other required software.
Please find it on project dependencies section

### Node Requirement
Install all node dependencies
```
npm install

```

### Test
Create new dotenv file in `deploy/env/test/dotenv` for test purposes environment variables.
Then, run following command to run the tests.
```
npm test
```
## Running the API and server
In order to run the API, copy `deploy/env/dev/dotenv` into project root folder as `.env` and fill all necessary environment variables to match development machine environment.

### Build
```
npm run build

```

### Start API and server
```
npm start
```

### DB migration
Database is being connected through [knex.js](http://knexjs.org/) as well as migration scripts.

#### First make migration file
Migration format :
```
[feature]
```
Example :
```
create-table-people
```
Usage Example
```
npm run db:make create-table-people
```
#### Then migrate database
Usage Example :
```
npm run db:migrate
```

### DB seeder
Seed some data to database for testing development.

#### First make seed file
Seed format :
```
[feature]
```
Example :
```
people
```
Usage Example :
```
npm run db:seed:make people
```

#### Then seed data to database
Usage Example :
```
npm run db:seed:run
```
