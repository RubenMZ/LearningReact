# Helpers for controllers responses
module ControllerHelpers
  def json
    JSON.parse(response.body, object_class: OpenStruct)
  end

  def json_hash
    JSON.parse(response.body, symbolize_names: true)
  end

  def data
    json_hash[:data]
  end

  def errors
    json_hash[:errors]
  end
end
