module EventsHelpers
  def page_url
    '/'
  end

  def event_modal_selector
    '#event-modal'
  end

  def event_selector(event)
    ".event-#{event.id}"
  end

  def click_add_event
    find("#add-event-button").click
  end

  def click_cancel_event
    find("#cancel-event-button").click
  end

  def click_save_event
    find("#save-event-button").click
  end

  def click_delete_event
    find("#delete-event-button").click
  end

  def click_edit_event
    find("#edit-event-button").click
  end

  def click_show_event(event)
    first(event_selector(event)).click
  end

  def find_event(params)
    Event.find_by(params)
  end

  def fill_event_form(attributes)
    fill_in 'title', with: attributes[:title] if attributes.key?(:title)
    fill_datepicker 'startDate', with: attributes[:start_date]  if attributes.key?(:start_date)
    fill_datepicker 'endDate', with: attributes[:end_date] if attributes.key?(:end_date)
    fill_in 'description', with: attributes[:description] if attributes.key?(:description)
  end

  def expect_show_events(events)
    events.each do |event|
      expect_show_event(event)
    end
  end

  def expect_show_event(event)
    within first(event_selector(event)) do
      expect(page).to have_css('.fc-event-time')
      expect(page).to have_css('.fc-event-title', text: event.title)
    end
  end
end