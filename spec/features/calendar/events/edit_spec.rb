require './spec/support/features/events_helpers.rb'

RSpec.describe 'Calendar > Events edit', js: true do
  include EventsHelpers

  let(:attributes) { attributes_for :event }
  let(:event) { create :event }

  before do
    event
    visit page_url
    click_show_event(event)
    click_edit_event
  end

  it 'updates an event' do
    fill_event_form(attributes)
    click_save_event

    wait_for_event_loading

    updated_event = find_event({title: attributes[:title]})
    expect_list_event(updated_event)
  end

  context 'when has empty fields' do
    before do
      fill_event_form(title: '')
      click_save_event
    end

    it 'shows errors' do
      within event_modal_selector do
        expect_show_error text: 'Required', count: 1
      end
    end
  end
end
