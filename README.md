# People Manager

Implement CRUD in backend (API) and frontend, using Koa Vue and PostgreSQL.

## Installation
There are contains 2 section, and run in different port :
####1. API, in root directory ( Port 3000 )
####2. frontend, in subdirectory "view" ( Port 8080 )
So must install all dependencies in API and view.

### API
Install all node dependencies in root directory
```
npm install
```

### # Make database first in PostgreSQL
Make a database in PostgreSQL named :
```
people_manager
```

### # Then make DB migration
In root directory, make table and schema
```
npm run db:migrate
```

### # Seed data to database (optional)
Seed some data to database for testing development
```
npm run db:seed:run
```

### Frontend
Move to directory "view", then install front dependencies
```
npm install
```

## Running project
Install API and frontend dependencies first,
cause this project is still development,
so just run API and front end in different tabs in terminal in dev mode

### # Run API in dev mode
Move to root directory then run command :
```
npm run start:dev
```

### # Run frontend in dev mode
move to directory "view", then run command :
```
npm run dev
```

### Other API commands
### # Test API
Run following command to run the tests.
```
npm run test:api
```

### # Build
```
npm run build
```

### # Start API in dev mode
```
npm run start:dev
```

### # Start API
```
npm run start
```
