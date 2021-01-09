const { Mentor } = require('../../../models');

module.exports = async(req, res) => {

    const mentorIds = req.query.mentor_ids || []; //query params
    const sqlOptions = {
        attributes: ['id', 'name', 'profile', 'email']
    }

    if(mentorIds.length) {
        sqlOptions.where = {
            id: mentorIds
        }
    }

    const mentors = await Mentor.findAll(sqlOptions);
    return res.json({
        status: 'success',
        data: mentors
    });
}