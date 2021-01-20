const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!')
    } else {
      reject('Whooops!')
    }
  })
}

somethingWillHappen()
  .then(response => console.log(response))
  .catch(error => console.log(error))

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True')
      }, 3000)
    } else {
      const error = new Error("Somthing didn't happen")
      reject(error)
    }
  })
}

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(error => console.log(error))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
    console.log('Result array ', response)
  })
  .catch(error => {
    console.log(error)
  })
