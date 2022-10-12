


ActiveRecord::Schema[7.0].define(version: 2022_10_11_144122) do
  create_table "burgers", force: :cascade do |t|
    t.string "name"
    t.integer "price"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cjrestaurants", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "customers", force: :cascade do |t|
    t.string "name"
    t.integer "phone_number"
    t.string "gender"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "customer_id"
    t.integer "burger_id"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
