const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.sleep(3000);
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("button turns orange on hover", async () => {
    const btn = await driver.findElement(By.id("draw"));

    await btn.hover();
    const hoverColor = await btn.getCssValue("color");
    expect(hoverColor).toBe("#F6921E");
  });

  test("add to duo button", async () => {
    const firstRobotBtn = await driver.findElement(
      By.xpath('//*[@id="choices"]/div[1]/button')
    );

    await firstRobotBtn.click();

    const playerDiv = await driver
      .findElement(By.id("player-duo"))
      .isDisplayed();

    expect(playerDiv).toBe(true);
  });
});
