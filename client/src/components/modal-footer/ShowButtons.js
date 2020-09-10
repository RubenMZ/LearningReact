import React, { Component } from 'react'

import DeleteButtons from './DeleteButtons'
import EditDeleteButtons from './EditDeleteButtons'

class ShowButtons extends Component {
  constructor(props) {
    super(props)

    this.state = { showDeleteButtons: false }

    this.toggleDeleteButtons = this.toggleDeleteButtons.bind(this)
  }

  toggleDeleteButtons() {
    this.setState({ showDeleteButtons: !this.state.showDeleteButtons })
  }

  render() {
    const { showDeleteButtons } = this.state

    if (showDeleteButtons) {
      return <DeleteButtons {...this.props}/>
    }
    return <EditDeleteButtons {...this.props} onDelete={this.toggleDeleteButtons}/>
  }
}

export default ShowButtons
