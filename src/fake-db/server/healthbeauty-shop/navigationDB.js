import Mock from "fake-db/mock";
import { healthBeautyNavigation } from "./healthBeautyData";
Mock.onGet("/api/healthbeauty/navigation").reply(() => {
  try {
    return [200, healthBeautyNavigation];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});