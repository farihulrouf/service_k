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
        attributes: ['id', 'name', 'type', 'thumbnail', 'price', 'level'],


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

    /* const amount = await Project.count({
        where: {
          id: {
            [Op.gt]: 25
          }
        }
      }); */

    const totalStudent = await MyCourse.count({
        where: {
            courseId: id
        }
    });

    if(!course) {
        return res.status(404).json({
            status: 'error',
            message: 'course not found'
        });
    }

    return res.json({
        status: 'success',
        data: course, 
              totalStudent
    });

}