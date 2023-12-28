
import LoginPage from '../pages/loginPage'
import userData from '../fixtures/userdata.json'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyinfoPage from '../pages/myinfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyinfoPage()


describe('Orange HRM Tests', () => {

  it.only('User Info Update - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myinfoPage.fillPersonalDetails('Taylor', 'Moon', 'Smith', 'Alegator')
    myinfoPage.fillEmployeeDetails('EmployeeID', 'OtherID', '06265875', '2023-10-06', '9587465', '77778594')
    myinfoPage.fillStatusDetails('2000-04-26', 1)
    myinfoPage.saveForm()

  })

  it('Fail Login', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })

})