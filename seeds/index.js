const mongoose = require("mongoose");
const Listing = require("../models/listing"); // adjust path if needed

// 🔗 MongoDB Atlas URL
const MONGO_URL = "mongodb+srv://priyanshunagle2020_db_user:Sarthak%40123@cluster0.lvkacjh.mongodb.net/?appName=Cluster0";

// 🔌 Connect to DB
async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("Connected to MongoDB");
}

main().catch(err => console.log(err));

// 🏠 SAMPLE LISTINGS (20)
const listings = [
  {
    title: "Sea View Apartment",
    description: "Beautiful sea-facing apartment with balcony and sunset views.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house1.png",
      filename: "wanderlust_DEV/house1"
    },
    price: 4500,
    location: "Goa",
    country: "India",
    owner: "698631bbefe86862469faee4"
  },
  {
    title: "Mountain View Cottage",
    description: "Cozy wooden cottage surrounded by hills and pine trees.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house2.png",
      filename: "wanderlust_DEV/house2"
    },
    price: 3200,
    location: "Manali",
    country: "India",
    owner: "698631bbefe86862469faee4"
  },
  {
    title: "Luxury City Loft",
    description: "Modern loft in the heart of the city.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house3.png",
      filename: "wanderlust_DEV/house3"
    },
    price: 7200,
    location: "Mumbai",
    country: "India",
    owner: "698631bbefe86862469faee4"
  },
  {
    title: "Heritage Haveli",
    description: "Traditional Rajasthani haveli with royal interiors.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house4.png",
      filename: "wanderlust_DEV/house4"
    },
    price: 5500,
    location: "Jaipur",
    country: "India",
    owner: "698631bbefe86862469faee4"
  },
  {
    title: "Lakeside Retreat",
    description: "Peaceful stay near the lake.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house5.png",
      filename: "wanderlust_DEV/house5"
    },
    price: 3800,
    location: "Udaipur",
    country: "India",
    owner: "698631bbefe86862469faee4"
  },
  {
    title: "Hilltop Villa",
    description: "Private villa with panoramic hill views.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house6.png",
      filename: "wanderlust_DEV/house6"
    },
    price: 6900,
    location: "Lonavala",
    country: "India",
    owner: "698631bbefe86862469faee4"
  },
  {
    title: "Backwater Homestay",
    description: "Kerala-style home near serene backwaters.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house7.png",
      filename: "wanderlust_DEV/house7"
    },
    price: 4100,
    location: "Alleppey",
    country: "India",
    owner: "698631bbefe86862469faee4"
  },
  {
    title: "Desert Camp",
    description: "Luxury tent stay with cultural evenings.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house8.png",
      filename: "wanderlust_DEV/house8"
    },
    price: 3600,
    location: "Jaisalmer",
    country: "India",
    owner: "698631bbefe86862469faee4"
  },
  {
    title: "Forest Treehouse",
    description: "Stay in a treehouse surrounded by forest.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house9.png",
      filename: "wanderlust_DEV/house9"
    },
    price: 5800,
    location: "Wayanad",
    country: "India",
    owner: "698631bbefe86862469faee4"
  },
  {
    title: "Urban Studio",
    description: "Minimal studio perfect for solo travelers.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house10.png",
      filename: "wanderlust_DEV/house10"
    },
    price: 2800,
    location: "Bangalore",
    country: "India",
    owner: "698631bbefe86862469faee4"
  },
  {
    title: "Snow Cabin",
    description: "Warm cabin in snowy mountains.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house11.png",
      filename: "wanderlust_DEV/house11"
    },
    price: 7600,
    location: "Gulmarg",
    country: "India",
    owner: "698631bbefe86862469faee4"
  },
  {
    title: "Beach Hut",
    description: "Simple hut right next to the beach.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house12.png",
      filename: "wanderlust_DEV/house12"
    },
    price: 3000,
    location: "Gokarna",
    country: "India",
    owner: "698631bbefe86862469faee4"
  },
  {
    title: "Tea Garden Stay",
    description: "Stay amid lush green tea plantations.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house13.png",
      filename: "wanderlust_DEV/house13"
    },
    price: 4200,
    location: "Munnar",
    country: "India",
    owner: "698631bbefe86862469faee4"
  },
  {
    title: "Riverfront Cottage",
    description: "Relax beside a calm flowing river.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house14.png",
      filename: "wanderlust_DEV/house14"
    },
    price: 3900,
    location: "Rishikesh",
    country: "India",
    owner: "698631bbefe86862469faee4"
  },
  {
    title: "Farm Stay",
    description: "Authentic rural farm living experience.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house15.png",
      filename: "wanderlust_DEV/house15"
    },
    price: 2600,
    location: "Nashik",
    country: "India",
    owner: "698631bbefe86862469faee4"
  },
  {
    title: "Cliffside Villa",
    description: "Villa perched on a cliff with ocean views.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house16.png",
      filename: "wanderlust_DEV/house16"
    },
    price: 8800,
    location: "Varkala",
    country: "India",
    owner: "698631bbefe86862469faee4"
  },
  {
    title: "City Penthouse",
    description: "Luxury penthouse with skyline view.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house17.png",
      filename: "wanderlust_DEV/house17"
    },
    price: 9500,
    location: "Delhi",
    country: "India",
    owner: "698631bbefe86862469faee4"
  },
  {
    title: "Hill Station Bungalow",
    description: "Colonial bungalow in cool climate.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house18.png",
      filename: "wanderlust_DEV/house18"
    },
    price: 6100,
    location: "Ooty",
    country: "India",
    owner: "698631bbefe86862469faee4"
  },
  {
    title: "Island Resort Room",
    description: "Private room on a tropical island.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house19.png",
      filename: "wanderlust_DEV/house19"
    },
    price: 8300,
    location: "Andaman",
    country: "India",
    owner: "698631bbefe86862469faee4"
  },
  {
    title: "Budget Backpacker Stay",
    description: "Affordable stay for backpackers.",
    image: {
      url: "https://res.cloudinary.com/dwhkgxuru/image/upload/v1770402391/wanderlust_DEV/house20.png",
      filename: "wanderlust_DEV/house20"
    },
    price: 1800,
    location: "Pushkar",
    country: "India",
    owner: "698631bbefe86862469faee4"
  }
];

// 🚀 SEED DATABASE
const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(listings);
  console.log("✅ Database seeded with listings");
  mongoose.connection.close();
};

initDB();
