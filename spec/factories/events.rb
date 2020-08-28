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
FactoryBot.define do
  factory :event do

  end
end
