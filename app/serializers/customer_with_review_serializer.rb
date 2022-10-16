class CustomerWithReviewSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :burgers
end
