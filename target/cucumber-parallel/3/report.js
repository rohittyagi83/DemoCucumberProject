$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/a/workspace/DemoCucumberProject/src/test/resources/functionalTests/test1.feature");
formatter.feature({
  "line": 1,
  "name": "Feature executed for Google Search for test1 file",
  "description": "",
  "id": "feature-executed-for-google-search-for-test1-file",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1699120,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Google search-99",
  "description": "",
  "id": "feature-executed-for-google-search-for-test1-file;google-search-99",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user navigate to google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user search for text \"www.seleniumhq.org\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "search content \"www.seleniumhq.org\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearchSteps.navigateToGoogleSearch()"
});
formatter.result({
  "duration": 217349795,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-7UVQLBH\u0027, ip: \u0027192.168.43.214\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\r\n\tat pageObjects.GoogleSearchPage.getURL(GoogleSearchPage.java:38)\r\n\tat stepDefinitions.GoogleSearchSteps.navigateToGoogleSearch(GoogleSearchSteps.java:47)\r\n\tat ✽.Given user navigate to google search page(C:/Users/a/workspace/DemoCucumberProject/src/test/resources/functionalTests/test1.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.seleniumhq.org",
      "offset": 22
    }
  ],
  "location": "GoogleSearchSteps.search(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "www.seleniumhq.org",
      "offset": 16
    }
  ],
  "location": "GoogleSearchSteps.verifySearchContent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1001441197,
  "status": "passed"
});
});