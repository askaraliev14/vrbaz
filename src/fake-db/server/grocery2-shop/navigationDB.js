import { grocery2Navigations } from "./grocery-data";
import Mock from "fake-db/mock";
Mock.onGet("/api/grocery-navigation").reply(() => {
  try {
    return [200, grocery2Navigations];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});