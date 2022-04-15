// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT askaraliev1499@gmail.com
import bazarReactDatabase from "data/bazar-react-database";
import Mock from "fake-db/mock";
import { bottomCategoryList, carBrandList, mobileBrandList, mobileShopList, newArrivalsList, opticsBrandList, opticsShopList, serviceList, topRatedBrandList, topRatedList } from "./super-store-data";
Mock.onGet("/api/vrbaz-shop/toprated-product").reply(async () => {
  try {
    return [200, topRatedList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/vrbaz-shop/toprated-brand").reply(async () => {
  try {
    return [200, topRatedBrandList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/vrbaz-shop/new-arrivals").reply(async () => {
  try {
    return [200, newArrivalsList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/vrbaz-shop/car-brand-list").reply(async () => {
  try {
    return [200, carBrandList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
const cartList = bazarReactDatabase.slice(0, 6);
Mock.onGet("/api/vrbaz-shop/car-list").reply(async () => {
  try {
    return [200, cartList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/vrbaz-shop/mobile-brand-list").reply(async () => {
  try {
    return [200, mobileBrandList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/vrbaz-shop/mobile-shop-list").reply(async () => {
  try {
    return [200, mobileShopList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
const mobileData = bazarReactDatabase.slice(81, 90);
Mock.onGet("/api/vrbaz-shop/mobile-list").reply(async () => {
  try {
    return [200, mobileData];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/vrbaz-shop/optics/watch-brands").reply(async () => {
  try {
    return [200, opticsBrandList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/vrbaz-shop/optics/watch-shops").reply(async () => {
  try {
    return [200, opticsShopList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
const opticsData = bazarReactDatabase.slice(95, 104);
Mock.onGet("/api/vrbaz-shop/optics-list").reply(async () => {
  try {
    return [200, opticsData];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/vrbaz-shop/bottom-categories").reply(async () => {
  try {
    return [200, bottomCategoryList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
const moreData = bazarReactDatabase.slice(48, 60);
Mock.onGet("/api/vrbaz-shop/get-more-items").reply(async () => {
  try {
    return [200, moreData];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/vrbaz-shop/get-service-list").reply(async () => {
  try {
    return [200, serviceList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});