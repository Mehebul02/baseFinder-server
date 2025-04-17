
import { Server } from 'http'
import app from './app'
import mongoose from 'mongoose';
import config from './app/config';


let server:Server


async function bootstrap(){

  try {
    await mongoose.connect(config.db_url as string);
    await mongoose.connect(config.db_url as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Optional for TLS issues
      ssl: true,
      tlsAllowInvalidCertificates: false,
    });
    
    server = app.listen(config.port, () => {
      console.log(`🚀 Application is running on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }

}

bootstrap()
