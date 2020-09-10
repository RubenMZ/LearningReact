require 'simplecov'

SimpleCov.start 'rails' do
  add_group 'Policies', 'app/policies'
  add_group 'Representations', 'app/representations'
end
