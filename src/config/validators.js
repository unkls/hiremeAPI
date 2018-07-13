const Joi = require('joi');

module.exports = {
    candidates: {
        query: {
            lastname: Joi.string().required(),
            firstname: Joi.string().required(),
            mail: Joi.string().email().required(),
            phone: Joi.string().regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/),
            password: Joi.string().min(8).required(),
            description: Joi.string()
        }
    },
    recruiters: {
        query: {
            lastname: Joi.string().required(),
            firstname: Joi.string().required(),
            mail: Joi.string().email().required(),
            phone: Joi.string().regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/),
            password: Joi.string().min(8).required(),
            company: Joi.string().required(),
            description: Joi.string()
        }
    },
    jobs: {
        query: {
            jobName: Joi.string().required(),
            jobDescription: Joi.string().required()
        }
    },
    jobSkills: {
        query: {
            jobId: Joi.number().integer().required(),
            skillId: Joi.number().integer().required(),
            levelId: Joi.number().integer().required()
        }
    },
    skill: {
        query: {
            skillName: Joi.string().required()
        }
    }
};
