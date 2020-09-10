import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

function EditDeleteButtons(props) {
  const { t } = useTranslation()
  const { onEdit, onDelete } = props

  return (
    <>
      <button id="edit-event-button" className="btn btn-outline-success" onClick={onEdit}>
        {t('general.edit')}
      </button>
      <button id="delete-event-button" className="btn btn-danger" onClick={onDelete}>
        {t('general.delete')}
      </button>
    </>
  )
}

EditDeleteButtons.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default EditDeleteButtons
