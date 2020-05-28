"use strict";

const config: OrderAppDefinition = {

  name: "My Order",
  description: "My Order description goes here",
  websiteURL: "https://www.my-order.com",
  logo: "../../../../logo.svg",

  connectionForm: "../../../../configs/forms/registration-form.json",
  settingsForm: "../../../../configs/forms/settings-form.json",

  connect: "../../../../modules/methods/login.js",
  getSeller: "../../../../modules/methods/get-seller.js",
  getSalesOrder: "../../../../modules/methods/get-sales-order.js",
  getSalesOrdersByDate: "../../../../modules/methods/get-sales-orders-by-date.js",

};

// tslint:disable-next-line: no-default-export
export default config;
