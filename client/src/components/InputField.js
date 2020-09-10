import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

function getFirstError(errors) {
  if (!errors) { return '' }

  const error = errors[0]
  return error.error
}

function InputField({ label, errors, children }) {
  const { t } = useTranslation()
  const error = getFirstError(errors)
  return (
    <div className="form-group">
      <label htmlFor="input-field">{label}</label>
      <div className="input-field">{children}</div>
      <small className="form-text text-danger">{error ? t(`errors.${error}`) : ''}</small>
    </div>
  )
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  errors: PropTypes.array,
  children: PropTypes.element,
}

export default InputField
