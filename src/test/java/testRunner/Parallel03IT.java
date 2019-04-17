package testRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        strict = true,
        features = {"C:/Users/a/workspace/DemoCucumberProject/src/test/resources/functionalTests/test1.feature"},
        plugin = {"com.cucumber.listener.ExtentCucumberFormatter:C:/Users/a/workspace/DemoCucumberProject/target/cucumber-parallel/3.html", "json:C:/Users/a/workspace/DemoCucumberProject/target/cucumber-parallel/3.json", "html:C:/Users/a/workspace/DemoCucumberProject/target/cucumber-parallel/3"},
        monochrome = true,
        tags = {"@sanity"},
        glue = {"stepDefinitions"})
public class Parallel03IT extends AbstractTestNGCucumberTests {
}
