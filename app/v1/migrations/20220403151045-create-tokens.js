'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface
      .createTable('tokens', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT
        },
        collectionId: {
          type: Sequelize.BIGINT,
          references: { model: 'collections', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull: false
        },
        token_id: {
          type: Sequelize.BIGINT,
          allowNull: false
        },
        token_name: {
          type: Sequelize.STRING,
          allowNull: true
        },
        token_url: {
          type: Sequelize.STRING,
          allowNull: true
        },
        token_description: {
          type: Sequelize.TEXT,
          allowNull: true
        },
        string_traits: {
          type: Sequelize.JSON,
          allowNull: true
        },
        numeric_traits: {
          type: Sequelize.JSON,
          allowNull: true
        },
        basic_rank: {
          type: Sequelize.BIGINT,
          allowNull: true
        },
        normal_rank: {
          type: Sequelize.BIGINT,
          allowNull: true
        },
        weight_rank: {
          type: Sequelize.BIGINT,
          allowNull: true
        },
        basic_score: {
          type: Sequelize.STRING,
          allowNull: true
        },
        normal_score: {
          type: Sequelize.STRING,
          allowNull: true
        },
        weight_score: {
          type: Sequelize.STRING,
          allowNull: true
        },
        token_image: {
          type: Sequelize.STRING,
          allowNull: true
        },
        createdAt: {
          allowNull: true,
          type: 'TIMESTAMP',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          allowNull: true,
          type: 'TIMESTAMP',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      })
      .then(() =>
        queryInterface.addIndex('tokens', ['collectionId', 'token_id'], {
          unique: true
        })
      )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tokens')
  }
}
