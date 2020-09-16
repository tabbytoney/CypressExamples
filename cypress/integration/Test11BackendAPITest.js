/// <reference types="Cypress" />

describe('Testing API and Mock Info', function () {

    //this test was created using the https://example.cypress.io/commands/network-requests page

    it('Testing API and Mock Info', function () {
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {

            "name": "Learn Appium Automation with Java",
            "isbn": "bcggsss",
            "aisle": "22s7",
            "author": "John foe"
        }).then(function (response) {
            expect(response.body).to.have.property("Msg", "successfully added")
            expect(response.status).to.eq(200)
        })

        //must resolve this promise, this method is taken from Selenium 
        //need to capture the response and extract the info





        //fixtures
    })
})