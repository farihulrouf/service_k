module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course',{
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
      },

      name: {
          type: DataTypes.STRING,
          allownull: false
      },

      certificate: {
          type: DataTypes.BOOLEAN
      },

      thumbnail: {
          type: DataTypes.STRING,
          allownull: true
      },

      type: {
          type: DataTypes.ENUM,
          values: ['free', 'premium'],
          allownull: false
      },

      status: {
        type: DataTypes.ENUM,
        values: ['draft', 'published']
      },

      price: {
        type: DataTypes.INTEGER,
        allownull: false
      },

      level: {
        type: DataTypes.ENUM,
        values: ['all-level', 'beginner', 'intermadiate', 'adv']
      },

      description: {
        type: DataTypes.TEXT,
        allownull: true
      },

      mentorId: {
        type: DataTypes.INTEGER,
        allownull: false
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
      tableName: 'courses',
      timestamps: true
    });

    

    Course.associate = function(models) {
      Course.hasMany(models.Review, {as: 'reviews'});
      Course.hasMany(models.Chapter, {as: 'chapters'});
      Course.hasOne(models.ImageCourse);
      //Person.hasOne(Person, {as: 'Father'})
    }

   // Course.associate = function(models) {
    //  Course.hasMany(models.Chapter, {as: 'chapters'})
    //}
    
    

    return Course;
}