import { Publisher, Subjects, ScreenshotFinishedEvent } from "@imscreenshots/common";

export class ScreenshotFinished extends Publisher<ScreenshotFinishedEvent> {
  subject: Subjects.ScreenshotFinished = Subjects.ScreenshotFinished;
};