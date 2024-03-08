exports.config = {
  user: process.env.LT_USERNAME || "ritamg",
  key: process.env.LT_ACCESS_KEY || "acess_ky",
  logFile : './logDir/api.log',
  product : 'appAutomation',
  services: [
        ['lambdatest', {
            tunnel: false,
            //app_upload: true,
            app:{
              app_name : "ritam", //provide your desired app name
              app_path : "proverbial_ios.ipa", //provide the local app location
              custom_id : "12345", //provide your desired custom id
              enableCapability : true
          }
        }]
    ],



  updateJob: false,
  specs: ["./../specs/android-test.js"],
  exclude: [],

  capabilities: [
    {
      "LT:Options": {
        deviceName: ".*",
        name: "ios_ltOptions",
        isRealMobile: true,
        app: process.env.LT_APP_ID||"lt://APP1016029691707325023010601",
        platformName: "ios",
        // enableCustomTranslation: true,
        // tunnel: true,
      }
    },
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "https://mobile-hub.lambdatest.com",
  waitforTimeout: 100000000,
  connectionRetryTimeout: 90000000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: "mobile-hub.lambdatest.com",
  port: 80,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 20000000,
  },
};

exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
