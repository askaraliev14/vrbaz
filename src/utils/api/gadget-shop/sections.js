import axios from "axios";
export const getFeaturedCategories = async () => {
  const response = await axios.get("/api/gadget-store/featured-categories");
  return response.data;
};
export const getTwoBanner = async () => {
  const response = await axios.get("/api/gadget-store/two-banners");
  return response.data;
};
export const getBlogLists = async () => {
  const response = await axios.get("/api/gadget-store/blog-lists");
  return response.data;
};