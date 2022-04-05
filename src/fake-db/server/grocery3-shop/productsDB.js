// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import Mock from "fake-db/mock";
import { grocery3offerProducts, topSailedProducts, grocery3Products } from "./grocery3Data";
Mock.onGet("/api/grocery3/top-sailed-products").reply(async () => {
  try {
    return [200, topSailedProducts];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/grocery3/all-products").reply(async () => {
  try {
    return [200, grocery3Products];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/grocery3/offer-products").reply(async () => {
  try {
    return [200, grocery3offerProducts];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});