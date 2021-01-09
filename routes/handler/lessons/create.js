
const {
    Lesson,
    Chapter
} = require('../../../models');

const Validator = require('fastest-validator');
const v = new Validator();
module.exports = async(req, res) => {

    const chapterId = req.body.chapterId;
    const lesson = req.body.lesson;

    const schema = {
        name: 'string|empty:false',
        video: 'string|empty:false'

    }
    const validate = v.validate(req.body, schema);

    if(validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });

    }

    const chapter = await Chapter.findByPk(chapterId);

    if(!chapter) {
        return res.status(404).json({
            status: 'error',
            message: 'chapter not found'
        });
    }

    const createdLesson  = await Lesson.create({
        name: req.body.name,
        video: req.body.video,
        chapterId: req.body.chapterId
 
    });

    
    return res.json({
        status: 'success',
        data: {
            id: createdLesson.id,
            name: createdLesson.name,
            video: createdLesson.video,
            chapterId: createdLesson.chapterId
        }

    });

}