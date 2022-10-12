class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :customer_id
      t.integer :burger_id
      t.string :description

      t.timestamps
    end
  end
end
