package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import static org.junit.Assert.assertEquals;

import java.util.List;
import java.util.Map;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginRun {
	WebDriver driver;
	@Given("Chrome is opened & Login Page is displayed")
	public void chrome_is_opened_Login_Page_is_displayed() {
		System.setProperty("webdriver.chrome.driver" ,".//driver//chromedriver.exe");
		driver=new ChromeDriver();
		  driver.get("http://127.0.0.1:8080/htmldb");
	}

	@When("User enters {string} and {string}")
	public void user_enters_Username_and_Password(String string1,String string2) {
		driver.findElement(By.xpath("//*[@type='text']")).sendKeys(string1);
		driver.findElement(By.xpath("//*[@type='password']")).sendKeys(string2);
	}

	@When("Click on Login button")
	public void click_on_Login_button() {
		driver.findElement(By.xpath("//*[@type='BUTTON']")).click();
	}

	@Then("Home Page should display")
	public void home_Page_should_display() {
		assertEquals("Login Failed","Oracle",driver.getTitle());
	
	}

	@Then("User click on Administration and then on Manage Administration and Database Users")
	public void user_click_on_Administration_and_then_on_Manage_Administration_and_Database_Users() {
	   driver.findElement(By.xpath("/html/body/form/div[7]/table/tbody/tr/td[1]/div/div[1]/a[1]/img")).click();
	   driver.findElement(By.xpath("/html/body/form/div[7]/table/tbody/tr/td[1]/div/div[3]/a[1]/img")).click();
	   
	}

	@Then("Click on create button")
	public void click_on_create_button() {
		driver.findElement(By.xpath("/html/body/form/div[7]/table/tbody/tr/td[1]/table[1]/tbody/tr/td[2]/input")).click();
	}
	
	
	
	@Then("User enters following details")
	public void user_enters_following_details(io.cucumber.datatable.DataTable dataTable) {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
	    // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
	    // Double, Byte, Short, Long, BigInteger or BigDecimal.
	    //
	    // For other transformations you can register a DataTableType.
		
		List<List<String>> d=dataTable.asLists();
    List<Map<String,String>>data=dataTable.asMaps();
	driver.findElement(By.xpath("//*[@name='p_t01']")).sendKeys(d.get(1).get(0));
	driver.findElement(By.xpath("//*[@name='p_t02']")).sendKeys(d.get(1).get(1));
	driver.findElement(By.xpath("//*[@name='p_t03']")).sendKeys(d.get(1).get(2));
	driver.findElement(By.xpath("/html/body/form/div[7]/table/tbody/tr/td[1]/table[1]/thead/tr/th[2]/input[2]")).click();
	}

	/*@Then("User enters Username and Password and Confirm Password and click on Create")
	public void user_enters_Username_and_Password_and_Confirm_Password_and_click_on_Create() {
		driver.findElement(By.xpath("//*[@name='p_t01']")).sendKeys("ggg");
		driver.findElement(By.xpath("//*[@name='p_t02']")).sendKeys("g123");
		driver.findElement(By.xpath("//*[@name='p_t03']")).sendKeys("g123");
		driver.findElement(By.xpath("/html/body/form/div[7]/table/tbody/tr/td[1]/table[1]/thead/tr/th[2]/input[2]")).click();
	  	}*/



	
	
}
