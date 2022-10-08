const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class productService {
  constructor() {
  }
  async create(data) {
    const rta = await models.Product.create(data);
  }
  async find() {
    const rta = await models.Product.findAll();
    return rta;
  }
  async findOne(id) {
    const rta = await models.Product.findByPk(id); 
    if(!rta){
      throw boom.notFound('User not Found');
    }
    return rta;
  }
  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await Product.update(changes);
    return rta;
  }
  async delete(id) {
    const user = await this.findOne(id);
    const rta = await Product.destroy();
    return{id}
  }
}
module.exports = productService;
