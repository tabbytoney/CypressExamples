// <reference types = "Cypress" />
import HomePage from '../support/pageObjects/HomePage'
import ProductPage from '../support/pageObjects/ProductPage'

describe('My Ninth Test - Framework', function () {
    //this before pulls data from the fixture folder.

    before(function () {
        // runs once before all tests in the block
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })


    it('My Ninth Test - Framework', function () {
        const homePage = new HomePage()
        const productPage = new ProductPage()
        cy.visit(Cypress.env('url'))

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneaur().should('be.disabled')
        Cypress.config('defaultCommandTimeout', 8000)
        homePage.getShopTab().click() 

        this.data.productName.forEach(function (element) {

            cy.selectProduct(element)
        });
        productPage.checkOutButton().click()
        let sum = 0


        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            //the below portion is JS not Cypress so you have to resolve it in a promise to run it synchronoualy
            const amount = $el.text()
            let res = amount.split(" ") //split the strings into two, which makes $ as one and 5000 as the other. Splits at the space between them 
            res = res[1].trim() //removes any unnecessary spaces between $ and 50000, and eliminates $ so we just have the number
            sum = Number(sum) + Number(res) //converts the string into a number
            //cy.log(res)
            //res[0]=₹. The 0 in this cell is the $
            //res[1]=50000 The 1 in this cell is the 50000
        }).then(function () { //this promise is needed so the log doesn't instantly print 0 from sum=0
            cy.log(sum)
        })
        cy.get('h3 strong').then(function (element) {
            const amount = element.text()
            let res = amount.split(" ")
            let total = res[1].trim()
            expect(Number(total)).to.equal(sum)

        })
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({ force: true })
        cy.get('input[value="Purchase"]').click()

        //how to handle alerts
        //cy.get('.alert').contains('Success! Thank you! Your order will be delivered in next few weeks :-).') This doesn't work
        cy.get('.alert').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })


        //fixtures

    })
})

