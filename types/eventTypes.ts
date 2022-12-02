import { Category } from "types/categoryTypes";

export interface Event {
  _id: string;
  title: string;
  category?: Category;
  eventType?: "ONLINE" | "OFFLINE";
  cost?: number;
  description?: string;
  thumbnail?: string;
  host: string;
  startDate: string;
  endDate: string;
  outlink?: string;
}
