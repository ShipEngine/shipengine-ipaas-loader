"use strict";

import { ShippingProviderConfig } from "@shipengine/ipaas";

/** Test Shipping Provider */
const config: ShippingProviderConfig = {

  type: "shipping_provider",
  id: "d54ea601-9374-425c-8732-1f9eae4eae18",
  name: "My Carrier",
  description: "My Carrier description goes here",
  websiteURL: "https://www.my-carrier.com",
  logo: {
    blackAndWhiteSVG: "../../../logo.svg",
    colorSVG: "../../../logo.svg"
  },

  loginForm: "../../../configs/forms/registration-form.json",
  settingsForm: "../../../configs/forms/settings-form.json",

  carriers: "../../../modules/carrier/carriers.ts",

  login: "../../../modules/methods/login.js",
  requestPickup: "../../../modules/methods/requestPickup.js",
  cancelPickup: "../../../modules/methods/cancelPickup.js",

  createLabel: "../../../modules/methods/createLabel.js",
  voidLabel: "../../../modules/methods/voidLabel.js",
  getRates: "../../../modules/methods/getRates.js",
  getTrackingUrl: "../../../modules/methods/getTrackingUrl.js",
  track: "../../../modules/methods/track.js",
  createManifest: "../../../modules/methods/createManifest.js"

};

// tslint:disable-next-line: no-default-export
export default config;
