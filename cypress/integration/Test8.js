/// <reference types ="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

//the above is needed to use the plug in we installed so we can test frames
//plug in installed: npm install -D cypress-iframe


describe('My Eighth Test Suite', function () {

    it('My Eighth Test Case', function () {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        //verify there's only two packages showing - this checks that you're on the correct page
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)

        


      
    
//fixtures

    })
})

