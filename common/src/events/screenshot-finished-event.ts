import { Subjects } from "./subjects";

export interface ScreenshotCreatedEvent {
  subject: Subjects.ScreenshotFinished,
  data: {
    id: String;
    cloudinary_url: string;
    cloudinary_id: string;
    cloudinary_version: string;
    width: number;
    height: number;
    bytes: number;
    format: string;
  }
};