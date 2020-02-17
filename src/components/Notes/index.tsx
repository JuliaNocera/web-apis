import React from 'react'
import ReactMarkdown from 'react-markdown'

class Notes extends React.Component {
  async componentDidMount() {
    const path = require('./notesMarkdown.md')
    const response = await fetch(path)
    const notes = await response.text()

    this.setState({notes}) 
  }

  state = {
    notes: ""
  }

  render() {
    return <ReactMarkdown source={this.state.notes} />
  }
}

export default Notes



