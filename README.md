# Learning React Calendar

Calendar using Rails + React

## Requirements

- Ruby MRI 2.7.1
- Rails 6.0.3.2
- Postgresql 12.2
- NodeJS 12.18.0

## Installation

### Configuration

1. Install `gem bundler` if it doesn't installed.

```bash
gem install bundler
```

2. Install all dependencies with `bundler`.

```bash
bundle install
```

### Database creation

1. Install database postgres.

```bash
sudo apt-get install postgresql postgresql-contrib
```

2. Install dependencies required for postgres.

```bash
sudo apt-get install libpq-dev
```

3. Create database from postgres (default user).

```bash
sudo -u postgres createuser learning_react_calendar
sudo -u postgres createdb -O learning_react_calendar learning_react_calendar_development
sudo -u postgres createdb -O learning_react_calendar learning_react_calendar_test
sudo -i -u postgres
psql postgres
# ALTER USER calendar_api WITH SUPERUSER;
sudo service postgresql restart
```

4. Allow the database authentication without password.

```bash
sudo vim /etc/postgresql/[version-postgres]/main/pg_hba.conf
# replace "peer" for "trust" in "Unix domain socket connections only"
sudo service postgresql restart
```

5. Create database and load basic schema.

```bash
bundle exec rails db:setup
```

6. Install react dependencies.

```bash
cd client
yarn install
```

### Execution

1. Start rails server (by default localhost:3000).

```bash
bundle exec rails start
```

2. Start react server (by default localhost:8000).

```bash
cd client
yarn start
```

## Dependencies

### Rails Gems (global)

- `rails`: Rails is a web-application framework
- `pg`: Use postgresql as the database for Active Record
- `puma`: Use Puma as the app server
- `bootsnap`: Reduces boot times through caching; required in config/boot.rb
- `kaminari`: Kaminari is a Scope & Engine based, clean, powerful, agnostic, customizable and sophisticated paginator for Rails 4+
- `rack-cors`: Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
- `rubocop`: RuboCop is a Ruby static code analyzer

### Rails Gems (dev)

- `byebug`: Call 'byebug' anywhere in the code to stop execution and get a debugger console
- `pry-rails`: Use Pry as your rails console
- `factory_bot_rails`: Provides integration between factory_bot and rails 4.2 or newer
- `faker`: Faker is used to easily generate fake data: names, addresses, phone numbers, etc.
- `annotate`: Add a comment summarizing the current schema to the top or bottom of each of your models
- `listen`: The Listen gem listens to file modifications and notifies you about the changes.
- `spring`: Spring speeds up development by keeping your application running in the background.
- `spring-watcher-listen`: This gem makes Spring watch the filesystem for changes using Listen rather than by polling the filesystem.

### Rails Gems (tests)

- `capybara`: Capybara helps you test web applications by simulating how a real user would interact with your app.
- `database_cleaner-active_record`: Database Cleaner is a set of gems containing strategies for cleaning your database in Ruby.
- `rspec-rails`: Brings the RSpec testing framework to Ruby on Rails as a drop-in alternative to its default testing framework, Minitest
- `rspec-longrun`: RSpec is a fine unit-testing framework, but is also handy for acceptance and integration tests.
- `rubocop-rspec`: RSpec-specific analysis for your projects, as an extension to RuboCop.
- `shoulda-matchers`: Provides RSpec- and Minitest-compatible one-liners to test common Rails functionality that.
- `webdrivers`: Selenium WebDriver drives a browser natively, as a real user would, either locally or on remote machines.
- `simplecov`: Code coverage for Ruby with a powerful configuration library and automatic merging of coverage across test suites

### Packages JS (global)

- `@fullcalendar`: A full-sized drag & drop JavaScript event calendar
- `@testing-library`: Simple and complete React DOM testing utilities that encourage good testing practices.
- `axios`: Promise based HTTP client for the browser and node.js
- `bootstrap`: HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.
- `eslint-config-airbnb-base`: This package provides Airbnb's base JS .eslintrc (without React plugins) as an extensible shared config.
- `i18next`: I18next is an internationalization-framework for browser or any other javascript environment.
- `i18next-xhr-backend`: This is a simple i18next backend to be used in the browser.
- `node-sass`: Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.
- `prop-types`: Runtime type checking for React props and similar objects.
- `react`: JavaScript library for building user interfaces.
- `react-datepicker`: A simple and reusable datepicker component for React.
- `react-dom`: React package for working with the DOM.
- `react-i18next`: Is a powerful internationalization framework for React / React Native which is based on i18next.
- `react-loading`: Easy to use loading animations for React projects.
- `react-redux`: Redux is used mostly for application state management.
- `react-router-dom`: DOM bindings for React Router.
- `react-scripts`: This package includes scripts and configuration used by Create React App.
