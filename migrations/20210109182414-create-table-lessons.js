'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('lessons', {
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

        video: {
          type: Sequelize.STRING,
          allowNull: false
        },

        chapterId: {
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
      await queryInterface.addConstraint('lessons',{
        type: 'foreign key',
        name: 'LESSONSCHAPTERID',
        fields: ['chapterId'],
        references: {
          table: 'chapters',
          field: 'id'
        }
      })
      
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('lessons');
     
  }
};
