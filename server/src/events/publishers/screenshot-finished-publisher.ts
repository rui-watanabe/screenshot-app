import { Publisher, Subjects, ScreenshotFinishedEvent } from "@imscreenshots/common";

export class ScreenshotFinishedPublisher extends Publisher<ScreenshotFinishedEvent> {
  subject: Subjects.ScreenshotFinished = Subjects.ScreenshotFinished;
};