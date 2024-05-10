// setTimeout(() => {
//   console.log('1')
//   setTimeout(() => {
//     console.log('2')
//     setTimeout(() => {
//       console.log('3')
//     }, 250)
//   }, 250)
// }, 250)

setTimeOutPromise(250)
  .then(() => {
    console.log('1')
    return setTimeOutPromise(250)
  })
  .then(() => {
    console.log('2')
    return setTimeOutPromise(250)
  })
  .then(() => {
    console.log('3')
  })

function setTimeOutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration)
  })
}

const button = document.querySelector('button')

function addEventListener(element, method) {
  return new Promise((resolve, reject) => {
    element.addEventListener(method, resolve)
  })
}

addEventListener(button, 'click').then((e) => {
  console.log('clicked')
  console.log(e)
})

Promise.all([
  Promise.resolve('1'),
  Promise.reject('Error on 2'),
  Promise.resolve('3'),
])
  .then((message) => {
    console.log(message)
  })
  .catch((error) => {
    console.error(error)
  })
