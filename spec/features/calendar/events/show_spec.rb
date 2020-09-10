require './spec/support/features/events_helpers.rb'

RSpec.describe 'Calendar > Events show', js: true do
  include EventsHelpers

  let(:event) { create :event }

  before do
    event
    visit page_url
    click_show_event(event)
  end

  it 'shows event information' do
    expect(page).to have_css event_modal_selector
    expect_show_event(event)
  end
end
