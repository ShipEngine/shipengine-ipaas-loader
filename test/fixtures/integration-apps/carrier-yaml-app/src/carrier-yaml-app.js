"use strict";

const config = {

  type: "shipping_provider",
  name: "My Carrier",
  description: "My Carrier description goes here",
  websiteURL: "https://www.my-carrier.com",
  logo: {
    blackAndWhiteSVG: "../../../logo.svg",
    colorSVG: "../../../logo.svg"
  },

  deliveryServices: ["../../../configs/delivery-services/priority-overnight.yaml"],
  pickupServices: ["../../../configs/pickup-services/drop-off.yaml", "../../../configs/pickup-services/one-time.yaml"],

  loginForm: "../../../configs/forms/registration-form.json",
  settingsForm: "../../../configs/forms/settings-form.json",

  login: "../../../modules/methods/login.js",
  requestPickup () { },
  cancelPickup () { },

  createLabel () { },
  voidLabel () { },
  getRates () { },
  getTrackingUrl () { },
  track () { },
  createManifest () { }
};

module.exports = config;