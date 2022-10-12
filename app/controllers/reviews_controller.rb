class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found_response

    def show
        review = Review.find_by!(id: params[:id])
        render json: review, status: :ok
    end 

    def create
        review = Review.create 
        render json: review, Serializer: CustomerWithReviewSerializer, status: :created
    end

    def update
        review = Review.find_by!(id: params[:id])
        review.update
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

end
