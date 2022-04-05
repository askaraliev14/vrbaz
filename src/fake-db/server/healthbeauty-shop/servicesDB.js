// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import Mock from "fake-db/mock";
import { healthBeautyServices } from "./healthBeautyData";
Mock.onGet("/api/healthbeauty/services").reply(() => {
  try {
    return [200, healthBeautyServices];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});