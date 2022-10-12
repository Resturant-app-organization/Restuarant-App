class Burger < ApplicationRecord
    # belongs_to :cjrestaurant 
    has_many :customers 
    has_many :reviews, through: :customers 
end
