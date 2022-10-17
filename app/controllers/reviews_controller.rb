class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
# before_action :authorize

    def index
        render json: Review.all, status: :ok
    end 

    def show
        review = Review.find_by!(id: params[:id])
        render json: review, status: :ok
    end 

    # def create
    #     review = Review.create!(review_params) 
    #     render json: review, status: :created
    # end

    def create
        customer_id = session[:customer_id]
        customer = Customer.find(customer_id)
        review = customer.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = Review.find_by!(id: params[:id])
        review.update(description: params[:description])
        render json: review, status: :accepted
    end 

    def destroy 
        review = Review.find_by!(id: params[:id])
        review.destroy 
        render json: {}, status: :no_content
    end 


    private
    def not_found_response
        render json: {error: "Review not found"} 
    end

    def review_params
        params.permit :customer_id, :burger_id, :description 
    end

end
