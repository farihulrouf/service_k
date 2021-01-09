
module.exports = (Sequelize, DataTypes) => {
    const ImageCourse = Sequelize.define('ImageCourse', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },

        courseId : {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        createdAt: {
            field: 'created_at',  
            type: DataTypes.DATE,
            allowNull: false
        },
  
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false
        }

    },{
        tableName: 'image_courses',
        timestamps: true
    });



    ImageCourse.associate = function(models) {
        ImageCourse.belongsTo(models.Course, {foreignKey: 'courseId'})
    };

    return ImageCourse;
}