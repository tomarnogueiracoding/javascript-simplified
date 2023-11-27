let a = 10
let b = 'Hi'
let c = [1, 2] // memory adress 0x01
let d = c // memory adress 0x02
d.push(3)

console.log('a = ' + a)
console.log('b = ' + b)
console.log('c = ' + c)
console.log('d = ' + d)

let e = [1, 2] // memory adress 0x03
let f = [1, 2] // memory adress 0x04

console.log(e === f) // returns false cause the value refers to the adress in memory

const g = [1, 2] // memory adress 0x05
const elementToAdd = 3 // 3

add(g, elementToAdd) // 0x05, 3

console.log(g)
console.log(elementToAdd)

function add(array, element) {
  element = element + 1 // 4
  array.push(element) // memory adress 0x05
}

