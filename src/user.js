class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayWelcome() {
    return `Welcome, ${this.firstName} ${this.lastName})`
  }
}

export { User }