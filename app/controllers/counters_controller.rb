class CountersController < ApplicationController
  before_action :set_counter

  def index
  end

  def update
    @counter.update(count: @counter.count + 1)
    respond_to do |format|
      format.json {
        render json: @counter
      }
      format.html {
        redirect_to counters_path
      }
    end
  end

  private def set_counter
    @counter = Counter.first
  end
end
