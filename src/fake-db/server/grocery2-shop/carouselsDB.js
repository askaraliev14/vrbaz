// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import Mock from "fake-db/mock";
import bazarReactDatabase from "data/bazar-react-database";
import { testimonialList } from "./grocery-data";
const section4Data = bazarReactDatabase.slice(179, 188);
Mock.onGet("/api/grocery-section4/products").reply(async () => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    return [200, section4Data];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
const section5Data = bazarReactDatabase.slice(229, 241);
Mock.onGet("/api/grocery-section5/products").reply(() => {
  try {
    return [200, section5Data];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
const section7Data = bazarReactDatabase.slice(190, 199);
Mock.onGet("/api/grocery-section7/products").reply(() => {
  try {
    return [200, section7Data];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
const section8Data = bazarReactDatabase.slice(197, 206);
Mock.onGet("/api/grocery-section8/products").reply(() => {
  try {
    return [200, section8Data];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
Mock.onGet("/api/grocery-section9/testimonial-list").reply(() => {
  try {
    return [200, testimonialList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});