import { PeopleRepository } from 'app/lib';

export default class PeopleController {

  static async create(ctx, next) {
    const { body } = ctx.request;
    const { first_name, last_name } = body;
    const { address, phone, current_job } = body;

    // check duplicate
    const exist = await PeopleRepository.first({ first_name });
    if (exist) {
      console.log('People is already exist');
    }

    const data = { first_name, last_name, address, phone, current_job };
    const id = await PeopleRepository.insert(data);
    const people = await PeopleRepository.get({ id });

    if (people) {
      console.log("Resource are create :");
      console.log(JSON.stringify(people));
      ctx.json({
          success: true,
          data: people,
          message: "success_create_resource"
        },
        201
      );
    } else {
      console.log('Failed to create people');
    }
  }

  static async list(ctx, next) {
    const { query } = ctx;
    const results = await PeopleRepository.list(query);

    if (results) {
      console.log("Resources :");
      console.log(JSON.stringify(results));
      ctx.json({
          success: true,
          data: results,
          messages: "success_get_all_resources"
        },
        200
      );
    } else {
      console.log('People not found');
    }
  }

  static async get(ctx, next) {
    const { params } = ctx;
    const { id } = params;
    const results = await PeopleRepository.get({ id });

    if (results) {
      console.log(`Resource ${id} :`);
      console.log(JSON.stringify(results));
      ctx.json({
          success: true,
          data: results,
          message: "success_get_resource"
        },
        200
      );
    } else {
      console.log('People not found');
    }
  }

  static async update(ctx, next) {
    const { body } = ctx.request;
    const { params } = ctx;
    const { id } = params;
    const { first_name, last_name } = body;
    const { address, phone, current_job } = body;
    const data = {first_name, last_name, address, phone, current_job};
    let people = await PeopleRepository.get({ id });

    try {
      console.log('update ', id, JSON.stringify(data));
      await PeopleRepository.update(id, data);
      data_changed = Object.assign(data);
      const new_data = await PeopleRepository.get({ id })
      ctx.json({
          success: true,
          data_changed,
          new_data,
          message: "success_update_resource"
        },
        200
      );
    } catch (err) {
      console.log(err.message);
    }
  }

  static async delete(ctx, next) {
    const { params } = ctx;
    const { id } = params;

    const people = await PeopleRepository.get({ id });

    if (!people) {
      console.log('People not found');
    } else {
      await PeopleRepository.delete(id);
      console.log(`Deleted resource with ${id}`);
    }

  }

}
