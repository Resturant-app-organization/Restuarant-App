class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :burger_id, :description
end
