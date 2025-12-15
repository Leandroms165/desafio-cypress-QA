// selectors
const commonSelectors = {
    
}


class CommonPage {

   clicarNoMenu(menu, index = 1) {
    const xpath = `(//a[contains(normalize-space(.),'${menu}')])[${index}]`;
    cy.xpath(xpath).click();
  }

}

module.exports = new CommonPage();