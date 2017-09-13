package com.rsk.actionit.web.controllers

import com.rsk.actionit.security.model.ActionItUser
import com.rsk.actionit.security.service.ActionItUserService
import com.rsk.actionit.viewmodel.AuthenticatedUser
import com.rsk.actionit.viewmodel.RegistrationUser
import com.rsk.actionit.viewmodel.User
import org.apache.commons.logging.Log
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController
import java.security.Principal

@RestController
@RequestMapping(value = "/api/user")
class UserController(var userService: ActionItUserService, var log: Log) {

    @RequestMapping(method = arrayOf(RequestMethod.GET), value = "", produces = arrayOf(MediaType.APPLICATION_JSON_VALUE))
    fun user(principal: Principal?): User {
        if(principal == null) {
            return User(0, "", "", false)
        } else {
            var user = (principal as UsernamePasswordAuthenticationToken).principal as AuthenticatedUser
            return User(user.getId(), user.getFirstName(), user.getLastName(), true);
        }
    }

    @RequestMapping(method = arrayOf(RequestMethod.POST),
            value = "",
            produces = arrayOf(MediaType.APPLICATION_JSON_VALUE),
            consumes = arrayOf(MediaType.APPLICATION_JSON_VALUE))
    fun createUser(@RequestBody user: RegistrationUser):  ResponseEntity<User> {
        if(user.email.isNotEmpty()
                && user.firstName.isNotEmpty()
                && user.lastName.isNotEmpty()
                && user.password.isNotEmpty()
                && user.repeatPassword.isNotEmpty()
                && user.password == user.repeatPassword) {
            var authenticatedUser = userService.registerNewUserAccount(ActionItUser(user.email, user.firstName, user.lastName, user.password, user.repeatPassword))
            return ResponseEntity.ok(User(authenticatedUser.getId(), authenticatedUser.getFirstName(), authenticatedUser.getLastName(), true));
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }
}