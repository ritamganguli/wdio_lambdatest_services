describe("Proverbial APK", () => {
  it("Switches to Chrome and back to the app on the same page", async () => {
    await new Promise(resolve => setTimeout(resolve, 15000));
    const element = await $('//*[@text="Authenticator"]');
    await element.waitForDisplayed({ timeout: 30000 });
    await new Promise(resolve => setTimeout(resolve, 5000));
    await element.click();
    await new Promise(resolve => setTimeout(resolve, 15000));
    // await driver.pressKeyCode(3);
    await driver.startActivity("com.android.chrome", "com.google.android.apps.chrome.Main");
    const browser_serarch = await $('//*[@resource-id="com.android.chrome:id/search_box_text"]'); // Here you can interact with your web application and perform actions. Replace 'yourElementId' with the actual ID of the element you want to click.
    await browser_serarch.setValue('https://www.lambdatest.com/capabilities-generator/');
    await new Promise(resolve => setTimeout(resolve, 15000));
    await driver.activateApp("com.rbinternational.mobrix.mobrixshowcase");
    await driver.setOrientation("portrait");
    await new Promise(resolve => setTimeout(resolve, 15000));
    const element1 = await $('//*[@class="android.widget.Button" and ./preceding-sibling::*[@resource-id="uds_button_title"]]');
    await element1.waitForDisplayed({ timeout: 30000 });
    await element1.click();
    const contexts = await driver.getContexts();
    console.log(contexts);
    await new Promise(resolve => setTimeout(resolve, 15000));
    const contexts1 = await driver.getContexts();
    console.log(contexts1);

  });
});
