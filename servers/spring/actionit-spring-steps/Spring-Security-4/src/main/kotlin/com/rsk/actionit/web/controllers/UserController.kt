package com.rsk.actionit.web.controllers

import com.rsk.actionit.security.model.ActionItUser
import com.rsk.actionit.security.service.ActionItUserService
import com.rsk.actionit.viewmodel.RegistrationUser
import com.rsk.actionit.viewmodel.User
import org.apache.commons.logging.Log
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(value = "/api/user")
class UserController(var userService: ActionItUserService, var log: Log) {

    @RequestMapping(method = arrayOf(RequestMethod.GET), value = "", produces = arrayOf(MediaType.APPLICATION_JSON_VALUE))
    fun user(): User {
        return User("", "", true)
    }

    @RequestMapping(method = arrayOf(RequestMethod.POST),
            value = "",
            produces = arrayOf(MediaType.APPLICATION_JSON_VALUE),
            consumes = arrayOf(MediaType.APPLICATION_JSON_VALUE))
    fun createUser(@RequestBody user: RegistrationUser): User {
        var authenticatedUser = userService.registerNewUserAccount(ActionItUser(user.email, user.firstName, user.lastName, user.password, user.repeatPassword))
        return User(authenticatedUser.getFirstName(), authenticatedUser.getLastName(), true)
    }
}