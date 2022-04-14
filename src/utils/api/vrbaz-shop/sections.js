import axios from "axios";
export const getTopRatedProduct = async () => {
  const response = await axios.get("/api/vrbaz-shop/toprated-product");
  return response.data;
};
export const getTopRatedBrand = async () => {
  const response = await axios.get("/api/vrbaz-shop/toprated-brand");
  return response.data;
};
export const getNewArrivalList = async () => {
  const response = await axios.get("/api/vrbaz-shop/new-arrivals");
  return response.data;
};
export const getCarBrands = async () => {
  const response = await axios.get("/api/vrbaz-shop/car-brand-list");
  return response.data;
};
export const getCarList = async () => {
  const response = await axios.get("/api/vrbaz-shop/car-list");
  return response.data;
};
export const getMobileBrands = async () => {
  const response = await axios.get("/api/vrbaz-shop/mobile-brand-list");
  return response.data;
};
export const getMobileShops = async () => {
  const response = await axios.get("/api/vrbaz-shop/mobile-shop-list");
  return response.data;
};
export const getMobileList = async () => {
  const response = await axios.get("/api/vrbaz-shop/mobile-list");
  return response.data;
};
export const getOpticsBrands = async () => {
  const response = await axios.get("/api/vrbaz-shop/optics/watch-brands");
  return response.data;
};
export const getOpticsShops = async () => {
  const response = await axios.get("/api/vrbaz-shop/optics/watch-shops");
  return response.data;
};
export const getOpticsList = async () => {
  const response = await axios.get("/api/vrbaz-shop/optics-list");
  return response.data;
};
export const getCategories = async () => {
  const response = await axios.get("/api/vrbaz-shop/bottom-categories");
  return response.data;
};
export const getMoreItems = async () => {
  const response = await axios.get("/api/vrbaz-shop/get-more-items");
  return response.data;
};
export const getServiceList = async () => {
  const response = await axios.get("/api/vrbaz-shop/get-service-list");
  return response.data;
};