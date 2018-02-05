import{Config, browser} from "protractor";
//const { Config} = require('protractor') 


const config : Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.ts'],

    SELENIUM_PROMISE_MANAGER: false,

    onPrepare() {
      browser.waitForAngularEnabled(false);
    }

  };

  exports.config = config;