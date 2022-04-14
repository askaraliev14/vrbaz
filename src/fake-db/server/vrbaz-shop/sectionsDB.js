// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT askaraliev1499@gmail.com
import bazarReactDatabase from "data/bazar-react-database";
import Mock from "fake-db/mock";
import { bottomCategoryList, carBrandList, mobileBrandList, mobileShopList, newArrivalsList, opticsBrandList, opticsShopList, serviceList, topRatedBrandList, topRatedList } from "./super-store-data";
Mock.onGet("/api/vrvaz-shop/toprated-product").reply(async () => {
  try {
    return [200, topRatedList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/vrvaz-shop/toprated-brand").reply(async () => {
  try {
    return [200, topRatedBrandList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/vrvaz-shop/new-arrivals").reply(async () => {
  try {
    return [200, newArrivalsList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/vrvaz-shop/car-brand-list").reply(async () => {
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
Mock.onGet("/api/vrvaz-shop/car-list").reply(async () => {
  try {
    return [200, cartList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/vrvaz-shop/mobile-brand-list").reply(async () => {
  try {
    return [200, mobileBrandList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/vrvaz-shop/mobile-shop-list").reply(async () => {
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
Mock.onGet("/api/vrvaz-shop/mobile-list").reply(async () => {
  try {
    return [200, mobileData];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/vrvaz-shop/optics/watch-brands").reply(async () => {
  try {
    return [200, opticsBrandList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/vrvaz-shop/optics/watch-shops").reply(async () => {
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
Mock.onGet("/api/vrvaz-shop/optics-list").reply(async () => {
  try {
    return [200, opticsData];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/vrvaz-shop/bottom-categories").reply(async () => {
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
Mock.onGet("/api/vrvaz-shop/get-more-items").reply(async () => {
  try {
    return [200, moreData];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/vrvaz-shop/get-service-list").reply(async () => {
  try {
    return [200, serviceList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});