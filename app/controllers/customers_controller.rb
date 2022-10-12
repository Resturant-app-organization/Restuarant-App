class CustomersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        customer = Customer!(customer_params)
        Session[:customer_id] = customer.id
        render json: customer, status: :created
    end

    def show
        render json: @current_customer
    end

    private

    def customer_params
        params.permit(:username, :password, :password_confirmation)
    end

end
