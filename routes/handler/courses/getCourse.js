const { 
    Course,
    Chapter,
    Review,
    Lesson,
    ImageCourse,
    MyCourse
} = require('../../../models');

module.exports = async (req, res) => {
    const id = req.params.id;

    const course = await Course.findByPk(id, {
        attributes: ['id', 'name', 'type', 'thumbnail', 'price', 'description',
        'certificate', 'level'],


        include: [
         {
            model: Review, as: 'reviews',
            attributes: ['user_id', 'rating', 'note']
         }, 
         {
            model: Chapter, as: 'chapters',
            attributes: ['id','name','courseId'],
            include: {
                model: Lesson, as: 'lessons',
                attributes: ['id', 'name', 'video']
            }

         },

         {
             model: ImageCourse,
             attributes: ['id', 'image']
         }
        ]

        
    });

    const totalStudent = await MyCourse.count({
        where: {
            courseId: id
        }
    });

    //course['totalStudent'] = totalStudent;
    //course.push(totalStudent); //ruits.push("Kiwi");

    if(!course) {
        return res.status(404).json({
            status: 'error',
            message: 'course not found'
        });
    }

    //console.log("hello");

    return res.json({
        status: 'success',
        data: course
    });

}