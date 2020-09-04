import React from 'react'
import styled from 'styled-components'

const InputForm = ({ handleChange, handleSubmit, input }) => (

    <form onSubmit={event => handleSubmit(event)}>
      <InputWrapper>
        <label> Enter String:
          <input name="string" value={input} onChange={handleChange} />
        </label>
        <Button type="submit">Rearrange!</Button>
      </InputWrapper>
    </form>

)

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  margin-top: 10px;
`

export default InputForm
