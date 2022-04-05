// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import Mock from "fake-db/mock";
import { grocery1ServiceList } from "./grocery1Data";
Mock.onGet("/api/grocery1/services").reply(async () => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    return [200, grocery1ServiceList];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});