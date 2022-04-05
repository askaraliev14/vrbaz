import axios from "axios";
export const getMainCarousel = async () => {
  const response = await axios.get("/api/super-store/main-carousel");
  return response.data;
};
export const getFlashDeals = async () => {
  const response = await axios.get("/api/super-store/flash-deals");
  return response.data;
};
export const getTopCategories = async () => {
  const response = await axios.get("/api/super-store/top-categories");
  return response.data;
};
export const getBigDiscountList = async () => {
  const response = await axios.get("/api/super-store/big-discounts");
  return response.data;
};