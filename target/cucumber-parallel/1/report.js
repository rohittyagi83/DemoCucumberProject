$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/a/workspace/DemoCucumberProject/src/test/resources/functionalTests/amazon.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon search product feature file",
  "description": "",
  "id": "amazon-search-product-feature-file",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9820009682,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "create amazon account with excel data",
  "description": "",
  "id": "amazon-search-product-feature-file;create-amazon-account-with-excel-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user navigate to \"https://www.amazon.in\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "create an account with excel row \"1\" dataset-1",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Error message must be displayed from excel row \"1\" dataset-1",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.in",
      "offset": 18
    }
  ],
  "location": "amazonSteps.navigateToPage(String)"
});
formatter.result({
  "duration": 18730971150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    }
  ],
  "location": "amazonSteps.createAccount(String)"
});
formatter.result({
  "duration": 32300512864,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027Hello. Sign in\u0027)]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-7UVQLBH\u0027, ip: \u0027192.168.43.214\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\a\\AppData\\Local\\Te...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50747}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 74c141e581ead70adfafcff0df9b0ea8\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Hello. Sign in\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getCoordinates(Unknown Source)\r\n\tat org.openqa.selenium.interactions.internal.MouseAction.getActionLocation(MouseAction.java:66)\r\n\tat org.openqa.selenium.interactions.MoveMouseAction.perform(MoveMouseAction.java:43)\r\n\tat org.openqa.selenium.interactions.CompositeAction.perform(CompositeAction.java:34)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:643)\r\n\tat stepDefinitions.amazonSteps.createAccount(amazonSteps.java:94)\r\n\tat ✽.When create an account with excel row \"1\" dataset-1(C:/Users/a/workspace/DemoCucumberProject/src/test/resources/functionalTests/amazon.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 48
    }
  ],
  "location": "amazonSteps.verifyErrorMsg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1000935455,
  "status": "passed"
});
});