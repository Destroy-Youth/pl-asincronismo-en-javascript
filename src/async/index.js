const doSomething = params => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve('i did something')
        }, 3000)
      : reject(new Error('Test error'))
  })
}

const doSome = async () => {
  try {
    const something = await doSomething()
    console.log(something)
  } catch (error) {
    console.error(error)
  }
}

console.log('before')
doSome()
console.log('after')
