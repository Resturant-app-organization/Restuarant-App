class ApplicationController < ActionController::API
  # protect_from_forgery with: :null_session
    include ActionController::Cookies



  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # before_action :authorize

  private

  def authorize
    @current_customer = Customer.find_by(id: session[:customer_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_customer
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
end
