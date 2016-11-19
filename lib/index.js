/** @module Index */
import { install } from 'source-map-support'; install();

import App from './app';
import { boot } from './app';
import PG from './connections/pg';
import Redis from './connections/redis';
import { ERROR_CODES, AppError, HttpError } from './error.js';
import PeopleRepository from './repositories/people';
import { PeopleModel } from './models/people';
import { ORMUtils } from './utils';

// Exposes main entrypoint to the lib.
export default App;

// Exposes modules
export { boot, PG, Redis, ORMUtils };

// Exposes Models
export { PeopleModel };

// Exposes Repositories
export {
    PeopleRepository
};

// Exposes the lib error.
export { ERROR_CODES, AppError, HttpError };
