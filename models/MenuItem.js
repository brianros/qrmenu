import mongoose from 'mongoose';

const MenuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this item.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for this item.'],
    maxlength: [200, 'Description cannot be more than 200 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price for this item.'],
  },
  category: {
    type: String,
    required: [true, 'Please specify a category for this item.'],
  },
});

export default mongoose.models.MenuItem || mongoose.model('MenuItem', MenuItemSchema);
