import Mock from "fake-db/mock";
import { popularProducts, topSailedProducts, giftShopProducts } from "./giftShopData";
Mock.onGet("/api/gift-shop/popular-products").reply(() => {
  try {
    return [200, popularProducts];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/gift-shop/top-sailed-products").reply(() => {
  try {
    return [200, topSailedProducts];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/gift-shop/all-products").reply(() => {
  try {
    return [200, giftShopProducts];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});