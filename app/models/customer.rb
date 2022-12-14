class Customer < ApplicationRecord
    has_secure_password
    has_many :reviews 
    has_many :burgers, through: :reviews

    

    validates :username, presence: true, uniqueness: true
end
