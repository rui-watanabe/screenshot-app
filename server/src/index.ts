import { ScreenshotCreatedEventListener } from "./events/listeners/screenshot-listener-created";
import { cloudinaryService } from "./services/cloudinary-service";
import { natsService } from "./services/nats-service";

const start = async () => {
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

    cloudinaryService.connect();

    new ScreenshotCreatedEventListener(natsService.client).listen();
  }
  catch(err) {
    console.log(err);
  }
};

start();