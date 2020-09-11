describe('My First Test Suite', function () {

    it('My First Test Case', function () {
        //test steps go inside it block
        cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        //in Cypress, get acts like 'find'
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        //Parent child chaining - .products is parent, .product is child
        cy.get('.products').as('productLocator') //as means alias, within parenthesis is like its var name
        cy.get('@productLocator').find('.product').should('have.length', 4) //to call an alias example.
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        console.log('see') //this will show immediately in the dev tools>console in browser.

        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('seep') //this has to be written this way to make this command wait for resolution of previous promises. Bc console.log is nonCypress command
        })


        cy.get('.products').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                $el.find('button').click()
            }
        })

        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')


        //handling promises manually, this prints the text in the cypress log
        cy.get('.brand').then(function (logoelement) {
            cy.log(logoelement.text())
        })




    })
})

