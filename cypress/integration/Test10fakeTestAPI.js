/// <reference types="Cypress" />

describe('Testing API and Mock Info', function () {

//this test was created using the https://example.cypress.io/commands/network-requests page

    it('Testing API and Mock Info', function () {
      //server() routes responses initiates "listening". Tells Cy all calls after this are network related
      cy.visit('https://example.cypress.io/commands/network-requests')
      cy.server()
      //Now listen, but also change the response and inject our own response info. Stop that complete response: route()
      cy.route({  //within this block is the entire mock response
        method: 'PUT',
        url: 'comments/*',
        status: 404,
        response :{
            error : "Hey I understood Cypress"
          },
          delay: 1000 //give it time to mock the response and give it back to the browser
      }).as('UpdateComment')

    //Get locator for Update Comment button
      cy.get('.network-put').click() //when this button is clicked, you call the above service and Cypress sends the 404 back to browser. You should get the info back
      
      //we don't necessarily know where the error message will show. It's printed in your output. The dev will know where that html output will be
      cy.get('div.network-put-comment').should('contain',"Hey I understood Cypress")

      





        //fictures

    })

})