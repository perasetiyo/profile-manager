import fs from 'fs-promise';
import path from 'path';
import { ERROR_CODES, HttpError } from 'people-manager/app';

/**
 * Validate based on request type
 * validation configuration is located at src/Http/Validators
 * @param type - request type
 */
export default (type, action) => {
    return async (ctx, next) => {
        const filepath = path.resolve(`../src/Http/Validators/${type}Validator.js`)
        let truthy = false;
        try {
            await fs.access(filepath);
            truthy = true;
        } catch (e) {}
        if (truthy) {
            console.log(`validate ${type}:${action}`);
            const Validator = require(filepath).default;
            const validator = new Validator(type, action, ctx);
            await validator.validate();
        }
        await next();
    };
}
