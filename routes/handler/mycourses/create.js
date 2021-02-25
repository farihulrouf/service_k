

const { 
    Course,
    MyCourse
} = require('../../../models');
const Validator = require('fastest-validator');
const axios = require("axios");
const v = new Validator();

module.exports = async (req, res ) => {
    const schema = {

        user_id: { type: "number", positive: true, integer: true },
        courseId: { type: "number", positive: true, integer: true }

    }
    const validate = v.validate(req.body, schema);

    if(validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });

    }

    const courseId = req.body.courseId;
    const course = await Course.findByPk(courseId);

    if(!course) {
        return res.status(404).json({
            status: 'error',
            message: 'course not found'
        });
    }
    
    

     try {
        userID = req.body.user_id;
        const resp = await axios.get(`http://localhost:5100/users/${userID}`);
        const createdMyCourse = await MyCourse.create({
            
            user_id: req.body.user_id,
            courseId: req.body.courseId
     
        });
    
        
        return res.json({
            status: 'success',
            data: {
                createdMyCourse
            }
    
        });
        //return res.json(resp.data);
    } catch (error) {
        if(error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable'});
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
    
    
}