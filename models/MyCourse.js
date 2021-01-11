module.exports = (sequelize, DataTypes) => {
    const MyCourse = sequelize.define('MyCourse',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },

          courseId : {
            type: DataTypes.INTEGER,
            allowNull: false
          },

          user_id : {
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
      tableName: 'my_courses',
      timestamps: true
    });

    MyCourse.associate = function(models) {
      MyCourse.belongsTo(models.Course, {foreignKey: 'courseId'})
    };

    return MyCourse;
}