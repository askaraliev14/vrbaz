import axios from "axios";
export const getMainCarousel = async () => {
  const response = await axios.get("/api/vrbaz-shop/main-carousel");
  return response.data;
};
export const getFlashDeals = async () => {
  const response = await axios.get("/api/vrbaz-shop/flash-deals");
  return response.data;
};
export const getTopCategories = async () => {
  const response = await axios.get("/api/vrbaz-shop/top-categories");
  return response.data;
};
export const getBigDiscountList = async () => {
  const response = await axios.get("/api/vrbaz-shop/big-discounts");
  return response.data;
};