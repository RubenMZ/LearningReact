source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.3', '>= 6.0.3.1'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem 'puma', '~> 4.1'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder', '~> 2.7'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.2', require: false

# Kaminari is a Scope & Engine based, clean, powerful, agnostic, customizable and sophisticated
# paginator for Rails 4+
gem 'kaminari'

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors'

# RuboCop is a Ruby static code analyzer
gem 'rubocop', '~> 0.89.1', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Use Pry as your rails console
  gem 'pry-rails'
  # factory_bot_rails provides integration between factory_bot and rails 4.2 or newer
  gem 'factory_bot_rails'
    # Faker is used to easily generate fake data: names, addresses, phone numbers, etc.
  gem 'faker'
end

group :development do
  # Add a comment summarizing the current schema to the top or bottom of each of your...
  gem 'annotate'
  gem 'listen', '~> 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  # Capybara helps you test web applications by simulating how a real user would interact with your app.
  gem 'capybara'
  # Database Cleaner is a set of gems containing strategies for cleaning your database in Ruby.
  gem 'database_cleaner-active_record'
  # Testing framework
  gem 'rspec-rails', '~> 4.0.1'
  # RSpec is a fine unit-testing framework, but is also handy for acceptance and integration tests.
  gem 'rspec-longrun', require: false
  # Rubocop rspec
  gem 'rubocop-rspec', require: false
  # Provides RSpec- and Minitest-compatible one-liners to test common Rails functionality that.
  gem 'shoulda-matchers'
  # Selenium WebDriver drives a browser natively, as a real user would, either locally or on remote machines.
  gem 'webdrivers', require: 'webdrivers/chromedriver'
  # Code coverage for Ruby with a powerful configuration library and automatic merging of coverage
  # across test suites
  gem 'simplecov'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
