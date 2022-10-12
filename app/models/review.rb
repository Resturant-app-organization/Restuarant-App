class Review < ApplicationRecord
    belongs_to :customer 
    belongs_to :burger

    # validates :description, length: { minimum: 20 }
end
