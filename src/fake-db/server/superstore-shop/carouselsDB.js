// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import bazarReactDatabase from "data/bazar-react-database";
import Mock from "fake-db/mock";
import { mainCarouselData, topCategoryList, flashDealsData } from "./super-store-data";
Mock.onGet("/api/super-store/main-carousel").reply(async () => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    return [200, mainCarouselData];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/super-store/flash-deals").reply(async () => {
  try {
    return [200, flashDealsData];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/super-store/top-categories").reply(async () => {
  try {
    return [200, topCategoryList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
const bigDiscountList = bazarReactDatabase.slice(60, 69);
Mock.onGet("/api/super-store/big-discounts").reply(async () => {
  try {
    return [200, bigDiscountList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});