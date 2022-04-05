import axios from "axios";
export const getGiftShopServiceList = async () => {
  const response = await axios.get("/api/gift-shop/service-list");
  return response.data;
};
export const getGiftShopTopCategories = async () => {
  const response = await axios.get("/api/gift-shop/top-categories");
  return response.data;
};