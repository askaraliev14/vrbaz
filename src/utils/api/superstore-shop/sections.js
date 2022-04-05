import axios from "axios";
export const getTopRatedProduct = async () => {
  const response = await axios.get("/api/super-store/toprated-product");
  return response.data;
};
export const getTopRatedBrand = async () => {
  const response = await axios.get("/api/super-store/toprated-brand");
  return response.data;
};
export const getNewArrivalList = async () => {
  const response = await axios.get("/api/super-store/new-arrivals");
  return response.data;
};
export const getCarBrands = async () => {
  const response = await axios.get("/api/super-store/car-brand-list");
  return response.data;
};
export const getCarList = async () => {
  const response = await axios.get("/api/super-store/car-list");
  return response.data;
};
export const getMobileBrands = async () => {
  const response = await axios.get("/api/super-store/mobile-brand-list");
  return response.data;
};
export const getMobileShops = async () => {
  const response = await axios.get("/api/super-store/mobile-shop-list");
  return response.data;
};
export const getMobileList = async () => {
  const response = await axios.get("/api/super-store/mobile-list");
  return response.data;
};
export const getOpticsBrands = async () => {
  const response = await axios.get("/api/super-store/optics/watch-brands");
  return response.data;
};
export const getOpticsShops = async () => {
  const response = await axios.get("/api/super-store/optics/watch-shops");
  return response.data;
};
export const getOpticsList = async () => {
  const response = await axios.get("/api/super-store/optics-list");
  return response.data;
};
export const getCategories = async () => {
  const response = await axios.get("/api/super-store/bottom-categories");
  return response.data;
};
export const getMoreItems = async () => {
  const response = await axios.get("/api/super-store/get-more-items");
  return response.data;
};
export const getServiceList = async () => {
  const response = await axios.get("/api/super-store/get-service-list");
  return response.data;
};