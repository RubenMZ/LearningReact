require './spec/support/features/events_helpers.rb'

RSpec.describe 'Calendar > Events new', js: true do
  include EventsHelpers

  let(:attributes) { attributes_for :event }

  before do
    visit page_url
    click_add_event
  end

  it 'should create new event' do
    fill_event_form(attributes)

    click_save_event

    wait_for_loading

    new_event = find_event({title: attributes[:title]})

    expect_show_event(new_event)
  end

  context 'when has empty fields' do
    before { click_save_event }

    it 'should show errors' do
      within event_modal_selector do
        expect_show_error text: 'Es requerido', count: 3
      end
    end
  end
end