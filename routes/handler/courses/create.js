
const {
    Mentor,
    Course
} = require('../../../models');

const Validator = require('fastest-validator');
const v = new Validator();
module.exports = async(req, res) => {

    const mentorId = req.body.mentorId;
    const course = req.body.course;

    const schema = {
        name: 'string|empty:false',
        status: 'string|empty:false',
        level: 'string|empty:false'

    }
    const validate = v.validate(req.body, schema);

    if(validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });

    }

    const mentor = await Mentor.findByPk(mentorId);

    if(!mentor) {
        return res.status(404).json({
            status: 'error',
            message: 'mentor not found'
        });
    }

    const createdCourse = await Course.create({
        name: req.body.name,
        certificate: req.body.certificate,
        thumbnail: req.body.thumbnail,
        type: req.body.type,
        status: req.body.status,
        price: req.body.price,
        level: req.body.level,
        description: req.body.description,  
        mentorId: req.body.mentorId,
 
    });

    
    return res.json({
        status: 'success',
        data: {
            id: createdCourse.id,
            name: createdCourse.name
        }

    });

}