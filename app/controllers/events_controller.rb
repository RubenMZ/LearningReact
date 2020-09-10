class EventsController < ApplicationController
  before_action :find_event, only: %i[show update destroy]

  def index
    events = Event.all.paginate(pagination_params)
    render_index events
  end

  def show
    render_show @event
  end

  def create
    event = Event.new(create_params)
    if event.save
      render_create event
    else
      render_errors event
    end
  end

  def update
    if @event.update(update_params)
      render_update @event
    else
      render_errors @event
    end
  end

  def destroy
    @event.destroy
    render_destroy
  end

  private

  def find_event
    @event = Event.find(params[:id])
  end

  def create_params
    params.require(:data).permit(%i[title description start_date end_date])
  end

  def update_params
    create_params
  end
end
