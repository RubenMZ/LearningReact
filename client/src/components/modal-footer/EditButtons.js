import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

function EditButtons(props) {
  const { t } = useTranslation()
  const { onCancel, onSave } = props
  return (
    <>
      <button id="cancel-event-button" className="btn btn-outline-secondary" onClick={onCancel}>
        {t('general.cancel')}
      </button>
      <button id="save-event-button" className="btn btn-success" onClick={onSave}>
        {t('general.save')}
      </button>
    </>
  )
}

EditButtons.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
}

export default EditButtons
