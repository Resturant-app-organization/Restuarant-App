puts "Preparing Burger!"
Burger.create(
    name: "Cheese burger",
    price: 200,
    image_url: "https://i.ndtvimg.com/i/2016-05/chicken-burger_625x350_61464591266.jpg"
)
Burger.create(
    name: "Chicken burger",
    price: 250,
    image_url: "https://c.ndtvimg.com/o6fmnhs_burger_625x300_20_July_18.jpg"
)
Burger.create(
    name: "Fish burger",
    price: 400,
    image_url: "https://i.ndtvimg.com/i/2016-05/chicken-fish-burger_625x350_61464592753.jpg"
)
Burger.create(
    name: "Mushroom burger",
    price: 150,
    image_url: "https://i.ndtvimg.com/i/2016-05/lentil-mushroom-burger_625x350_71464592318.jpg"
)
Burger.create(
    name: "Stuffed bean burger",
    price: 500,
    image_url: "https://i.ndtvimg.com/i/2016-05/lentil-mushroom-burger_625x350_71464592318.jpg"
)
Burger.create(
    name: "Meat burger",
    price: 350,
    image_url: "https://i.ndtvimg.com/i/2016-05/lamb-burger_625x350_41464593235.jpg"
)
Burger.create(
    name: "Lamb burger",
    price: 400,
    image_url: "https://i.ndtvimg.com/i/2016-05/lamb-burger_625x350_41464593235.jpg"
)
Burger.create(
    name: "Potato burger",
    price: 200,
    image_url: "https://i.ndtvimg.com/i/2016-05/potato-corn-burger_625x350_51464590875.jpg"
)
# Burger.create(
#     name: "Veggie burger",
#     price: 270,
#     image_url: "https://i.ndtvimg.com/i/2016-05/supreme-veggie-burger_625x350_71464590935.jpg"
# )
# Burger.create(
#     name: "Pizza burger",
#     price: 180,
#     image_url: "https://c.ndtvimg.com/2021-09/nr0qi0sg_pizza-burger_625x300_23_September_21.jpg"
# )

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
Customer.create(
    username: "John",
    password:"",
    password_confirmation:"",
    phone_number: 733-333-5555,
    gender: "Male"
)
Customer.create(
    username: "Mary",
    password_digest:"",
    phone_number: 433-333-1111,
    gender: "Female"
)
Customer.create(
    username: "Eliza",
    password_digest:"",
    phone_number: 303-663-8855,
    gender: "Female"
)
Customer.create(
    username: "Martin",
    phone_number: 343-333-3333,
    gender: "Male"
)
Customer.create(
    username: "Sue",
    password_digest:"",
    phone_number: 233-333-3333,
    gender: "Female"
)
Customer.create(
    username: "Paul",
    phone_number: 003-763-4444,
    gender: "Male"
)
Customer.create(
    username: "Mwashumbe",
    password_digest:"",
    phone_number: 233-883-1133,
    gender: "Female"
)
Customer.create(
    username: "Festus",
    password_digest:"",
    phone_number: 903-333-2433,
    gender: "Male"
)
Customer.create(
    username: "Peter",
    password_digest:"",
    phone_number: 113-333-3333,
    gender: "Male"
)
Customer.create(
    username: "James",
    password_digest:"",
    phone_number: 325-543-3213,
    gender: "Male"
)
Customer.create(
    username: "Martha",
    password_digest:"",
    phone_number: 333-432-3333,
    gender: "Female"
)


puts "Seeding Review..."
Review.create(
    customer_id: 1,
    burger_id: 10,
    description: "The delicious and cheesy flavours of pizza are in the shape of a burger. The fun part is that this recipe is very easy to make."
)
Review.create(
    customer_id: 7,
    burger_id: 4,
    description: "For the healthy and calorie conscious folks we've got this tasty burger. A lentil, mushroom and sun dried tomato pattie packed between a whole wheat bun."
)
Review.create(
    customer_id: 3,
    burger_id: 5,
    description: "Being a vegetarian is no reason to deny yourself the gluttonous pleasures of an overstuffed bun. Try this bean burger with a chipotle chilli and a dash of lime."
)
Review.create(
    customer_id: 6,
    burger_id: 2,
    description: "Chicken mince marinated with salt, pepper and feta cheese is only the beginning of this ultimate wonder. "
)
Review.create(
    customer_id: 5,
    burger_id: 9,
    description: "Tightly packed between a bun, even vegetables light up. Beans, carrots, cauliflower and cabbage crusted pattie is truly a vegetarian delight."
)
Review.create(
    customer_id: 10,
    burger_id: 7,
    description: "Lamb it out with this thick and juicy pattie accompanied with a crunchy bitter sweet raddish slaw and chilli aioli."
)
Review.create(
    customer_id: 8,
    burger_id: 1,
    description: "Made with cheese tikka coated in spicy, delicious makhani gravy filled inside a burger bun. Cheese twin burgers are a tasty snack or appetizer for kids and adults alike!"
)
Review.create(
    customer_id: 4,
    burger_id: 6,
    description: "This scrumptious burger sits under a chilli meat pattie, roasted bell pepper dip, onions, tomatoes and lettuce."
)
Review.create(
    customer_id: 2,
    burger_id: 3,
    description: "If a burger for you is all about the meat and protein then you're at the right place. Experience the goodness of chicken, fish and a tangy hot and sour sauce."
)
Review.create(
    customer_id: 1,
    burger_id: 8,
    description: "The comfort of potato and the crunch of corn in one thick pattie. Topped off with lettuce, tomatoes, gherkins and served with hot chips."
)
puts "Done seeding!"

