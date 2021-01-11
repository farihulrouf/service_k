'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('my_courses', {
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

        user_id: {
          type: Sequelize.INTEGER,
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

     

      await queryInterface.addConstraint('my_courses',{
        type: 'foreign key',
        name: 'MYCOURSESCOURSEID',
        fields: ['courseId'],
        references: {
          table: 'courses',
          field: 'id'
        }
      });
      
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('my_courses');
     
  }
};
