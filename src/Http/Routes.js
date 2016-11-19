import Validate from './Middlewares/Validate';
import Authenticated from './Middlewares/Authenticated';
import PeopleController from './Controllers/PeopleController';

const API_VERSION = process.env.API_VERSION || 'v1';

export default (router) => {
    // set prefix
    router.prefix(`/${API_VERSION}`);

    // people
    router.get('/people', Validate('People', 'list'), PeopleController.list);
    router.post('/people', Validate('People', 'create'), PeopleController.create);
    router.get('/people/:id', Validate('People', 'get'), PeopleController.get);
    router.put('/people/:id', Validate('People', 'update'), PeopleController.update);
    router.delete('/people/:id', Validate('People', 'delete'), PeopleController.delete);
};
