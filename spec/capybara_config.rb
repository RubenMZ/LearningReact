RSpec.configure do |config|
  break if config.files_to_run.select { |x| x.include?('features') }.empty?

  require 'capybara/rspec'

  include RSpec::Longrun::DSL

  config.default_formatter = RSpec::Longrun::Formatter

  config.before :suite do
    port = 3333

    Capybara.server_port = port

    next if ENV['SKIP_BUILD'].present?

    Dir.chdir('./client') do
      `yarn install`

      command = "REACT_APP_API_HOST='http://#{Capybara.server_host}' " \
      "REACT_APP_API_PORT=#{port} yarn run build"

      `#{command}`
    end

    `cp -Rv client/build/* public`
  end

  config.before do |example|
    Capybara.current_driver = example.metadata[:driver] || :chrome_headless
  end

  # Configure Capybara
  Capybara.register_driver :chrome_headless do |app|
    Capybara::Selenium::Driver.new(
      app, browser: :chrome,
           options: Selenium::WebDriver::Chrome::Options.new(
             args: %w[headless no-sandbox disable-gpu window-size=1920,1080]
           )
    )
  end

  Capybara.register_driver :chrome do |app|
    Capybara::Selenium::Driver.new(app, browser: :chrome, args: ['--window-size=1920,1080'])
  end

  Capybara.javascript_driver = :chrome_headless
  Capybara.server = :puma, {Silent: true}

  config.before :suite do
    FileUtils.rm_rf(Dir[Rails.root.join('tmp/errors')])
  end

  config.after :each, type: :feature do |example|
    next unless example.exception

    path = File.expand_path(File.join('tmp/errors'))
    Dir.mkdir(path) unless Dir.exist?(path)
    screenshot = "#{example.file_path.gsub(/[\.\/]/, '-')}-#{example.metadata[:line_number]}.png"
    page.save_screenshot File.join(path, screenshot)
  end
end
