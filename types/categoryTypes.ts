export type Duty = "ALL" | "DEV" | "MARKET" | "DESIGN" | "PLAN";
export type DevDetailDuty = "ALL" | "FE" | "BE" | "IOS" | "ANDROID" | "ETC";

export type Category = {
  duty: Duty;
  detailDuty?: DevDetailDuty;
};
