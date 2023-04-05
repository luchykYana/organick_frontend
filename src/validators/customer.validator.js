import Joi from 'joi';

export const CustomerValidator = Joi.object({
    full_name: Joi
        .string()
        .min(5)
        .max(50)
        .trim()
        .pattern(/^[A-Z][a-z]+(?:\s[A-Z][a-z]+){1,2}$/)
        .required()
        .messages({
            'string.empty': 'The field is required',
            'string.min': 'The minimum number of characters is 5',
            'string.max': 'The maximum number of characters is 50',
            'string.pattern.base': 'Only Latin letters, the first letter is capital.'
        }),
    email: Joi
        .string()
        .pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/)
        .trim()
        .required()
        .messages({
            'string.empty': 'The field is required',
            'string.pattern.base': 'example@yourmail.com'
        }),
    address: Joi
        .string()
        .min(5)
        .max(50)
        .trim()
        .required()
        .messages({
            'string.empty': 'The field is required',
            'string.min': 'The minimum number of characters is 5',
            'string.max': 'The maximum number of characters is 50'
        }),
    phone_number: Joi
        .string()
        .min(9)
        .max(20)
        .trim()
        .required()
        .messages({
            'string.empty': 'The field is required',
            'string.min': 'The minimum number of characters is 9',
            'string.max': 'The maximum number of characters is 20'
        }),
    message: Joi
        .string()
        .min(0)
        .max(500)
        .trim()
        .messages({
            'string.max': 'The maximum number of characters is 500'
        })
});

export const emailValidator = Joi.object({
    email: Joi
        .string()
        .pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/)
        .trim()
        .required()
        .messages({
            'string.empty': 'The field is required',
            'string.pattern.base': 'example@yourmail.com'
        }),
})