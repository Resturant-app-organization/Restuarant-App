class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :username, :phone_number, :gender

  # has_many :reviews
end
