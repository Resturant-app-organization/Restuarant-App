class Customer < ApplicationRecord
    has_many :reviews 
    has_many :burgers

    validates :username, presence: true, uniqueness: true
    validates :description, {:length => {:minimum => 20}}
end
