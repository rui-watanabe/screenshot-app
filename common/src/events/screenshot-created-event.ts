import { Subjects } from "./subjects"

export interface ScreenshotCreatedEvent {
  subject: Subjects.ScreenshotCreated,
  data: {
    id: String;
    url: String;
  }
};

