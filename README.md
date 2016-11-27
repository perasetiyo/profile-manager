# People Manager

Single Page Application that implement CRUD, using Koa Vue and PostgreSQL, with internal API.


## Installation

### Node Requirement
Install all node dependencies
```
npm install

```

### Make database first in PostgreSQL
Make a database named
```
people_manager
```

### DB migration
Make table and schema

#### Migrate database
```
npm run db:migrate
```

### DB seeder
Seed some data to database for testing development.

#### Seed data to database
```
npm run db:seed:run
```

### Test API
Run following command to run the tests.
```
npm run test:api
```

### Build
```
npm run build

```

### Start API in dev mode
```
npm run start:dev
```

### Start API
```
npm run start
```
