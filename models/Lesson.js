
module.exports = (Sequelize, DataTypes) => {
    const Lesson = Sequelize.define('Lesson', {
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

        video: {
            type: DataTypes.STRING,
            allowNull: false
        },

        chapterId : {
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
        tableName: 'lessons',
        timestamps: true
    });

    Lesson.associate = function(models) {
        Lesson.belongsTo(models.Chapter, {foreignKey: 'chapterId'})
    };


    return Lesson;
}