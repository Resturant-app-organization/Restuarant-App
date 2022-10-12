class Cjrestaurant < ApplicationRecord
    has_many :burgers
    has_many :customers, through: :burgers
end
