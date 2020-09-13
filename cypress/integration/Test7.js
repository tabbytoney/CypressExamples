describe('My Seventh Test Suite', function () {

    it('My Seventh Test Case', function () {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

        //getting url from href attribute and visitng it that way instead of a new window button
        cy.get('#opentab').then(function(el)
        {
            const url= el.prop('href')
            cy.visit(url)
        })

      
    
//fixtures

    })
})

