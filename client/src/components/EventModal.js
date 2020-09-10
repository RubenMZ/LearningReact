import React, { Component, Suspense } from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'

import DatePicker from 'react-datepicker'
import EventModalFooter from './modal-footer/EventModalFooter'
import InputField from './InputField'

import EventsService from '../services/api/events'

const defaultEvent = {
  title: '',
  start_date: null,
  end_date: null,
  description: '',
}

class EventModal extends Component {
  constructor(props) {
    super(props)
    const {
      data, readOnly, onSuccess, onCancel,
    } = props

    this.state = {
      data: data || defaultEvent,
      errors: {},
      editMode: !!data,
      readOnly: readOnly || false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.editEvent = this.editEvent.bind(this)
    this.deleteEvent = this.deleteEvent.bind(this)
    this.onSuccess = onSuccess
    this.onCancel = onCancel
  }

  handleChange(event) {
    const { name, value } = event.target
    this.changeField(name, value)
  }

  handleChangeDate(name, value) {
    this.changeField(name, value)
  }

  changeField(name, value) {
    const { data } = this.state
    this.setState({ data: { ...data, [name]: value } })
  }

  async submit() {
    const { data } = this.state
    if (data.id) {
      return EventsService.update(data.id, data)
    }
    return EventsService.create(data)
  }

  async handleSubmit() {
    const response = await this.submit()
    if (response.data) {
      this.onSuccess()
    } else {
      this.setErrors(response.errors)
    }
  }

  async deleteEvent() {
    const { data } = this.state
    await EventsService.destroy(data.id)
    this.onSuccess()
  }

  editEvent() {
    this.setState({ readOnly: false })
  }

  setErrors(errors) {
    this.setState({ errors })
  }

  render() {
    const { t } = this.props
    const {
      data, readOnly, editMode, errors,
    } = this.state

    return (
      <div id="event-modal" className="modal" style={{ display: 'block' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                { editMode ? t('events.modal.edit') : t('events.modal.new')}
              </h5>
              <button className="close" data-dismiss="modal" aria-label="Close" onClick={this.onCancel}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <form onSubmit={this.handleSubmit}>
              <InputField label={t('events.form.title')} errors={errors.title}>
                <input
                  name="title"
                  type="text"
                  value={data.title}
                  onChange={this.handleChange}
                  disabled={readOnly}
                />
              </InputField>

              <InputField label={t('events.form.startDate')} errors={errors.start_date}>
                <DatePicker
                  name="startDate"
                  selected={data.start_date}
                  onChange={date => this.handleChangeDate('start_date', date)}
                  selectsStart
                  startDate={data.start_date}
                  endDate={data.end_date}
                  disabled={readOnly}
                />
              </InputField>

              <InputField label={t('events.form.endDate')} errors={errors.end_date}>
                <DatePicker
                  name="endDate"
                  selected={data.end_date}
                  onChange={date => this.handleChangeDate('end_date', date)}
                  selectsEnd
                  startDate={data.start_date}
                  endDate={data.end_date}
                  minDate={data.start_date}
                  disabled={readOnly}
                />
              </InputField>

              <InputField label={t('events.form.description')} errors={errors.description}>
                <textarea
                  name="description"
                  value={data.description}
                  onChange={this.handleChange}
                  disabled={readOnly}
                />
              </InputField>
            </form>
            </div>
            <EventModalFooter
              readOnly={readOnly}
              onEdit={this.editEvent}
              onDelete={this.deleteEvent}
              onCancel={this.onCancel}
              onSave={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    )
  }
}

EventModal.propTypes = {
  t: PropTypes.func,
  data: PropTypes.object,
  readOnly: PropTypes.bool,
  onSuccess: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

const MyComponent = withTranslation()(EventModal)

export default function App(props) {
  return (
    <Suspense fallback="loading">
      <MyComponent {...props}/>
    </Suspense>
  )
}
