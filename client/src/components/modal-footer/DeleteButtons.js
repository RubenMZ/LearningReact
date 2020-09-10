import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

function DeleteButtons(props) {
  const { t } = useTranslation()
  const { onCancel, onDelete } = props
  return (
    <>
      <p>{t('events.confirmModal.message')}</p>
      <button id="cancel-event-button" className="btn btn-outline-secondary" onClick={onCancel}>
        {t('general.cancel')}
      </button>
      <button id="delete-event-button" className="btn btn-danger" onClick={onDelete}>
        {t('general.delete')}
      </button>
    </>
  )
}

DeleteButtons.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default DeleteButtons
