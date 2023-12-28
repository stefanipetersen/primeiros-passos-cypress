
import LoginPage from '../pages/loginPage'
import userData from '../fixtures/userdata.json'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyinfoPage from '../pages/myinfoPage'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyinfoPage()


describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myinfoPage.fillPersonalDetails(chance.first(), chance.last() , chance.last(), chance.string())
    myinfoPage.fillEmployeeDetails('EmployeeID', 'OtherID', '06265875', '2023-10-06', '9587465', '77778594')
    myinfoPage.fillStatusDetails('2000-04-26', 1)
    myinfoPage.saveForm()

  })

})