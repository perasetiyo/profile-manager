import { ERROR_CODES, HttpError } from 'people-manager/app';

export default class BaseValidator {
    constructor(type, action, ctx) {
        this.type = type;
        this.action = action;
        this.ctx = ctx;
    }

    async validate() {
        try {
            if (typeof this[this.action] === 'function') {
                await this[this.action]();
            }
        } catch (error) {
            console.log(error.stack);
            throw new HttpError('Validation Failed', ERROR_CODES.VALIDATOR.Common);
        }
        const { errors } = this.ctx;
        if (errors) {
            console.log(errors);
            throw new HttpError(
                'Invalid Parameters',
                ERROR_CODES.VALIDATOR.Invalid.code,
                ERROR_CODES.VALIDATOR.Invalid.internal,
                { errors }
            );
        } else {
            console.log(`validation ${this.action} passed`);
        }
    }
}
