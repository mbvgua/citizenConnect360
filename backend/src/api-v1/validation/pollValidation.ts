import Joi from 'joi'

export const pollSchema = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    userId:Joi.string().required(),
    choices:Joi.array().items(Joi.string().regex(/^[^,]+$/).min(2).required()).required()
    
    // choices:Joi.array().required().messages({
    //     'any.required':'we wacha bro'
    // })
})
