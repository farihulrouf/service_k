const { Chapter } = require('../../../models');

module.exports = async(req, res) => {

    

    const chapters = await Chapter.findAll();
    return res.json({
        status: 'success',
        data: chapters 
    });
}