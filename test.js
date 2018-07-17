describe("Go to the Homepage ", function(){
   browser.ignoreSynchronization=true; // This allows to protractor to run on regular website, not specific to angular 
   
  it("Go to the Home page ", function(){
    browser.get("https://www.google.com/"); // Go to a specific URL
    console.log("Home Page Open succesffully") // Log a message
  });
   
    // From the Home Page go to the  Pendant Page 
  it("Go to Pendants Page ", function(){
    var pendants = element(by.css("#gbw > div > div > div.gb_me.gb_R.gb_Ng.gb_Dg > div:nth-child(1) > a")); // set a variable for action
    pendants.click(); // Click on choosen element
   // browser.sleep(1000) // Tell Protractor to Wait for 5000 miliseconds or 5 seconds
    console.log("From the Home Page go to the Pendant Page "); 
    element(by.css("body > main > section > div.hero_home__wrap.ng-isolate-scope > div.hero_home__copy > a.hero_home__link__desktop")).click(); // Go the element and Click
    // browser.sleep(1000)
    console.log("Go to a specific Product Page");
   // browser.sleep(1000)
    browser.navigate().back(); // Tell the browser to go back 
  });

});