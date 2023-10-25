function printVariable(variable) {
  console.log(variable);
}

function printName(name, callback) {
  callback('Hello ' + name)
}

printName('Miguel', printVariable)