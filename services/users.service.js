const faker = require('faker');

const sequelize = require('../libs/sequelize');

class userService {
  constructor() {
    this.users = [];
    this.generate();
  }
  generate() {
    for (let index = 0; index < 10; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        lastname: faker.name.lastName(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
      });
    }
  }
  create(data) {
    this.users.push({
      id: faker.datatype.uuid(),
      ...data,
    });
  }
  async find() {
    const query = 'SELECT * FROM tasks;';
    const [data] = await sequelize.query(query);
    return data;
  }
  async findOne(id) {
    const query = `SELECT * FROM tasks where id = ${id}`;
    const [data, metadata] = await this.pool.query(query);
    return { data, metadata };
  }
  update(id, changes) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('User not found');
    } else {
      this.users[index] = changes;
      return this.users[index];
    }
  }
  delete(id) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('user not found');
    } else {
      this.users.splice(index, 1);
    }
    return { id: index, message: 'deleted' };
  }
}
module.exports = userService;
