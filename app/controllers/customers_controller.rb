class CustomersController < ApplicationController
    # skip_before_action :authorize, only: [:create, :show]

    def create
        customer = Customer.create!(customer_params)
        # Session[:customer_id] = customer.id
        render json: customer, status: :created
    end

    # def show
    #     render json: @current_customer
    # end

    def show
        customer = Customer.find_by!(id: params[:id])
        render json: customer, status: :ok
    end 

    private

    def customer_params
        params.permit(:username, :phone_number, :gender)
    end

end
