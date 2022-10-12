class BurgersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response

    def index
        render json: Burger.all, status: :ok
    end
    
    def show
        burger = Burger.find_by!(id: params[:id])
        render json: burger, status: :ok
    end

    
    private
    def not_found_response 
        render json: {error: "Burger not found"}, status: :not_found
    end
    

end
