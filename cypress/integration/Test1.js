describe('My First Test Suite', function () {

    it('My First Test Case', function () {
        //test steps go inside it block
        cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        //in Cypress, get acts like 'find'
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        //Parent child chaining
        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                $el.find('button').click()
            }
        })
        //handling promises manually
        cy.get('.brand').then(function (logoelement) {
            cy.log(logoelement.text())
        })




    })
})

