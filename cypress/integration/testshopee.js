describe ('Gist Test for Shopee', function () {
    before(function() {
        cy.visit("https://gist.github.com/discover")
        cy.get(".btn[data-ga-click=\"Header, sign in\"]").click()
        cy.get("#login_field").type(Cypress.env("username"))
        cy.get("#password").type(Cypress.env("password"))
        cy.get(".btn").click()
        Cypress.Cookies.preserveOnce("gist_user_session", cy.getCookie("gist_user_session"))
        // Cypress.Cookies.preserveOnce("_gh_sess", cy.getCookie("_gh_sess"))
        // Cypress.Cookies.preserveOnce("dotcom_user", cy.getCookie("dotcom_user"))
        // Cypress.Cookies.preserveOnce("logged_in", cy.getCookie("logged_in"))
        // Cypress.Cookies.preserveOnce("__Host-gist_user_session_same_site", cy.getCookie("__Host-gist_user_session_same_site"))
        // Cypress.Cookies.preserveOnce("_ga", cy.getCookie("_ga"))
        // Cypress.Cookies.preserveOnce("_gat", cy.getCookie("_gat"))
        // Cypress.Cookies.preserveOnce("_octo", cy.getCookie("_octo"))
        // Cypress.Cookies.preserveOnce("has_recent_activity", cy.getCookie("has_recent_activity"))
        // Cypress.Cookies.preserveOnce("tz", cy.getCookie("tz"))
        // window.localStorage.setItem("logged-in", true)
    })

   it('Visit Gist', function () {
       cy.visit("https://gist.github.com/")
   })

   it('Create New Gist', function () {
        cy.get(".input-block").should('be.visible')
        cy.get(".input-group > .form-control").should('be.visible')
        cy.get(".input-block").type("Test for Shopee")
        cy.get(".input-group > .form-control").type("Bismillah lulus testnya")
        cy.document().then(doc => {
            doc.querySelector('.CodeMirror').CodeMirror.setValue("wkwkwkwkkwkwkw");
        });
        cy.wait(3000)
        cy.get("form#new_gist").submit()
        cy.get(".user-select-contain").should('contain', "Bismillah lulus testnya")
   })

   it('Edit Gist', function () {
    cy.get(".pagehead-actions > :nth-child(1) > .btn").click()
    cy.get("#login_field").type(Cypress.env("username"))
    cy.get("#password").type(Cypress.env("password"))
    cy.get(".btn").click()
    Cypress.Cookies.preserveOnce("gist_user_session", cy.getCookie("gist_user_session"))
    cy.document().then(doc => {
        doc.querySelector('.CodeMirror').CodeMirror.setValue("harusnya ke edit");
    });
    cy.wait(3000)
    cy.get(".btn-primary").click()
        
   })

   it('Delete Gist', function () {
    cy.get(":nth-child(2) > form > .btn").click()
    cy.on("window:confirm", function(str){
        switch(str){
            case "Are you positive you want to delete this Gist?": 
            return true
        }
    cy.wait(3000)
    })
   
    it('View Gist', function () {
        cy.visit("https://gist.github.com/faaadly")
    })
   })

}) 