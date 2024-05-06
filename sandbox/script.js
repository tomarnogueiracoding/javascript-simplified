function createUser(name, age) {
  return { name: name, age: age }
}

function User(name, age) {
  this.name = name
  this.age = age
  this.isHuman = true
}

const user1 = new User('Miguel', 48)

console.log(user1)
