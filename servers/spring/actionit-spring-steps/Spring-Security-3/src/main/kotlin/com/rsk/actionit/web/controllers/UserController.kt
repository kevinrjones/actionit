package com.rsk.actionit.web.controllers

import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(value = "/api/user")
class UserController(/*userService: ActionItUserService*/) {

    @RequestMapping(method = arrayOf(RequestMethod.GET), value = "", produces = arrayOf(MediaType.APPLICATION_JSON_VALUE))
    fun user() : User {
        return User(true)
    }

}

class User(var authenticated: Boolean)

