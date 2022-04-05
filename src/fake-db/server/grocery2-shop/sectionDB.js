// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import Mock from "fake-db/mock";
import { carouselCardList, serviceList, shopByCategory } from "./grocery-data";
Mock.onGet("/api/grocery-section2/services").reply(async () => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    return [200, serviceList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/grocery-section3/shop-by-category").reply(() => {
  try {
    return [200, shopByCategory];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/grocery-section6/card-list").reply(() => {
  try {
    return [200, carouselCardList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});