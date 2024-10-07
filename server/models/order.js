const Mongoose = require('mongoose');
const { Schema } = Mongoose;

// Order Schema
const OrderSchema = new Schema({
  cart: {
    type: Schema.Types.ObjectId,
    ref: 'Cart'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  total: {
    type: Number,
    default: 0
  },
  address: {
    type: String,
    default: ''
  },
  city: {
    type: String,
    default: ''
  },
  phoneNumber: {
    type: String,
    default: ''
  },
  zipCode: {
    type: String,
    default: ''
  },
  fullName: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  paymentMethod: {
    type: String,
    default: ''
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = Mongoose.model('Order', OrderSchema);
