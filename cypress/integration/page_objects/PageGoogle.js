class PageGoogle{

    getSearchBarElem() {return cy.get('input[name="q"]')}
    getResultsElem() {return cy.get('#result-stats')}
    getBtnSearchElem() {return cy.get('.aajZCb > .lJ9FBc > center > .gNO89b')}
    getTitleSearch() {return cy.get('a > h3')}
    getFirstListElem() {return cy.get('ul.erkvQe > li:nth-child(1)')}
}
export default PageGoogle;