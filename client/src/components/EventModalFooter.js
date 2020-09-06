
import React from 'react';
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';

function DeleteEditButtons(props) {
  const { t } = useTranslation()
  const { onDelete, onEdit } = props
  return (
    <>
      <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={onDelete}>
        {t('general.delete')}
      </button>
      <button type="button" class="btn btn-outline-success" onClick={onEdit}>
        {t('general.edit')}
      </button>
    </>
  )
}

function CancelSaveButtons(props) {
  const { t } = useTranslation()
  const { onCancel, onSave } = props
  return (
    <>
      <button type="button" class="btn btn-outline-secondary" data-dismiss="modal" onClick={onCancel}>
        {t('general.cancel')}
      </button>
      <button type="button" class="btn btn-success" onClick={onSave}>
        {t('general.save')}
      </button>
    </>
  )
}

function EventModalFooter(props) {
  const { readOnly } = props

  return (
    <div class="modal-footer">
      { readOnly ? <DeleteEditButtons {...props}/> : <CancelSaveButtons {...props}/> }
    </div>
  )
}

EventModalFooter.propTypes = {
  edit: PropTypes.bool,
  readOnly: PropTypes.bool,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}

export default EventModalFooter;