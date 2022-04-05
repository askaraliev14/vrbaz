import axios from "axios";
export const getGiftShopNavigation = async () => {
  const response = await axios.get("/api/gift-shop-navigation");
  return response.data;
};