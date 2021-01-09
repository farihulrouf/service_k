module.exports = (sequelize, DataTypes) => {
    const Mentor = sequelize.define('Mentor',{
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
  
          profile: {
            type: DataTypes.STRING,
            allowNull: true
          },
  
  
          email: {
            type: DataTypes.STRING,
            allowNull: false
          },
  
          profession: {
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
      tableName: 'mentors',
      timestamps: true
    });

    return Mentor;
}