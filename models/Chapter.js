
module.exports = (Sequelize, DataTypes) => {
    const Chapter = Sequelize.define('Chapter', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
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
        tableName: 'chapters',
        timestamps: true
    });
    Chapter.associate = function(models) {
        Chapter.belongsTo(models.Course, {foreignKey: 'courseId'});
        Chapter.hasMany(models.Lesson, {as: 'lessons'});
     
    };

    return Chapter;
}