import { Publisher, Subjects, ScreenshotCreatedEvent } from '@imscreenshots/common';

export class ScreenshotCreatedEventPublisher extends Publisher<ScreenshotCreatedEvent> {
  subject: Subjects.ScreenshotCreated = Subjects.ScreenshotCreated;
};