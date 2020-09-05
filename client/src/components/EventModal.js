import React, { Component, Suspense } from 'react';
import { withTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';

import EventsService from '../services/api/events.js'


async function createEvent(attributes) {
  const {data, errors} = await EventsService.create(attributes)
  return {data, errors}
}

async function updateEvent(id, attributes) {
  const {data, errors} = await EventsService.update(id, attributes)
  return {data, errors}
}

class EventModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: props.data || {},
      errors: {},
      edit: !!props.data,
      readOnly: props.readOnly || false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target
    this.changeField(name, value)
  }

  handleChangeDate(name, value) {
    this.changeField(name, value)
  }

  changeField(name, value) {
    const {data} = this.state
    this.setState({data: {...data, [name]: value}})
  }

  handleSubmit() {
    const {data} = this.state

    if (data.id) {
      updateEvent(data.id, data).then(() => this.props.onSuccess)
                                .catch(errors => this.setErrors(errors))
    } else {
      createEvent(data).then(() => this.props.onSuccess)
                       .catch(errors => this.setErrors(errors))
    }
  }

  setErrors(errors) {
    this.setState({errors})
  }

  render() {
    const { t } = this.props
    const { data, readOnly, edit } = this.state

    return (
      <div class="modal" style={{display: 'block'}}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                { edit ? t('events.modal.edit') : t('events.modal.new')}
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={this.props.close}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form onSubmit={this.handleSubmit}>
              <p>{t('events.form.title')}</p>
              <input name="title" type="text" value={data.title} onChange={this.handleChange} readOnly={readOnly}/>
              <p>{t('events.form.startDate')}</p>
              <DatePicker
                selected={data.start_date}
                onChange={date => this.handleChangeDate('start_date', date)}
                selectsStart
                startDate={data.start_date}
                endDate={data.end_date}
                readOnly={readOnly}
              />
              <p>{t('events.form.endDate')}</p>
              <DatePicker
                selected={data.end_date}
                onChange={date => this.handleChangeDate('end_date', date)}
                selectsEnd
                startDate={data.start_date}
                endDate={data.end_date}
                minDate={data.start_date}
                readOnly={readOnly}
              />
              <p>{t('events.form.description')}</p>
              <textarea name="description" value={data.description} onChange={this.handleChange} readOnly={readOnly}/>
            </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.props.close}>
                {t('general.cancel')}
              </button>
              <button type="button" class="btn btn-primary" onClick={this.handleSubmit}>
                {t('general.save')}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const MyComponent = withTranslation()(EventModal)

export default function App(props) {
  return (
    <Suspense fallback="loading">
      <MyComponent {...props}/>
    </Suspense>
  )
}