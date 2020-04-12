"use strict";

const { loadApp } = require("../../lib");
const { expect } = require("chai");
const path = require("path");
let yamlConfig;

describe("loadApp() with reference to yaml config files that have nested references", () => {

  beforeEach(async () => {
    const relativePath = "../fixtures/integration-apps/carrier-yaml-app";
    const appPath = path.join(__dirname, relativePath);
    yamlConfig = await loadApp(appPath);
  });

  it("should properly dereference a config file", () => {
    expect(yamlConfig.id).to.be.a("string");

    expect(yamlConfig.name).to.equal("My Carrier");
    expect(yamlConfig.description).to.equal("My Carrier description goes here");
    expect(yamlConfig.websiteURL.href).to.equal("https://www.my-carrier.com/");
    expect(yamlConfig.logo.colorSVG).to.be.a("string");
    expect(yamlConfig.logo.colorSVG).to.be.contain("<svg");

    expect(yamlConfig.logo.blackAndWhiteSVG).to.be.a("string");
    expect(yamlConfig.logo.blackAndWhiteSVG).to.be.contain("<svg");


    expect(yamlConfig.deliveryServices).to.be.an("array");
    expect(yamlConfig.deliveryServices).to.be.an("array").with.lengthOf(1);
    expect(yamlConfig.deliveryServices[0].name).to.equal("Priority Overnight");

    expect(yamlConfig.deliveryServices[0].deliveryConfirmations[0].name).to.equal("Adult Signature");

    expect(yamlConfig.deliveryServices[0].packaging[0].name).to.equal("Flat-Rate Box");
    expect(yamlConfig.deliveryServices[0].packaging[1].name).to.equal("Large Padded Envelope");

    expect(yamlConfig.pickupServices).to.be.an("array");
    expect(yamlConfig.pickupServices).to.be.an("array").with.lengthOf(2);
    expect(yamlConfig.pickupServices[0].name).to.equal("Drop Off Pickup");
    expect(yamlConfig.pickupServices[1].name).to.equal("One Time Pickup");

    expect(yamlConfig.loginForm).to.be.an("object");
    expect(yamlConfig.loginForm.dataSchema.title).to.equal("Carrier One Registration");

    expect(yamlConfig.settingsForm).to.be.an("object");
    expect(yamlConfig.settingsForm.dataSchema.title).to.equal("Carrier One Settings");

    expect(yamlConfig.login).to.be.a("function");
    expect(yamlConfig.requestPickup).to.equal(undefined);
    expect(yamlConfig.cancelPickup).to.equal(undefined);
    expect(yamlConfig.createLabel).to.equal(undefined);
    expect(yamlConfig.voidLabel).to.equal(undefined);
    expect(yamlConfig.getRates).to.equal(undefined);
    expect(yamlConfig.getTrackingUrl).to.equal(undefined);
    expect(yamlConfig.track).to.equal(undefined);
    expect(yamlConfig.createManifest).to.equal(undefined);
  });

});
