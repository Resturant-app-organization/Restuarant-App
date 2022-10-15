class CustomerWithReviewSerializer < ActiveModel::Serializer
  attributes :id

  has_many :burgers

end
