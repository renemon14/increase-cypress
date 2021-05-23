/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

var endpoint, responseApi, respFinal 
var contResp = []

Given('El siguiente endpoint {string}',(url)=>{

    endpoint = url  
    cy.log(endpoint)  
})

And('Agrego parametros {string}',(params)=>{
    
    endpoint = endpoint + params
    cy.log(endpoint)  
        
})

When('Ejecuto el metodo {string}',(apimethod)=>{

    if (apimethod == "GET"){
        cy.request(apimethod, endpoint).then((response)=>{
            expect(response.status).to.eq(200)
            cy.writeFile('cypress/fixtures/response.json',response.body)
            responseApi = response.body
            
        })
    }
})

And('Del resultado tomar el ID del key "name" -> {string}', (valor)=>{
    responseApi.forEach(element => {
        if (element.name == 'Lagunitas Brewing Co'){
            contResp.push(element.id)
        }  
    })
    cy.log(contResp)
})

And('Obtener el detalle de la cervecería con key "state" -> {string}',(valor)=>{

    contResp.forEach(element => {
        cy.request("GET", Cypress.env("UrlApi") + element).then((response)=>{
            expect(response.status).to.eq(200)

        if ((response.body).state == valor){
            respFinal = response.body
            cy.log(respFinal)
            cy.writeFile('cypress/fixtures/responseFinal.json',respFinal)
        }
    })
    })          
        
})

Then('Valido los datos resultantes',()=>{

    expect(respFinal).to.have.property('id', 12040)
    expect(respFinal).to.have.property('name', 'Lagunitas Brewing Co')
    expect(respFinal).to.have.property('street', '1280 N McDowell Blvd')
    expect(respFinal).to.have.property('phone', '7077694495')
})