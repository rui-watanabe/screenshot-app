import { Listener, Subjects, ScreenshotCreatedEvent } from "@imscreenshots/common";
import { Message } from "node-nats-streaming";
import { cloudinaryService } from "../../services/cloudinary-service";
import { natsService } from "../../services/nats-service";
import { takeScreenshot } from "../../services/screenshots-service";


export class ScreenshotCreatedEventListener extends Listener<ScreenshotCreatedEvent> {
  subject: Subjects.ScreenshotCreated = Subjects.ScreenshotCreated;

  async onMessage(data: ScreenshotCreatedEvent['data'], msg: Message) {
  };
};
