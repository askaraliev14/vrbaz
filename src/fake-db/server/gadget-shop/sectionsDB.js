// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import Mock from "fake-db/mock";
import { blogsList, bannerData, featuredCategories } from "./gadget-store-data";
Mock.onGet("/api/gadget-store/featured-categories").reply(async () => {
  try {
    return [200, featuredCategories];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/gadget-store/two-banners").reply(async () => {
  try {
    return [200, bannerData];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/gadget-store/blog-lists").reply(async () => {
  try {
    return [200, blogsList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});