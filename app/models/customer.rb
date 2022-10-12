class Customer < ApplicationRecord
    has_many :reviews 
    has_many :burgers
end
