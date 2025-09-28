class FormPage {

    FORM_PAGE = '#Blog1'
    FULL_NAME_FIELD = '#name'
    EMAIL_FIELD = '#email'
    PHONE_FIELD = '#phone'
    ADDRESS_FIELD = '#textarea'

    getFormPage() {
        return cy.get(this.FORM_PAGE)
    }

    getFullNameField() {
        return cy.get(this.FULL_NAME_FIELD)
    }

    getEmailField() {
        return cy.get(this.EMAIL_FIELD)
    }     

    getPhoneField() {
        return cy.get(this.PHONE_FIELD)
    }

    getAddressField() {
        return cy.get(this.ADDRESS_FIELD)
    }

}

export default new FormPage()