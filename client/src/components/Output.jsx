import React from 'react'

const Output = ({ output }) => {

  if (!output.length) {
    return (
      <p>Waiting for an input string to rearrange!</p>
    )
  } else {
    return (
      <p>{output}</p>
    )
  }

}

export default Output
