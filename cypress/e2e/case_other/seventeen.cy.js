describe('template spec', () => {
  it('passes', () => {
    cy.viewport(1133, 665);
    // Set token
    cy.window().then((win) => {
     win.localStorage.setItem('ALLTICKET:authToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImsucG9uZ2x1bmdrYUBnbWFpbC5jb20iLCJ1cmxiYWNrIjoid3d3LmFsbHRpY2tldC5jb20iLCJwYXltZW50Q2hhbm5lbCI6IkMwNyIsInRpY2tldFR5cGUiOiIwMSIsImxhbmciOiJFIiwiZGF0YSI6IjUzODhlNmI2NWQxYjNiNmI1NjhlZDljYThhZTE3MjFjYzAzNmFmZDg2NWY0OTU2MzY0YjZkNDVkYWE2ZWIyNjNhODI1YjdiMDI3Y2MyMTdjOTAxNWU5NThlZTgwM2VkMGNmMmU5M2VhZGIzYWU3ZDFiOWU2YjUxNWIwMWMxODBlMDdlMzM2YmZkMDY1NTk5MjU5OGM5NGU1ZjcwZTdiMjEyYjczODQzYTk1M2YzZDA0MjBmOTdjMjgzMDlmOTBiODQ1YTg1MGRkNDNkZTUxODg1N2ZmYWFjMDRkM2ZlYjk5YWE4MDFiMTJlZTVkODQ5NDhhYmVkNzMzMzM3M2NkYjVkZmZjOTViNjFjZjZkNTQ1YzI0ZGUyMzM0OGMyMzQ5OTc0NjhkYTYzZTQ3MDkwZmMwM2Q5YjQ1NzNhM2EyZmYwODFlOGMzZTA5MzdmYzRhYmM5MGE3ODUzYmI4NzkyNzdlNzBkODZlZjczYTFjNDRhODgyOTgzMDI1ZmY2Yzg3ZDczODQ2ZjI4ZjJjNWQxNjEwOGIwOGRiZjE5ZmI5MTg3YTAyY2ViOGYyNWYyNzAwN2U1NjdiZmI0ZTJjMTcwNGQ0OWM0ZTBmYjI1YjZlZGE5ZjczZjA2YTk0ZDk1NmZjYTQyZWMwOTY5NDU5MmNiYjE2ZmYxYjZhNWUyYzUyYTJlOWI1YzQxMGExMTA2ODNhMTFhYzc3ZTg5N2RiZDBmODFkMGZhMWZmYzk1Yjg0ODMwMWU5YzRlZDIzZTUyYTQ2OGVhYmNmZDcwYjRhYjkzNjUyYWNlZDNiODc5NzM4YmI0YWFmMWExNDY4YzY2MGQzNDQ5ZjFkMTU3ZjNiMDc0OTdkYjcxZDMxMzBmMTFlYjRhYzIyMDYyYzM5ODU4YjRjYWVkZmZiMDQ2NGYwM2FhOWYzYmVkMTI4NjQxNTlkZGRkODgyNDVhNDk1ZTY3MjVmYmNlY2I2MGFiODVkMjI3MzQ3MDA4YjA4YTFjMzBkMzFmZTAxMzFhN2I4NjZlYjcxOSIsInRpbWVTdGFtcCI6MC43MDEzMTQ0NTE5MTI2MzYyLCJpYXQiOjE3MDI0Nzc3NjEsImV4cCI6MTcwMjQ4ODU2MSwiaXNzIjoiY3NhdGsxOCJ9.U5cxwaanybAHrde-QT42ESto4dkKvVWIBIr0-S1WlM4');
    });
    cy.visit('https://www.allticket.com/event/SEVENTEENFOLLOWTOBKK')
    cy.contains("Kittipong").should('be.visible')
    //Dismiss cookie modal
    cy.get("a.cc-allow").click();
    //Click "BUY NOW" button
    cy.get("app-event-info > div > div.row button").click();
    //Accept terms and conditions
    cy.get("#acceptConsent").check({force: true});
    cy.contains("Confirm").click();
    //Click seat available and select zone (E2A)
    cy.get("#seatAva > div.text-center > button").click();
    cy.contains("E2A").click();
    //Select seat
    //console.log(cy.get('*[class^="seat available"]')) 
    cy.get('*[class^="seat available"]').eq(0).click({force: true});
    cy.get('*[class^="seat available"]').eq(1).click({force: true});
    //Click "Booking"
    cy.contains("Booking").click();
  })
})


