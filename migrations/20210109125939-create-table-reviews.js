'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('reviews', {
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

        rating: {
          type: Sequelize.INTEGER,
          allowNull: false
        },

        note: {
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

      

      await queryInterface.addConstraint('reviews',{
        type: 'foreign key',
        name: 'REVIEWS_COURSEID',
        fields: ['courseId'],
        references: {
          table: 'courses',
          field: 'id'
        }
      });
      
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('reviews');
     
  }
};
