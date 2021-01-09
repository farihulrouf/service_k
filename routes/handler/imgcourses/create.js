
const {
    ImageCourse,
    Course
} = require('../../../models');

const Validator = require('fastest-validator');
const v = new Validator();
module.exports = async(req, res) => {

    const courseId = req.body.courseId;
    const imageCourse = req.body.imageCourse;

    const schema = {
        image: 'string|empty:false',
        courseId: { type: "number", positive: true, integer: true }
    }
    const validate = v.validate(req.body, schema);

    if(validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });

    }

    const course = await Course.findByPk(courseId);

    if(!course) {
        return res.status(404).json({
            status: 'error',
            message: 'course not found'
        });
    }

    const createdImageCourse  = await ImageCourse.create({
        image: req.body.image,
        courseId: req.body.courseId
 
    });

    
    return res.json({
        status: 'success',
        data: {
            createdImageCourse
        }

    });

}