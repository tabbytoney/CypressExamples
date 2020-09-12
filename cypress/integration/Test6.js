describe('My Sixth Test Suite', function () {

    it('My Sixth Test Case', function () {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

        //click and verify option from mouse hover 
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')

        //force cllick hidden elements
        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')

     
    
//fixtures

    })
})

