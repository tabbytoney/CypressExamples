describe('My Second Test Suite', function () {

    it('My Second Test Case', function () {
        //test steps go inside it block
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])





//fixtures

    })
})

