export interface Category {
  step1: string; // TODO
  step2?: string; // TODO
}

export interface Event {
  _id: string;
  title: string;
  category: Category;
  eventType: string; // TODO
  cost: number;
  description: string;
  thumbnail?: string;
  host: string;
  startDate: string;
  endDate: string;
  outlink?: string;
}
