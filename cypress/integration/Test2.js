describe('My Second Test Suite', function () {

    it('My Second Test Case', function () {
        //test steps go inside it block
        cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        //in Cypress, get acts like 'find'
        cy.wait(2000)

        //Parent child chaining - .products is parent, .product is child
        cy.get('.products').as('productLocator') //as means alias, within parenthesis is like its var name
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                $el.find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()  //the < img is part of the locator
        //cy.get('.cart-preview > .action-block > button').click()

        //these throw a webpack error, so I can't view the actions in the web browser but the logs continue successfully
        cy.contains('PROCEED TO CHECKOUT').click()
        //Cypress is unable to find the Place Order Button
        cy.contains('Place Order').click()






    })
})

