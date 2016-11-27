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

    console.log("Results for create :");

    if (people) {
      // TODO: Add serializers. Http/Serializers/UserSerializer
      console.log(JSON.stringify(people));
      ctx.json(people, 201);
    } else {
      console.log('Failed to create people');
    }
  }

    static async update(ctx, next) {
        const { body } = ctx.request,
            { params } = ctx,
            { id } = params,
            { first_name, last_name } = body,
            { address, phone, current_job } = body;
        const data = {
            first_name,
            last_name,
            address,
            phone,
            current_job
        }
        let people = await PeopleRepository.get({ id });
        try {
            console.log('update', id, JSON.stringify(data));
            await PeopleRepository.update(id, data);
            people = Object.assign(data);
            ctx.json(people, 200);
        } catch (err) {
            console.log(err.message);
            console.log('Failed to update user');
        }
    }

    static async delete(ctx, next) {
        const { params } = ctx,
            { id } = params;
        await PeopleRepository.delete(id);
        const user = await PeopleRepository.get({ id });
        if (user) {
            console.log('Failed to delete user');
        } else {
            ctx.json({}, 200);
            console.log(`Deleted resource with ${id}`);
        }
    }

  static async get(ctx, next) {
    const { params } = ctx,
      { id } = params,
      results = await PeopleRepository.get({ id });
      console.log("Results for get :");
    if (results) {
      console.log(JSON.stringify(results));
      ctx.json(results, 200);
    } else {
      console.log('People not found');
    }
  }

  static async list(ctx, next) {
    const { query } = ctx;
    const results = await PeopleRepository.list(query);
    console.log("Results for list :");
    if (results) {
      console.log(JSON.stringify(results));
      ctx.json(results, 200);
    } else {
      console.log('Users not found');
    }
  }

}
