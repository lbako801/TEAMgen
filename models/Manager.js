const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, email, id, department, officeNumber) {
      super(name, email, id);
      this.officeNumber = officeNumber;
      this.department = department;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;