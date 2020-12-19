import { Publisher, Subjects, ScreenshotFinishedEvent } from '@imscreenshots/common';
import { Message } from 'node-nats-streaming';
import { Screenshot } from '../../models/screenshot';

export class ScreenshotFinishedEventPublisher extends Publisher<ScreenshotFinishedEvent> {
  subject: Subjects.ScreenshotFinished = Subjects.ScreenshotFinished;

  async onMessage(data: ScreenshotFinishedEvent['data'], msg: Message) {
    const screenshot = await Screenshot.findById(data.id);
    if(!screenshot) {
      throw new Error('Screenshot not found')
    }

    screenshot.set({
      cloudinary_id: data.cloudinary_id,
      cloudinary_url: data.cloudinary_url,
      cloudinary_version: data.cloudinary_version,
      width: data.width,
      height: data.height,
      bytes: data.bytes,
      format: data.format
    });

    screenshot.save();
  };
};