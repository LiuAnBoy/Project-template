import mongoose from 'mongoose';
import { MongoError } from 'mongodb';

import Locals from './Locals';

export class Database {
  public static async init(): Promise<void> {
    const dsn = Locals.config().mongoUrl;

    try {
      await mongoose.connect(dsn);
      return console.log('Database   :: MongoDB is connected');
    } catch (error) {
      if (error instanceof MongoError) {
        console.log(`Database   :: MongoDB is not connected: ${error.message}`);
        return process.exit(1);
      }
    }
  }
}

export default mongoose;
