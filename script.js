function createUser(name, age) {
  return {name: name, age: age}
}

function User(name, age) {
  this.name = name
  this.age = age
  this.human = true
}

class NewUser {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.human = true
  }
}

const user = new User('Miguel', 47)
const newUser = new NewUser('Joana', 44)
console.log(user)
console.log(newUser)

