const faker = require('faker');
class productsService {
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
  find() {
    return this.users;
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
module.exports = productsService;
