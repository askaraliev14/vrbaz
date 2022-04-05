import Mock from "fake-db/mock";
import { giftShopNavigation } from "./giftShopData";
Mock.onGet("/api/gift-shop-navigation").reply(() => {
  try {
    return [200, giftShopNavigation];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});