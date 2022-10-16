class CustomersController < ApplicationController
    # skip_before_action :authorize, only: :create

    # def create
    #     customer = Customer.create!(customer_params)
    #     session[:customer_id] = customer.id
    #     render json: customer, status: :created
    # end
     def index
        render json: Customer.all, status: :ok
    end

    def create
        customer = Customer.create!(customer_params)
        if customer.valid?
            session[:customer_id] = customer.id
            render json: customer,  status: :created
        else
            render json: {errors: customer.errors.full_messages}, status: :unprocessable_entity
        end
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
        params.permit(:username, :password, :password_confirmation)
    end

end
