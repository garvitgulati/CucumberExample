$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/Oracle.feature");
formatter.feature({
  "name": "Oracle Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To Check Login Functionally with Valid Username and valid Password.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Chrome is opened \u0026 Login Page is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginRun.chrome_is_opened_Login_Page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"sys\" and \"Newuser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginRun.user_enters_Username_and_Password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginRun.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home Page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginRun.home_Page_should_display()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d77.0.3865.90)\n  (Driver info: chromedriver\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027INFVA05986\u0027, ip: \u0027192.168.100.218\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.44.609538 (b655c5a60b0b54..., userDataDir: C:\\Users\\vshadmin\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:55632}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 77.0.3865.90, webStorageEnabled: true}\nSession ID: ad5a40c1d260b68e703c12a33875a166\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat stepDefination.LoginRun.home_Page_should_display(LoginRun.java:37)\r\n\tat ✽.Home Page should display(file:features/Oracle.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on Administration and then on Manage Administration and Database Users",
  "keyword": "And "
});
formatter.match({
  "location": "LoginRun.user_click_on_Administration_and_then_on_Manage_Administration_and_Database_Users()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on create button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginRun.click_on_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters following details",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "CPassword"
      ]
    },
    {
      "cells": [
        "demo1",
        "demo1231",
        "demo1231"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginRun.user_enters_following_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
});