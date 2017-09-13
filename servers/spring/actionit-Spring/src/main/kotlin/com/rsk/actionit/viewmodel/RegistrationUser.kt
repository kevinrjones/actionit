package com.rsk.actionit.viewmodel


class RegistrationUser() {
    lateinit var email: String
    lateinit var firstName: String
    lateinit var lastName: String
    lateinit var password: String
    lateinit var repeatPassword: String


    constructor(email: String,
                firstName: String,
                lastName: String,
                password: String,
                repeatPassword: String) : this() {

        this.email = email
        this.firstName = firstName
        this.lastName = lastName
        this.password = password
        this.repeatPassword = repeatPassword
    }
}