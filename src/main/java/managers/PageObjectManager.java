package managers;

import org.openqa.selenium.WebDriver;

import pageObjects.AmazonShoppingPage;
import pageObjects.GoogleSearchPage;
import pageObjects.SeleniumWebPage;

public class PageObjectManager {
	private WebDriver driver;
	
	
	private GoogleSearchPage googleSearch;
	private AmazonShoppingPage amazonShoppingPage;
	private SeleniumWebPage seleniumWebPage;
	
	public PageObjectManager(WebDriver driver) {
		this.driver = driver;
	}
	
	public GoogleSearchPage getGoogleSearchPage(){		 
		return (googleSearch == null) ? googleSearch = new GoogleSearchPage(driver) : googleSearch;
 
	}
	
	public AmazonShoppingPage getAmazonShoppingPage(){		 
		return (amazonShoppingPage == null) ? amazonShoppingPage = new AmazonShoppingPage(driver) : amazonShoppingPage;
 
	}
	
	public SeleniumWebPage getSeleniumWebPage(){		 
		return (seleniumWebPage == null) ? seleniumWebPage = new SeleniumWebPage(driver) : seleniumWebPage;
 
	}
}
