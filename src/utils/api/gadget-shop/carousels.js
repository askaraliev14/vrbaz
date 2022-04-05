import axios from "axios";
export const getMainCarousel = async () => {
  const response = await axios.get("/api/gadget-store/main-carousel");
  return response.data;
};
export const getTopPicksList = async () => {
  const response = await axios.get("/api/gadget-store/top-picks-list");
  return response.data;
};
export const getMostViewedList = async () => {
  const response = await axios.get("/api/gadget-store/most-viewed");
  return response.data;
};