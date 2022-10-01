const faker = require('faker');

const pool = require('../libs/postgres.pool.js');

class userService {
  constructor() {
    this.users = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
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
    const query = 'SELECT * FROM tasks';
    const rta = await this.pool.query(query);
    return rta.rows
  }
  findOne(id) {
    return this.users.find((item) => item.id === id);
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
