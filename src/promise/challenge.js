const fetchData = require('../utils/fetchData')
const API_CHARACTER = 'https://rickandmortyapi.com/api/character/'

fetchData(API_CHARACTER)
  .then(data => {
    console.log(data.info.count)
    return fetchData(`${API_CHARACTER}${data.results[0].id}`)
  })
  .then(data => {
    console.log(data.name)
    return fetchData(data.origin.url)
  })
  .then(data => {
    console.log(data.dimension)
  })
  .catch(error => {
    console.log(error)
  })
