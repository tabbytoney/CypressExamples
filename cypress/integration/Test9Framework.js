// <reference types ="Cypress" />


describe('My Ninth Test - Framework', function () {
    //this before pulls data from the fixture folder.
    
    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
this.data=data
        })
      })
    

    it('My Ninth Test - Framework', function () {
        cy.visit("https://www.rahulshettyacademy.com/angularpractice/")
        //select name text box, type in Bob
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        //static dropdown for gender
        cy.get('select').select(this.data.gender)
        //text typed in the name text box should auto appear in a box at bottom of page - validate
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        //check minimum length property of Name text box - requires at least two letters
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
        //check if disabled radio button is really disabled
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get(':nth-child(2) > .nav-link').click()

        
        // cy.get('h4.card-title').each(($el, index, $list) => {
        //     if($el.text().includes('Blackberry'))
        //     {
        //         cy.get('button.btn.btn-info').eq(index).click()
        //     }

        // })

        //the above commented out code is now a custom command in Support>command.js. Is shortened and used below.
        cy.selectProduct('Blackberry')
        cy.selectProduct('Nokia Edge')
        

        


      
    
//fixtures

    })
})

