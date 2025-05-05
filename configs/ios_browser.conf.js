import { config as base_appium_configs } from "./base_appium.conf.js";

export const config = {
    ...base_appium_configs,

    // ============
    // Specs
    // ============
    specs: ["../test/specs/**/login.test.js"],

    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
    capabilities: [
        {
            // The defaults you need to have in your config
            browserName: "safari",
            platformName: "iOS",
            "wdio:maxInstances": 1,
            // For W3C the appium capabilities need to have an extension prefix
            // This is `appium:` for all Appium Capabilities which can be found here
            // http://appium.io/docs/en/writing-running-appium/caps/

            //
            // NOTE: Change this name according to the Simulator you have created on your local machine
            "appium:deviceName": "iPhone 16",
            //
            // NOTE: Change this version according to the Simulator Version you have created on your local machine
            "appium:udid": "EDE09831-E1D0-40B1-801F-7F17E7C37760",
            "appium:platformVersion": "18.4",
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "XCUITest",
            "appium:newCommandTimeout": 240,
        },
    ],
};