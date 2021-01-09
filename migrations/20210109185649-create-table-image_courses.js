'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('image_courses', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },


        courseId: {
          type: Sequelize.INTEGER,
          allowNull: false
        },

        image: {
          type: Sequelize.STRING,
          allowNull: false
        },

        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },

        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }

      });
      await queryInterface.addConstraint('image_courses',{
        type: 'foreign key',
        name: 'IMAGECOURSESCOURSEID',
        fields: ['courseId'],
        references: {
          table: 'courses',
          field: 'id'
        }
      })
      
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('image_courses');
     
  }
};
