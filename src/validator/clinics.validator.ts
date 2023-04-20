import { query } from 'express-validator';

// Define the validation rules for each query parameter
export const searchValidator = [
    query('name').optional().isString().trim().escape(),
    query('state').optional().isString().trim().escape(),
    query('from').optional().isString().trim().escape(),
    query('to').optional().isString().trim().escape(),
];

