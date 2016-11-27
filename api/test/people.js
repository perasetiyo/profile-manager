import test from 'ava';
import http from 'http';
import { agent } from 'supertest';
import App from '../../lib';
import routes from '../src/Http/Routes';
import { PeopleRepository } from '../../lib';
import { generateNewPeople } from './_helpers';

const API_VERSION = process.env.API_VERSION || 'v1';

test.before('Running', async t => {
    const { app } = new App(routes),
        tester = agent(http.createServer(app.callback()));
});

test.after.always('Truncate', async t => {
  await PeopleRepository.truncate();
});

test('Create people', async t => {
  const { app } = new App(routes),
    tester = agent(http.createServer(app.callback()));

  let id, people_id;

  await tester
    .post(`/${API_VERSION}/people`)
    .send(generateNewPeople())
    .expect(201);

  await tester
    .get(`/${API_VERSION}/people`)
    .expect(200);
});

test('List people', async t => {
  const { app } = new App(routes),
    tester = agent(http.createServer(app.callback()));

  let id, people_id;

  await tester
   .post(`/${API_VERSION}/people`)
   .send(generateNewPeople())
   .expect(201);

  await tester
    .get(`/${API_VERSION}/people`)
    .expect(200);
});

test('Remove people', async t => {
  const { app } = new App(routes),
    tester = agent(http.createServer(app.callback()));

  let id;

  await tester
    .post(`/${API_VERSION}/people`)
    .send(generateNewPeople())
    .expect(res => {
      const people = res.body.data;
      id = people.data.id;
      t.truthy(people);
    });

  await tester
    .delete(`/${API_VERSION}/people/${id}`)
    .expect(200);
});

test('People update', async t => {
  const { app } = new App(routes),
    tester = agent(http.createServer(app.callback())),
    people = generateNewPeople();

  let id;
  await tester
    .post(`/${API_VERSION}/people`)
    .send(people)
    .expect(201)
    .expect(res => {
      const people = res.body.data;
      id = people.data.id;
      t.truthy(people);
    });

  const update = {
    first_name: 'first name',
    phone: '0218791000',
    address: 'Jl Kirim kirim no 21, Jakarta'
  };

  await tester
    .put(`/${API_VERSION}/people/${id}`)
    .send(update)
    .expect(200)
    .expect(res => {
      const people = res.body.new_data,
      firstName = people.data.first_name;
      t.deepEqual(firstName,'first name');
    });
});
