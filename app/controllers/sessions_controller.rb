class SessionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    # skip_before_action :authorize, only: :create

    # def create
    #     customer = Customer.find_by(name: params[:name])
    #     if customer&.authenticate(params[:password])
    #         session[:customer_id] = customer.id
    #         render json: customer
    #     else
    #         render json: {error: ["Invalid username or password"] }, status: :unauthorized
    #     end
    # end
    def create 
        customer = Customer.find_by(username: params[:username])
        session[:customer_id] = customer.id
        render json: customer
        
    end

    def destroy
        session.delete :customer_id
        head :no_content
    end

    private

    def not_found_response
        render json: {error: "User not found"}, status: :not_found
    end
    def unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
