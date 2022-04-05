import Mock from "fake-db/mock";
import { furnitureShopNavigation } from "./furnitureShopData";
Mock.onGet("/api/furniture-shop/navigation").reply(() => {
  try {
    return [200, furnitureShopNavigation];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});