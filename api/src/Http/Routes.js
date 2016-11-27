// module provide routing API
import PeopleController from './Controllers/PeopleController';

const API_VERSION = process.env.API_VERSION || 'v1';

export default (router) => {
  // set prefix
  router.prefix(`/${API_VERSION}`);

  // list profile
  router.get('/people', PeopleController.list);

  // get individual profile
  router.get('/people/:id', PeopleController.get);

  // create profile
  router.post('/people', PeopleController.create);

  // update profile
  router.put('/people/:id', PeopleController.update);

  // delete profile
  router.delete('/people/:id', PeopleController.delete);
}
