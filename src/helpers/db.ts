import mongoose from 'mongoose';

export const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect('mongodb://127.0.0.1/my_database');
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
  }
};
