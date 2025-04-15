
import { Server } from 'http'
import app from './app'
import mongoose from 'mongoose';
import config from './app/config';

const PORT = 5000

let server:Server


async function bootstrap(){

  try {
    await mongoose.connect(config.db_url as string);

    seedSuperAdmin();
    server = app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }

}

bootstrap()
