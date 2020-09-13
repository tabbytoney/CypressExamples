/// <reference types = "Cypress" />
import HomePage from '../integration/pageObjects/HomePage'

describe('My Ninth Test - Framework', function () {
    //this before pulls data from the fixture folder.
    
    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
this.data=data
        })
      })
    

    it('My Ninth Test - Framework', function () {
        const homePage=new HomePage()
            cy.visit("https://www.rahulshettyacademy.com/angularpractice/")

            homePage.getEditBox().type(this.data.name)
            homePage.getGender().select(this.data.gender)
            homePage.getTwoWayDataBinding().should('have.value',this.data.name)
            homePage.getEditBox().should('have.attr','minlength','2')
            homePage.getEntrepreneaur().should('be.disabled')
            Cypress.config('defaultCommandTimeout', 8000)
            homePage.getShopTab().click()


        
//fixtures

    })
})

