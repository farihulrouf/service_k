const { 
    Chapter,
    Course
 } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
    const schema = {
        name: 'string|empty:false',
        courseId: { type: "number", positive: true, integer: true }
    }

    const validate = v.validate(req.body, schema);

    if(validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        })
    }
    const courseId = req.body.courseId;
    const course = await Course.findByPk(courseId);
    if(!course){
        return res.status(404).json({
            status: 'error',
            message: 'course not found'
        })
    }

    const data = {
        name: req.body.name,
        courseId: req.body.courseId
    }

    const createdChapter = await Chapter.create(data);

    return res.json({
        status: 'success',
        data: {
            id: createdChapter.id,
            name: createdChapter.name
        }
    })
}