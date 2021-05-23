/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import PageGoogle from "../page_objects/PageGoogle";


const pageGoogle = new PageGoogle()

//Hooks
before(() => {
    cy.log('Inicio de pruebas')
  })

after(() => {
cy.log('Final de pruebas')
})


//Steps

Given('Me encuentro en la página principal de {string}',(url)=>{

    if (url == "Google"){
        cy.visit('https://www.google.com/')
    }else{
        cy.log('Page not found')
    }
        
})

When('Tipeo {string} dentro del campo de búsqueda',(textSearch)=>{
    pageGoogle.getSearchBarElem().type(textSearch)
})

And('Clickeo en el boton "Google Search"',()=>{
    pageGoogle.getBtnSearchElem().should('be.visible').click()
})

Then('Me dirige a la página de resultados',()=>{
    pageGoogle.getResultsElem().should('be.visible')
})

Then('Busco el resultado {string} y accedo al sitio',(resultTitle)=>{
    pageGoogle.getTitleSearch().contains(resultTitle).click()
})

Then('Me dirige a la página de {string}',(titleSite)=>{
    cy.get('title').contains(titleSite)
})

And('Clickeo en la primer opción sugerida',()=>{
    pageGoogle.getFirstListElem().should('be.visible').click()
})


