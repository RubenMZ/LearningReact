import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ShowButtons from './ShowButtons'
import EditButtons from './EditButtons'

class EventModalFooter extends Component {
  render() {
    const { readOnly } = this.props

    return (
      <div className="modal-footer">
        {readOnly ? <ShowButtons {...this.props}/> : <EditButtons {...this.props}/>}
      </div>
    )
  }
}

EventModalFooter.propTypes = {
  readOnly: PropTypes.bool,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default EventModalFooter
