class StaticsController < ApplicationController
  def show
    template = (params[:id]).presence_in("react") || raise(ActionController::BadRequest)

    render template
  end
end
