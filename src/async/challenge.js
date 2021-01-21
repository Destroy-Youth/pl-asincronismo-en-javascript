const fetchData = require('../utils/fetchData')
const { API_CHARACTER } = require('../utils/constants')

const apiCall = async () => {
  try {
    const dataGeneral = await fetchData(API_CHARACTER)
    const character = await fetchData(API_CHARACTER + dataGeneral.results[0].id)
    const origin = await fetchData(character.origin.url)

    console.log(dataGeneral.info.count)
    console.log(character.name)
    console.log(origin.dimension)
  } catch (error) {
    console.error(error)
  }
}

apiCall()
