'use strict';

const { ORDER_TABLE } = require('./../models/order.model');
const { CUSTOMER_TABLE } = require('./../models/customer.model');
module.exports = {
  up: async (queryInterface, sequelize ) => {
    await queryInterface.createTable(ORDER_TABLE, 
      
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: sequelize.DataTypes.INTEGER,
        },
        customerId: {
          allowNull: false,
          field: 'cusotmer_id',
          type: sequelize.DataTypes.INTEGER,
          refernces: {
            model: CUSTOMER_TABLE,
            key: 'id',
          },
        },
      
        createdAt: {
          allowNull: false,
          type: sequelize.DataTypes.DATE,
          field: 'created_at',
          defaultValue: sequelize.NOW,
        }
      }
      );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ORDER_TABLE);
  },
};
