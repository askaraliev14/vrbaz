// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import Mock from "fake-db/mock";
import { serviceList, trendingItems, flashDealsData, newArrivalsList } from "./fashion-store-data";
Mock.onGet("/api/fashion-store/flash-deals").reply(async () => {
  try {
    return [200, flashDealsData];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/fashion-store/new-arrivals").reply(() => {
  try {
    return [200, newArrivalsList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/fashion-store/trending-items").reply(() => {
  try {
    return [200, trendingItems];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/fashion-store/service-list").reply(() => {
  try {
    return [200, serviceList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});