const rearrageString =  require('./rearrangeString')

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log('PASS')
  } else {
    console.log(`FAIL\nExpected: ${expected}\nActual: ${actual}`)
  }
}

let input = 'Bubble'
let output = 'uleBbb'
assertEqual(rearrageString(input), output)

input = '1155689'
output = '6891155'
assertEqual(rearrageString(input), output)

input = '**$ $-/'
output = ' -/**$$'
assertEqual(rearrageString(input), output)

input = 'aaAbBcDCeeE'
output = 'DbBcCaaAeeE'
assertEqual(rearrageString(input), output)

input = ''
output = ''
assertEqual(rearrageString(input), output)

input = 'Test this string'
output = 'ehrng i isssTttt'
assertEqual(rearrageString(input), output)

debugger
