// <reference types="cypress"/>
 
describe('Reqres API GET',() => {
    it('GET API List User',() => {
       cy.request('GET','https://reqres.in/api/users?page=2').then((resp) => {
        expect(resp.status).to.eq(200)
        expect(resp.body).to.not.be.null
       })
    });
    it('GET API List User',() => {
        cy.request('GET','https://reqres.in/api/users?page=2').then((resp) => {
         expect(resp.status).to.eq(200)
         expect(resp.body).to.not.be.null
        })
     });
     it('GET API List User',() => {
        cy.request('GET','https://reqres.in/api/users?page=2').then((resp) => {
         expect(resp.status).to.eq(200)
         expect(resp.body).to.not.be.null
        })
     });
     it('GET API List User',() => {
        cy.request('GET','https://reqres.in/api/users?page=2').then((resp) => {
         expect(resp.status).to.eq(200)
         expect(resp.body).to.not.be.null
        })
     });
});