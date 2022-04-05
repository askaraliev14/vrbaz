// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import Mock from "fake-db/mock";
import { topNewProducts, healthBeautyProducts } from "./healthBeautyData";
Mock.onGet("/api/healthbeauty/top-new-products").reply(async () => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    return [200, topNewProducts];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/healthbeauty/all-products").reply(async () => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    return [200, healthBeautyProducts];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});