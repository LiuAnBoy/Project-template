import * as dotenv from 'dotenv';
import { Application } from 'express';

class Locals {
  public static config(): ILocalType {
    dotenv.config();

    const port = Number(process.env.PORT) || 8080;
    const url = process.env.SERVER_URL || `http://localhost:${port}`;
    const mongoUrl = process.env.MONGO_URI || '';

    return {
      url,
      port,
      mongoUrl,
    };
  }

  public static init(_express: Application): Application {
    /* eslint no-param-reassign: ["off"] */
    _express.locals.app = this.config();
    return _express;
  }
}

export default Locals;

interface ILocalType {
  port: number;
  url: string;
  mongoUrl: string;
}
