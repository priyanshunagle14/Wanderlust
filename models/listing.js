
const mongoose = require("mongoose");
const Review = require("./review.js");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  // image: {
  //   filename: {
  //     type: String,
  //     default: "listingimage",
  //   },
  //   url: {
  //     type: String,
  //     default:
  //       "https://unsplash.com/photos/low-angle-photo-of-hotel-lighted-signage-on-top-of-brown-building-during-nighttime-n_IKQDCyrG0",
  //     set: (v) =>
  //       v === ""
  //         ? "https://unsplash.com/photos/low-angle-photo-of-hotel-lighted-signage-on-top-of-brown-building-during-nighttime-n_IKQDCyrG0"
  //         : v,
  //   },
  // },
  image: {
    url: String,
    filename: String,
  },

  price: {
    type: Number,
    required: true,
  },
  location: String,
  country: String,
  reviews : [
    {
      type: Schema.Types.ObjectId,
      ref : "Review",

    }
  ],
  owner:{
    type: Schema.Types.ObjectId,
    ref:"User"
  },
  //  category: {
  //   type: String,
  //   enum: [
  //     "room",
  //     "mountain",
  //     "beach",
  //     "city",
  //     "farm",
  //     "castle",
  //     "camping"
  //   ],
  //   required: true
  // },

 
  // isTrending: {
  //   type: Boolean,
  //   default: false
  // },

  // reviews: [{
  //   type: Schema.Types.ObjectId,
  //   ref: "Review",
  // }],

  // owner: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User"
  // }
});


listingSchema.post("findOneAndDelete",async(listing)=>{
  if(listing) {
     await Review.deleteMany({_id:{$in:listing.reviews}});
  }

  });
 



const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
