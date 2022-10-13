class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.string :username
      t.integer :customer_id
      t.string :password_digest
      t.integer :phone_number
      t.string :gender

      t.timestamps
    end
  end
end
