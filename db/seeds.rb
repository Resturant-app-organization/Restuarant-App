puts "Preparing Burger!"
Burger.create(
    name: "Cheese burger",
    price: 200,
    image_url: "https://unsplash.com/photos/5nvt9BrLaAc"
)
Burger.create(
    name: "Chicken burger",
    price: 250,
    image_url: "https://unsplash.com/photos/jh5XyK4Rr3Y"
)
Burger.create(
    name: "Fish burger",
    price: 400,
    image_url: "https://unsplash.com/photos/NkwNp3ho-Qw"
)
Burger.create(
    name: "Mushroom burger",
    price: 150,
    image_url: "https://unsplash.com/photos/I7A_pHLcQK8"
)
Burger.create(
    name: "Stuffed bean burger",
    price: 500,
    image_url: "https://unsplash.com/photos/sc5sTPMrVfk"
)
Burger.create(
    name: "Meat burger",
    price: 350,
    image_url: "https://unsplash.com/photos/uBigm8w_MpA"
)
Burger.create(
    name: "Lamb burger",
    price: 400,
    image_url: "https://unsplash.com/photos/ypZI_CA91M0"
)
Burger.create(
    name: "Potato burger",
    price: 200,
    image_url: "https://unsplash.com/photos/I7A_pHLcQK8"
)
Burger.create(
    name: "Veggie burger",
    price: 270,
    image_url: "https://unsplash.com/photos/_qxbJUr9RqI"
)
Burger.create(
    name: "Pizza burger",
    price: 180,
    image_url: "https://unsplash.com/photos/X92WLoaQ1_o"
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
Customer.create(
    username: "John",
    phone_number: 733-333-5555,
    gender: "Male"
)
Customer.create(
    username: "Mary",
    phone_number: 433-333-1111,
    gender: "Female"
)
Customer.create(
    username: "Eliza",
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
    phone_number: 233-883-1133,
    gender: "Female"
)
Customer.create(
    username: "Festus",
    phone_number: 903-333-2433,
    gender: "Male"
)
Customer.create(
    username: "Peter",
    phone_number: 113-333-3333,
    gender: "Male"
)
Customer.create(
    username: "James",
    phone_number: 325-543-3213,
    gender: "Male"
)
Customer.create(
    username: "Martha",
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

