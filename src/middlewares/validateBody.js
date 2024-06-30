import createHttpError from 'http-errors';

export const validateBody = (schema) => {
  return async (res, req, next) => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (err) {
      const error = createHttpError(404, 'Bad Request', {
        errors: err.details,
      });
      next(error);
    }
  };
};
