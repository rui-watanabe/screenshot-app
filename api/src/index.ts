import { ScreenshotFinishedEventListener } from "./events/listeners/screenshot-finished-listener";
import { natsService } from "./services/nats-service";
import { app } from "./app";
import mongoose from "mongoose";

const start = async () => {
  if(!process.env.MONGO_URL){
    throw new Error("Not defined process.env.NATS_CLUSTER_ID");
  }

  if(!process.env.NATS_CLUSTER_ID){
    throw new Error("Not defined process.env.NATS_CLUSTER_ID");
  }

  if(!process.env.NATS_CLIENT_ID){
    throw new Error("Not defined process.env.NATS_CLIENT_ID");
  }

  if(!process.env.NATS_URL){
    throw new Error("Not defined process.env.NATS_URL");
  }

  try {
    await natsService.connect(process.env.NATS_CLUSTER_ID, process.env.NATS_CLIENT_ID, process.env.NATS_URL);
    natsService.client.on('close', () => {
      console.log('NATS connection close');
      process.exit();
    });

    process.on('SIGINT', () => { natsService.client.close(); });
    process.on('SIGTERM', () => { natsService.client.close(); });

    new ScreenshotFinishedEventListener(natsService.client).listen()

    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.log('Connected to MongoDB');

  }
  catch(err) {
    console.log(err);
  }

  app.listen(3000, () => console.log('Listening on port 3000'));
};

start();
