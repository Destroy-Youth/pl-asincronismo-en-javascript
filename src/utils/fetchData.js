let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const fetchData = apiUrl => {
  const xhttp = new XMLHttpRequest()
  return new Promise((resolve, reject) => {
    xhttp.open('GET', apiUrl, true)
    xhttp.onreadystatechange = event => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error(`Error ${apiUrl}`))
      }
    }
    xhttp.send()
  })
}

module.exports = fetchData
