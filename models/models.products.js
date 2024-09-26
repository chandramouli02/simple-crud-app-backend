const mongoose = require("mongoose");

const ProsuctSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter a name"],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', ProsuctSchema);

module.exports = Product;
