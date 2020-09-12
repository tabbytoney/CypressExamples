describe('My Fourth Test Suite', function () {

    it('My Fourth Test Case', function () {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        //Alert and confirmation popups
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]')

        //verify text of popups, compare text strings. Like Mocha

        cy.on('window:alert', (str)=>
        {
            expect(str).to.equal.('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str)=>
        {
        expect(str).to.equal.('Hello , share this practice page and share your knowledge')
        })

        //switching tabs, when a button opens another browser tab
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'index')
        cy.go('back')
        cy.url().should('include', 'Automation Practice') 

        
        







//fixtures

    })
})

