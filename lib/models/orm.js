import bookshelf from 'bookshelf';
import PG from '../connections/pg';

const ORM = bookshelf(PG);
ORM.plugin('bookshelf-page');

process.stderr.on('data', function(data) {
    if (process.env.NODE_DEBUG && process.env.DATABASE_DEBUG) {
        console.log('bookshelf', JSON.stringify(data));
    }
});

export default ORM;
