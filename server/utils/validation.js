import joi from "joi";

export const registerValidator = joi.object({
  fullName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(5).required(),
  confirmPassword: joi.string().required(),
});

export const loginValidator = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(5).required(),
});
