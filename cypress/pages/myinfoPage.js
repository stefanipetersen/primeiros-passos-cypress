
class MyinfoPage {
    selectorsList() {
        const selectors = {

            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-mm-dd']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            nationalityCombobox: ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text",
            maritalCombobox: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
        
        }
        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName, nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName)
    }

    fillEmployeeDetails(employeeID, otherID, driverID, licenseExpiry, ssnNumber, sinNumber) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeID)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherID)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driverID)
        cy.get(this.selectorsList().genericField).eq(7).clear().type(licenseExpiry)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type(ssnNumber)
        cy.get(this.selectorsList().genericField).eq(9).clear().type(sinNumber)
    }

    fillStatusDetails(birthday, gender) {
        cy.get(this.selectorsList().genericField).eq(10).clear().type(birthday)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().nationalityCombobox).click()
        cy.get('.oxd-select-dropdown > :nth-child(25)').click()
        cy.get(this.selectorsList().maritalCombobox).click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').click()
        cy.get('.oxd-radio-input--active').eq(gender).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
    
}

export default MyinfoPage