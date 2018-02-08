import { browser, by, element } from "protractor";

export class NgPackagedPage {
  navigateTo(): any {
    return browser.get("/");
  }

  getParagraphText(): any {
    return element(by.css("app-root h1")).getText();
  }
}
