package testRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        strict = true,
        features = {"C:/Users/a/workspace/DemoCucumberProject/src/test/resources/functionalTests/amazon.feature"},
        plugin = {"com.cucumber.listener.ExtentCucumberFormatter:C:/Users/a/workspace/DemoCucumberProject/target/cucumber-parallel/1.html", "json:C:/Users/a/workspace/DemoCucumberProject/target/cucumber-parallel/1.json", "html:C:/Users/a/workspace/DemoCucumberProject/target/cucumber-parallel/1"},
        monochrome = true,
        tags = {"@sanity"},
        glue = {"stepDefinitions"})
public class Parallel01IT extends AbstractTestNGCucumberTests {
}
