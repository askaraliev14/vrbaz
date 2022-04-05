import axios from "axios";
export const getPopularProducts = async () => {
  const response = await axios.get("/api/gift-shop/popular-products");
  return response.data;
};
export const getTopSailedProducts = async () => {
  const response = await axios.get("/api/gift-shop/top-sailed-products");
  return response.data;
};
export const getGiftShopProducts = async () => {
  const response = await axios.get("/api/gift-shop/all-products");
  return response.data;
};