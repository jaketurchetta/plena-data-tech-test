const rearrageString = (str) => {

  let arr = str.split('')
  let result = ''
  let dataStore = {}

  // Store character counts
  for (let i = 0; i < arr.length; i++) {
    dataStore[arr[i].toUpperCase()] = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i].toUpperCase() === arr[j].toUpperCase()) {
        dataStore[arr[i].toUpperCase()]++
      }
    }
  }

  // Make data sortable
  let sortable = []
  for (let i = 0; i < arr.length; i++) {
    sortable[i] = [arr[i], dataStore[arr[i].toUpperCase()]]
  }

  // Sort
  sortable.sort((a, b) => a[1] - b[1])

  // Concatenate result
  for (let i = 0; i < sortable.length; i++) {
    result += sortable[i][0]
  }

  return result

}

module.exports = rearrageString
