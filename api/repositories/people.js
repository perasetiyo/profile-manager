import uuid from 'uuid';
import { PG, ORMUtils } from 'app/lib';
import { PeopleModel } from 'app/lib';

const TABLE_NAME = 'people';

export default class PeopleRepository {

  static async insert(data) {
      const id = uuid.v4(),
          { first_name, last_name } = data,
          full_name = `${first_name} ${last_name}`;
      await PG(TABLE_NAME).insert(Object.assign(data, { id, full_name }));
      return id;
  }

  static async first(criteria) {
      return await PeopleRepository.get(criteria);
  }

  static async get(criteria) {
    return await PG(TABLE_NAME).where(criteria).first();
  }

  static async list(params = {}) {
    const { page, pageSize, criteria } = params;
    let ids;
    return await PeopleModel.query((qb) => {
      if (criteria) {
        qb.where('full_name', 'ilike', `%${criteria}%`);
      }
      qb.orderBy('first_name', 'asc');
    })
    .fetchPage({
      pageSize: pageSize || 15,
      page: page || 1,
    })
    .then(function (results) {
      const { models, pagination } = results;
      const { startRange, endRange } = ORMUtils.getRange(pagination);
      return {
        people: models,
        pagination: Object.assign(pagination, {
          startRange,
          endRange
        })
      };
    });
  }

  static async update(id, data) {
    return await PG(TABLE_NAME).where({ id })
      .update(Object.assign(data, {
        updated_at: new Date()
      }));
  }

  static async delete(id) {
    return await PG(TABLE_NAME).where({ id }).del();
  }

  static async truncate() {
    await PG.raw(`TRUNCATE TABLE ${TABLE_NAME} CASCADE`);
  }

}
