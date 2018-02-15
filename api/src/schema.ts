import * as mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {    
    honor: {
      type: Boolean,
      default: false,
    },
    amount: {
      type: Number,
      required: true,
      min: 5,
    },
    frequency: {
      type: String,
      required: true,
    },
    honor_name: {
      type: String,
      trim: true,
    },
    honor_comment: {
      type: String,
      trim: true,
    },
    anonymous: {
      type: Boolean,
      default: false,
    },
    first_name: {
      type: String,
      required: true,
      minlength: 1,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      minlength: 1,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      minlength: 1,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    receive_updates: {
      type: Boolean,
      default: false,
    },
    card_number: {
      type: String,
      required: true,
      trim: true,
    },
    cvv: {
      type: String,
      required: true,
      trim: true,
    },
    expiration: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true, versionKey: '_version' });

export default schema;
