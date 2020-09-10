require './spec/support/features/events_helpers.rb'

RSpec.describe 'Calendar > Events index', js: true do
  include EventsHelpers

  let(:events) { create_list :event, rand(2..5) }

  before do
    events
    visit_and_wait page_url
  end

  it 'shows events' do
    expect_list_events(events)
  end

  it 'shows button to add events' do
    click_add_event

    expect(page).to have_css event_modal_selector
  end
end
