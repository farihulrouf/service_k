//const bcrypt = require('bcrypt');
const { Mentor } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res ) => {
    const schema = {
        name: 'string|empty:false',
        email: 'email|empty:false',
        profession: 'string|optional'

    }
    const validate = v.validate(req.body, schema);

    if(validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });

    }

    
    const data = {
       
        name: req.body.name,
        profile: req.body.profile,
        email: req.body.email,
        profession: req.body.profession,
        
    }

    const createdMentor =  await Mentor.create(data);

    return res.json({
        status: 'succes',
        data: {
            id: createdMentor.id, 
            name: createdMentor.name,
            profession: createdMentor.profession
        } 
    });
    
}