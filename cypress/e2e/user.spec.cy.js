
import userData from '../fixtures/userdata.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-mm-dd']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",

  }

  it.only('User Info Update - Success', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Alexander')
    cy.get(selectorsList.middleNameField).clear().type('Taylor')
    cy.get(selectorsList.lastNameField).clear().type('Smith')
    cy.get(selectorsList.genericField).eq(3).clear().type('Alegator')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee59')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherId66687952')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriverId98784295')
    cy.get(selectorsList.genericField).eq(7).clear().type('2023-04-26')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(8).clear().type('ssnNumber59822564')
    cy.get(selectorsList.genericField).eq(9).clear().type('sinNumber59822564')
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

  })

  it('Fail Login', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })

})