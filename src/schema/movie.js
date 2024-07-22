import Joi from "joi";

export default Joi.object({
  title: Joi.string().required(),
  year: Joi.number().required(),
  rating: Joi.number().required(),
  description: Joi.string().required(),
  imdbLink: Joi.string().required(),
  poster: Joi.string().required(),
  userId: Joi.string().required(),
});
