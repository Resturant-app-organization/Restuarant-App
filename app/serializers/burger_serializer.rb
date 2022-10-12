class BurgerSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image_url
end
