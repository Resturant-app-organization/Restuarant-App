Burger.all.destroy_all
Customer.all.destroy_all
Review.all.destroy_all
Cjrestaurant.all.destroy_all


puts "Preparing Burger!"
b1 =Burger.create(
    name: "Cheese burger",
    price: 200,
    image_url: "https://i.ndtvimg.com/i/2016-05/chicken-burger_625x350_61464591266.jpg"
)
b2 =Burger.create(
    name: "Chicken burger",
    price: 250,
    image_url: "https://c.ndtvimg.com/o6fmnhs_burger_625x300_20_July_18.jpg"
)
b3 =Burger.create(
    name: "Fish burger",
    price: 400,
    image_url: "https://i.ndtvimg.com/i/2016-05/chicken-fish-burger_625x350_61464592753.jpg"
)
b4 =Burger.create(
    name: "Mushroom burger",
    price: 150,
    image_url: "https://i.ndtvimg.com/i/2016-05/lentil-mushroom-burger_625x350_71464592318.jpg"
)
b5 =Burger.create(
    name: "Stuffed bean burger",
    price: 500,
    image_url: "https://i.ndtvimg.com/i/2016-05/lentil-mushroom-burger_625x350_71464592318.jpg"
)
b6 =Burger.create(
    name: "Meat burger",
    price: 350,
    image_url: "https://i.ndtvimg.com/i/2016-05/lamb-burger_625x350_41464593235.jpg"
)
b7 =Burger.create(
    name: "Lamb burger",
    price: 400,
    image_url: "https://i.ndtvimg.com/i/2016-05/lamb-burger_625x350_41464593235.jpg"
)
b8 =Burger.create(
    name: "Potato burger",
    price: 200,
    image_url: "https://i.ndtvimg.com/i/2016-05/potato-corn-burger_625x350_51464590875.jpg"
)


puts "Building Restaurant..."
Cjrestaurant.create(
    name: "Cjrestaurant",
    location: "Kandui"
)
Cjrestaurant.create(
    name: "Cjrestaurant",
    location: "Pendeza"
)
Cjrestaurant.create(
    name: "Cjrestaurant",
    location: "Nyali"
)
Cjrestaurant.create(
    name: "Cjrestaurant",
    location: "Old Town"
)
Cjrestaurant.create(
    name: "Cjrestaurant",
    location: "Mvita"
)
Cjrestaurant.create(
    name: "Cjrestaurant",
    location: "Miritini"
)
Cjrestaurant.create(
    name: "Cjrestaurant",
    location: "Shanzu"
)
Cjrestaurant.create(
    name: "Cjrestaurant",
    location: "Likoni"
)
Cjrestaurant.create(
    name: "Cjrestaurant",
    location: "Jomvu"
)
Cjrestaurant.create(
    name: "Cjrestaurant",
    location: "Kisauni"
)

puts "Seeding Customers..."
c1 =Customer.create!(
    username: "Laureen",
    password_digest:BCrypt::Password.create('Your_Password'),
    phone_number: 733-333-5555,
    gender: "Male"
)
c2 =Customer.create!(
    username: "James",
    password_digest:BCrypt::Password.create('Your_Password'),
    phone_number: 733-333-5556,
    gender: "Female"
)
c3 =Customer.create!(
    username: "Festus",
    password_digest:BCrypt::Password.create('Your_Password'),
    phone_number: 733-333-5557,
    gender: "Female"
)
c3 =Customer.create!(
    username: "Damaris",
    password_digest:BCrypt::Password.create('Your_Password'),
    phone_number: 733-333-5558,
    gender: "Female"
)


puts "Seeding Review..."
Review.create(
    customer_id: c1.id,
    burger_id: b1.id,
    description: "The delicious and cheesy flavours of pizza are in the shape of a burger. The fun part is that this recipe is very easy to make."
)
Review.create(
    customer_id: c1.id,
    burger_id: b1.id,
    description: "For the healthy and calorie conscious folks we've got this tasty burger. A lentil, mushroom and sun dried tomato pattie packed between a whole wheat bun."
)
Review.create(
    customer_id: c1.id,
    burger_id: b1.id,
    description: "Being a vegetarian is no reason to deny yourself the gluttonous pleasures of an overstuffed bun. Try this bean burger with a chipotle chilli and a dash of lime."
)
puts "Done seeding!"

