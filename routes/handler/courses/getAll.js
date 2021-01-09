const { Course } = require('../../../models');

module.exports = async(req, res) => {

    const courses = await Course.findAll({
        attributes: ['id', 'name', 'type', 'thumbnail', 'price', 'level']
    });

    return res.json({
        status: 'success',
        data: courses
    });

    
}