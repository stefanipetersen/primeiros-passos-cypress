
class MenuPage {
    selectorsList() {
        const selectors = {

        myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        performanceButton: ':nth-child(7) > .oxd-main-menu-item',

        }
        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    accessPerformance() {
        cy.get(this.selectorsList().performanceButton).click()
    }
}

export default MenuPage