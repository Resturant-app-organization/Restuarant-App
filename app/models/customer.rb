class Customer < ApplicationRecord
    has_many :burgers
    has_many :reviews 
    

    validates :username, presence: true, uniqueness: true
    # validates :description, length: { minimum: 20 }
end
