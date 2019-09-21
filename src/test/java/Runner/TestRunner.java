package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)//run with JUnit
@CucumberOptions(features="features/Oracle.feature",glue="stepDefination", plugin= { "html:reports/cucumber-html-report" ,"json:target/cucumber.json"})//glue means where u have done step defination
public class TestRunner {

}
