class ApplicationController < ActionController::API
  def render_index(items, representation=:basic)
    render json: {
      data: items.as_json(template: representation),
      meta: pagination_meta(items)
    }
  end

  def render_show(item, representation=:basic)
    render_item item, representation, :ok
  end

  def render_create(item, representation=:basic)
    render_item item, representation, :created
  end

  def render_update(item, representation=:basic)
    render_item item, representation, :ok
  end

  def render_item(item, representation, status)
    render json: {data: item.as_json(template: representation)}, status: status
  end

  def render_errors(item)
    render json: {errors: item.errors.details}, status: :unprocessable_entity
  end

  def render_destroy
    render json: {}, status: :no_content
  end

  def pagination_meta(scope)
    return {} if pagination_params[:size].to_s == '0'

    {
      current_page: scope.current_page,
      page_size: scope.limit_value,
      total_elements: scope.total_count,
      total_pages: scope.total_pages
    }
  end

  def pagination_params
    params.fetch(:page, {})
          .permit(:number, :size)
  end

  def representation
    params[:representation]&.to_sym || :basic
  end
end
