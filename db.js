import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    console.log(process.env.PORT);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline);
    process.exit(1);
  }
};

export default connectDB;
