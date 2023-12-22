describe('template spec', () => {
  it('passes', () => {
    cy.viewport(1133, 665);
    // Set token
    cy.window().then((win) => {
     win.localStorage.setItem('ALLTICKET:authToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByYWlrYXJhc2ljY3B0dEBnbWFpbC5jb20iLCJ1cmxiYWNrIjoid3d3LmFsbHRpY2tldC5jb20iLCJwYXltZW50Q2hhbm5lbCI6IkMwNyIsInRpY2tldFR5cGUiOiIwMSIsImxhbmciOiJFIiwiZGF0YSI6IjYxYmQzMjFjOTIzN2M1ZjIzOTg3OTA5YTg2OGI4ZTViYjExMzljODc1ZDRjYTRlNDUxNzJhYjNlYTEzZjg1NDZmOGM2ZGY4N2E0YzQ4M2FmOThjNWE2MTI2OWMwNDY2MGRjOTIxNTAzODgyZmUwMzY2ODA2MGJkZjlkYjIwMTI4MWFiZGU4OTUxODBiMDU3ZmVjMDEzNWM2ZjA3Yzk0OTI2ZGIxNTIzYjZiZjdiZDk3NWMwNWRiNTg5MDA2NmQzZDFkYjNhYzQ0ZTc2NWU2ZjgxMDY5YTg2ZTliZWNlYjA3N2IwZjZkZjI2NTVkOGQ1NDAzMjdhMTRlNTIyMTgyN2VlYjBmZDcyODc3MTI3NmFiMzgwZjNkOTE5MjMyYzMwMGYxZjFlZTI5Mjc0ZjU0NWE2M2FkYWY5MDFlOTJmZDYzMGE3ZjFhZWZiODM5NzQzNjU0ZTNjNTVhNzVlZjAxNTczOWZiOTdmM2VhNTM3YThkZDdiYWUwNGQxYzY0NzJiYzQwODY3ZjMwZWQ4MmIxN2EzZWM0MDVhZjk3ZDdkODZjMDFjNDczY2JkZTIxYmNmODE1MzljYjcyZWU3MTU2MTYwMGZmNzJkMjVkOWE4YzAwNDg1MzY1NTllNGI2YjJjNmU4NjM3MTUwNjE4OGU5NDhmNGZmODRjN2ViYWQ0NTgzNjgxOGUzOTY2ZGJmYmIzYzNkOWI3N2MzNjk5ODUyNjdiYTc5NzM5NWMxODAzYzQ0ZmI4MTMwZWU5ODA5YzNiZjQ3N2Y1ODM1ZjY2Nzk0MDMwMjYxODVlZjQ1OGFjMWQ1NzUyMWRlZWNkMjhlMmM3ZmM5ZWQxYWExZWUyZjdkMjVkZGI2MTM1NDI4MjQ3Y2UxY2FkZWQ3NTQ3YzcxNzY3M2VmZWUyZWU5YThmZDdkNTdhYWQzNDgyNmY5MTNkZGVmY2JjOTM1OTYxN2IyMzRkOGNmZWM4NTNiOTU2OTNhNzdjY2EyZDdiZWJkZTQ5ZWM5NjM2MzdiNDAyYmE4OWFmNCIsInRpbWVTdGFtcCI6MC4xODk1NjA3Mjk1MzEzOTEyNSwiaWF0IjoxNzAzMjUwMzYxLCJleHAiOjE3MDMyNjExNjEsImlzcyI6ImNzYXRrMTgifQ.s99a58AJWAt60VLXpqdczC01iHz5s1mFq7eb_uru3FQ');
    });
    cy.visit('https://www.allticket.com/event/NCT127_NEOCITY_THE_UNITYinBKK')
    cy.contains("Natthakarn").should('be.visible')
    //Dismiss cookie modal
    cy.get("a.cc-allow").click();
    //Click "BUY NOW" button
    cy.get("app-event-info > div > div.row button").click();
    //Accept terms and conditions
    cy.get("#acceptConsent").check({force: true});
    cy.contains("Confirm").click();
    //Select date 28 JAN
    cy.get('*[name^="custCardType"]').eq(1).click({force: true});
    //Click seat available and select zone (C) 
    cy.get('area').eq(2).click({ force: true })
    // cy.get('area[class="p_C"]').click({ force: true })
    //Select seat
    cy.get('*[class^="seat available"]').eq(0).click({force: true});
    cy.get('*[class^="seat available"]').eq(1).click({force: true});
    //Click "Booking"
    cy.contains("Booking").click();
  })
})


