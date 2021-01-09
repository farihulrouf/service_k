module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review',{
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
  
          rating : {
            type: DataTypes.INTEGER,
            allowNull: false
          },

          note: {
            type: DataTypes.STRING,
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
      tableName: 'reviews',
      timestamps: true
    });
    
    Review.associate = function(models) {
        Review.belongsTo(models.Course, {foreignKey: 'courseId'})
    };

    
   

    return Review
}