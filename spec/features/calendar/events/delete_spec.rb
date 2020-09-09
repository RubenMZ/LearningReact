require './spec/support/features/events_helpers.rb'

RSpec.describe 'Calendar > Events delete', js: true do
  include EventsHelpers

  let(:event) { create :event }

  before do
    event
    visit page_url
    click_show_event(event)
  end


  it 'removes an event' do
    expect(page).to have_css event_selector(event)

    click_delete_event

    expect(page).not_to have_css event_selector(event)
  end
end