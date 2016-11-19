const uuid = require('uuid');

exports.seed = function(knex, Promise) {
  const peopleId = uuid.v4();

  const people = () => {
      return knex('people').insert({
          id: peopleId,
          first_name: 'Admin',
          last_name: 'Kirimo',
          full_name: 'Admin Kirimo',
          phone: '0218791000',
          address: 'Jl Kirim kirim no 21, Jakarta',
          current_job: 'Sales Manager',
          created_at: '2016-11-03T15:33:00.952Z'
      });
  }

  const truncates = () => {
      return knex('people').truncate()
  }

  return truncates()
    .then(people);
};
