'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('chapters', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },

        name: {
          type: Sequelize.STRING,
          allowNull: false
        },

        courseId: {
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
      await queryInterface.addConstraint('chapters',{
        type: 'foreign key',
        name: 'CHAPTERSCOURSEID',
        fields: ['courseId'],
        references: {
          table: 'courses',
          field: 'id'
        }
      })
      
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('chapters');
     
  }
};
