class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.paginate(pagination_params)
    number, size = pagination_params.values_at(:number, :size)

    return all if size.to_s == '0'

    page(number).per(size)
  end
end
