let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API_CHARACTER = 'https://rickandmortyapi.com/api/character/'

function fetchData(apiUrl, callback) {
  let xhttp = new XMLHttpRequest()
  xhttp.open('GET', apiUrl, true)
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        const error = new Error(`Error ${apiUrl}`)
      }
    }
  }

  xhttp.send()
}

fetchData(API_CHARACTER, (error, data) => {
  if (error) return console.log(error)
  fetchData(API_CHARACTER + data.results[0].id, (error2, data2) => {
    if (error2) return console.log(error2)
    fetchData(data2.origin.url, (error3, data3) => {
      if (error3) return console.log(error3)
      console.log(data.info.count)
      console.log(data2.name)
      console.log(data3.dimension)
    })
  })
})
