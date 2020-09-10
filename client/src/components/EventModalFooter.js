
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';

function DeleteButtons(props) {
  const { t } = useTranslation()
  const { onCancel, onDelete } = props
  return (
    <>
      <p>{t('events.confirmModal.message')}</p>
      <button id="cancel-event-button" class="btn btn-outline-secondary" onClick={onCancel}>
        {t('general.cancel')}
      </button>
      <button id="delete-event-button" class="btn btn-danger" onClick={onDelete}>
        {t('general.delete')}
      </button>
    </>
  )
}

function EditDeleteButtons(props) {
  const { t } = useTranslation()
  const { onEdit, onDelete } = props

  return (
    <>
      <button id="edit-event-button" class="btn btn-outline-success" onClick={onEdit}>
        {t('general.edit')}
      </button>
      <button id="delete-event-button" class="btn btn-danger" onClick={onDelete}>
        {t('general.delete')}
      </button>
    </>
  )
}

function EditButtons(props) {
  const { t } = useTranslation()
  const { onCancel, onSave } = props
  return (
    <>
      <button id="cancel-event-button" class="btn btn-outline-secondary" onClick={onCancel}>
        {t('general.cancel')}
      </button>
      <button id="save-event-button" class="btn btn-success" onClick={onSave}>
        {t('general.save')}
      </button>
    </>
  )
}

class ShowButtons extends Component {
  constructor(props) {
    super(props)

    this.state = {showDeleteButtons: false}

    this.toggleDeleteButtons = this.toggleDeleteButtons.bind(this)
  }

  toggleDeleteButtons() {
    this.setState({showDeleteButtons: !this.state.showDeleteButtons})
  }

  render() {
    const {showDeleteButtons} = this.state

    if (showDeleteButtons) {
      return <DeleteButtons {...this.props}/>
    } else {
      return <EditDeleteButtons {...this.props} onDelete={this.toggleDeleteButtons}/>
    }
  }
}

class EventModalFooter extends Component {
  render() {
    const { readOnly } = this.props

    return (
      <div class="modal-footer">
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
  onEdit: PropTypes.func.isRequired
}

export default EventModalFooter;