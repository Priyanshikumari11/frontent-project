export const categories = [
  { id: 1, name: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop" },
  { id: 2, name: "Burger", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop" },
  { id: 3, name: "Biryani", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=200&fit=crop" },
  { id: 4, name: "Sushi", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200&h=200&fit=crop" },
  { id: 5, name: "Desserts", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200&h=200&fit=crop" },
  { id: 6, name: "Healthy", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop" },
  { id: 7, name: "North Indian", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=200&fit=crop" },
  { id: 8, name: "Chinese", image: "https://images.unsplash.com/photo-1541658016709-8253a20840e1?w=200&h=200&fit=crop" }
];

export const carouselData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop",
    title: "50% OFF on your first order",
    subtitle: "Use code WELCOME50"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&h=400&fit=crop",
    title: "Free Delivery on orders above ₹199",
    subtitle: "Enjoy hot food at home"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop",
    title: "Special Bulk Order Discounts",
    subtitle: "Perfect for office parties"
  }
];

export const restaurants = [
  {
    id: "r1",
    name: "Burger King",
    rating: 4.2,
    deliveryTime: "25-30",
    distance: "2.5 km",
    cuisines: ["Burgers", "American"],
    costForTwo: "₹350 for two",
    location: "Connaught Place",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop",
    promoted: true,
    veg: false,
    menu: [
      { id: "m1", name: "Whopper", price: 149, veg: false, description: "Signature burger with flame-grilled patty", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop" },
      { id: "m2", name: "Veggie Burger", price: 129, veg: true, description: "Crispy veg patty with fresh lettuce", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200&h=200&fit=crop" },
      { id: "m3", name: "Fries (Large)", price: 99, veg: true, description: "Golden crispy french fries", image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=200&h=200&fit=crop" }
    ]
  },
  {
    id: "r2",
    name: "Domino's Pizza",
    rating: 4.5,
    deliveryTime: "20-25",
    distance: "1.2 km",
    cuisines: ["Pizzas", "Italian", "Fast Food"],
    costForTwo: "₹400 for two",
    location: "Karol Bagh",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop",
    promoted: false,
    veg: false,
    menu: [
      { id: "m4", name: "Margherita", price: 199, veg: true, description: "Classic cheese pizza with a soft crust", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=200&fit=crop" },
      { id: "m5", name: "Pepperoni", price: 299, veg: false, description: "Loaded with pepperoni and extra cheese", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&h=200&fit=crop" }
    ]
  },
  {
    id: "r3",
    name: "Haldiram's",
    rating: 4.6,
    deliveryTime: "30-35",
    distance: "3.8 km",
    cuisines: ["North Indian", "Sweets", "Snacks"],
    costForTwo: "₹300 for two",
    location: "Chandni Chowk",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop",
    promoted: true,
    veg: true,
    menu: [
      { id: "m6", name: "Chole Bhature", price: 150, veg: true, description: "Spicy chickpea curry with fried bread", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=200&fit=crop" },
      { id: "m7", name: "Raj Kachori", price: 120, veg: true, description: "Crispy shell filled with yogurt and chutneys", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=200&h=200&fit=crop" }
    ]
  },
  {
    id: "r4",
    name: "KFC",
    rating: 4.0,
    deliveryTime: "25-35",
    distance: "4.1 km",
    cuisines: ["American", "Fast Food"],
    costForTwo: "₹450 for two",
    location: "Saket",
    image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=500&h=300&fit=crop",
    promoted: false,
    veg: false,
    menu: [
      { id: "m8", name: "Zinger Burger", price: 179, veg: false, description: "Signature chicken burger", image: "https://images.unsplash.com/photo-1615486171448-4fbaf01f89cd?w=200&h=200&fit=crop" },
      { id: "m9", name: "Chicken Bucket", price: 599, veg: false, description: "8 pieces of hot and crispy chicken", image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=200&h=200&fit=crop" }
    ]
  },
  {
    id: "r5",
    name: "Sushi House",
    rating: 4.8,
    deliveryTime: "40-45",
    distance: "5.5 km",
    cuisines: ["Japanese", "Asian"],
    costForTwo: "₹800 for two",
    location: "Vasant Vihar",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&h=300&fit=crop",
    promoted: true,
    veg: false,
    menu: [
      { id: "m10", name: "California Roll", price: 350, veg: false, description: "Crab, avocado, and cucumber", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200&h=200&fit=crop" }
    ]
  },
  {
    id: "r6",
    name: "Healthy Bowl",
    rating: 4.3,
    deliveryTime: "20-30",
    distance: "1.5 km",
    cuisines: ["Healthy", "Salads", "Juices"],
    costForTwo: "₹300 for two",
    location: "Hauz Khas",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop",
    promoted: false,
    veg: true,
    menu: [
      { id: "m11", name: "Quinoa Salad", price: 250, veg: true, description: "Fresh veggies with organic quinoa", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop" }
    ]
  }
];
