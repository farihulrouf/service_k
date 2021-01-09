'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('courses', {
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

        certificate: {
          type: Sequelize.BOOLEAN
        },

        thumbnail: {
          type: Sequelize.STRING,
          allowNull: true
        },

        type: {
          type: Sequelize.ENUM,
          values: ['free', 'premium'],
          allowNull: false
        },

        status: {
          type: Sequelize.ENUM,
          values: ['draft', 'published']
        },  

        price: {
          type: Sequelize.INTEGER,
          allowNull: false
        },

        level: {
          type: Sequelize.ENUM,
          values: ['all-level', 'beginner','intermediate', 'adv']
        },

        description: {
          type: Sequelize.TEXT,
          allowNull: true
        },

        mentorId: {
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
      
      await queryInterface.addConstraint('courses',{
        type: 'foreign key',
        name: 'COURSESMENTORID',
        fields: ['mentorId'],
        references: {
          table: 'mentors',
          field: 'id'
        }
      })
     
  },
  
  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('courses');
     
  }
};
