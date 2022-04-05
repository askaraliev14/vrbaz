import Mock from "fake-db/mock";
import { grocery1Navigation } from "./grocery1Data";
Mock.onGet("/api/grocery1/navigation").reply(() => {
  try {
    return [200, grocery1Navigation];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});