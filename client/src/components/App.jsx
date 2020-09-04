import React from 'react'
import styled from 'styled-components'
import InputForm from './InputForm.jsx'
import Output from './Output.jsx'
import rearrangeString from './helpers/rearrangeString'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      input: '',
      output: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Form handlers
  handleChange(event) {
    this.setState({ input: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ output: rearrangeString(this.state.input) })
  }

  render() {
    return (
      <AppWrapper>
        <Header>STRINGARRANGE</Header>
        <Description>Rearrange any string by character count and initial index.</Description>
        <Example>For instance: "Bubble" becomes "uleBbb"</Example>
        <InputForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} input={this.state.input} />
        <Output output={this.state.output} />
      </AppWrapper>
    )
  }

}

const AppWrapper = styled.div`
  font-family: 'Amazon Ember', Arial, sans-serif;
  font-size: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
`

const Header = styled.h1`
  font-size: 60px;
  font-style: bold;
  align-items: flex-start;
`
const Description = styled.h2`
  font-size: 25px;
  text-align: center;
  margin-left: 40px;
  margin-right: 40px;
`
const Example = styled.h3`
  font-size: 20px;
  font-style: italic;
`
