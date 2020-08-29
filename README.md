# Learning React Calendar

Calendar using Rails + React

## Requirements

- Ruby MRI 2.7.1
- Rails 6.0.3.2
- Postgresql 12.2

## Installation

### Configuration

1. Install `gem bundler` if it doesn't installed.

```bash
$ gem install bundler
```

2. Install all dependencies with `bundler`.

```bash
$ bundle install
```

### Database creation

1. Install database postgres.

```bash
$ sudo apt-get install postgresql postgresql-contrib
```

2. Install dependencies required for postgres.

```bash
$ sudo apt-get install libpq-dev
```

3. Create database from postgres (default user).

```bash
$ sudo -u postgres createuser calendar_api
$ sudo -u postgres createdb -O calendar_api api_development
$ sudo -u postgres createdb -O calendar_api api_test
$ sudo -i -u postgres
$ psql
# ALTER USER calendar_api WITH SUPERUSER;
$ sudo service postgresql restart
```

4. Allow the database authentication without password.

```bash
$ sudo vim /etc/postgresql/[version-postgres]/main/pg_hba.conf
# replace "peer" for "trust" in "Unix domain socket connections only"
$ sudo service postgresql restart
```

5. Create database and load basic schema.

```bash
bundle exec rails db:setup
```
