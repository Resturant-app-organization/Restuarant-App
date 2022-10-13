class CjrestaurantsController < ApplicationController

    def index
        render json: Cjrestaurant.all, status: :ok
    end

end
