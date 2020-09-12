describe('My Third Test Suite', function () {

    it('My Third Test Case', function () {

        //check and uncheck boxes
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        //static dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        //dynamic dropdown
            cy.get('#autocomplete').type('ind')
     
            cy.get('.ui-menu-item div', {timeout:2000}).each(($el, index, $list) => {
     
                if ($el.text() === 'India') {
     
                    $el.click()
     
                }
     
            })
     
            cy.get('#autocomplete').should('have.value', 'India')

            //Show/hide box, visible and invisible elements
            cy.get('#displayed-text').should('be.visible')
            cy.get('#hide-textbox').click()
            cy.get('#displayed-text').should('not.be.visible')
            cy.get('#show-textbox').click()
            cy.get('#displayed-text').should('be.visible')

            //radio buttons
            cy.get('[value="radio2"]').check().should('be.checked')

     
        







//fixtures

    })
})

