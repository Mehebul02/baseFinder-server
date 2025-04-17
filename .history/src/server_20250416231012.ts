import { Server } from 'http';
import app from './app';
import mongoose from 'mongoose';
import config from './app/config';

let server: Server | null = null;

async function bootstrap() {
  try {
    await mongoose.connect(config.db_url as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
    });

    server = app.listen(config.port, () => {
      console.log(`🚀 Application is running on port ${config.port}`);
    });
  } catch (err) {
    console.log("❌ Failed to connect to MongoDB", err);
  }
}

bootstrap();
