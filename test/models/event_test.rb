# == Schema Information
#
# Table name: events
#
#  id          :bigint           not null, primary key
#  description :text
#  end_date    :datetime         not null
#  start_date  :datetime         not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
