// module for main index
import { install } from 'source-map-support'; install();

import App from './app';
import { boot } from './app';
import PeopleRepository from '../api/repositories/people';
import PG from './connections/pg';
import { PeopleModel } from './models/people';
import { ORMUtils } from './connections/utils';

export default App;

export { PG, ORMUtils };

export { PeopleRepository };

export { PeopleModel };

export { boot };
