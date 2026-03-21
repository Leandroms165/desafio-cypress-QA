// selectors
const commonSelectors = {
    conecteSe:'//section[@id="top_header"] //a[@href="/login" and contains(.,"Conecte-se")]',
}


class CommonPage {

  clicarEmConecte (){
    cy.xpath(xpath).click();
  }

}

module.exports = new CommonPage();