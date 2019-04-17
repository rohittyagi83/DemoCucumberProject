$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/a/workspace/DemoCucumberProject/src/test/resources/functionalTests/selenium.feature");
formatter.feature({
  "line": 1,
  "name": "Selenium ORG feature file",
  "description": "",
  "id": "selenium-org-feature-file",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8073970687,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Browse content for selenium",
  "description": "",
  "id": "selenium-org-feature-file;browse-content-for-selenium",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user navigate to \"https://www.seleniumhq.org\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user search click on download tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "verify the download version section should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.seleniumhq.org",
      "offset": 18
    }
  ],
  "location": "amazonSteps.navigateToPage(String)"
});
formatter.result({
  "duration": 16803987616,
  "status": "passed"
});
formatter.match({
  "location": "SeleniumSteps.search()"
});
formatter.result({
  "duration": 3820055877,
  "status": "passed"
});
formatter.match({
  "location": "SeleniumSteps.verifySearchProduct()"
});
formatter.result({
  "duration": 2795940493,
  "status": "passed"
});
formatter.after({
  "duration": 29721829294,
  "status": "passed"
});
});