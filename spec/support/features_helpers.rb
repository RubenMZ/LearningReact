# Helpers for features
module FeaturesHelpers
  def wait_for_loading
    expect(page).to have_no_css '.loading'
  end

  def fill_datepicker(name, with:)
    fill_in name, with: with.strftime('%d/%m/%Y')
  end

  def expect_show_error(text:, count:)
    expect(page).to have_css '.text-danger', text: text, count: count
  end
end
