class CustomersController < ApplicationController

    # skip_before_action :authorize, only: [:create, :show]

    # skip_before_action :authorize, only: :create


    # def create
    #     customer = Customer.create!(customer_params)
    #     session[:customer_id] = customer.id
    #     render json: customer, status: :created
    # end
    def create
        customer = Customer.create!(customer_params)

        # Session[:customer_id] = customer.id
        render json: customer, status: :created

        if customer.valid?
            session[:customer_id] = customer.id
            render json: customer, status: :created
        else
            render json: {errors: customer.errors.full_messages}, status: :unprocessable_entity
        end

    end

    # def show
    #     render json: @current_customer
    # end


    def show
        customer = Customer.find_by!(id: params[:id])
        render json: customer, status: :ok
    end 

    def show
        user = Customer.find_by(id: session[:customer_id])
        if customer
            render json: customer, status: :created
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end


    private

    def customer_params
        params.permit(:username, :phone_number, :gender)
    end

end
