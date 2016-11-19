/** The base extensible error class */
class BaseError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

/** Wraps KirimoApi errors */
class AppError extends BaseError {
    constructor(message, statusCode, internal, { code = '500000', errors } = {}) {
        super(`${message}`);
        if (statusCode instanceof Object) {
            this.code = statusCode.code;
            this.internal = statusCode.internal;
        } else {
            this.code = statusCode;
            this.internal = internal || code;
        }
        this.errors = errors;
        this.name = this.constructor.name;
    }
}

class HttpError extends AppError {
    constructor(message, statusCode, internal, { code = '500001', errors } = {}) {
        super(message, statusCode, internal, { code, errors });
        this.name = this.constructor.name;
    }
}

const ERROR_CODES = {
    VALIDATOR: {
        Common: { code: 400, internal: 400001 },
        Invalid: { code: 422, internal: 422001 }
    },
    COMMON: {
        Unauthorized: { code: 401, internal: 401000 },
        NotFound: { code: 404, internal: 404100 },
        Create: { code: 422, internal: 422100 },
        Update: { code: 422, internal: 422101 },
        Delete: { code: 422, internal: 422102 },
        Duplicate: { code: 422, internal: 422103 }
    },
    USER: {
        CreatePassword: { code: 422, internal: 422200 }
    },
    ADDRESS: {}
};

export { AppError, HttpError, ERROR_CODES };
