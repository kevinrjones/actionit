package com.rsk.actionit.web.controllers

import com.rsk.actionit.viewmodel.Action
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(value = ["/actions"])
class ActionController {

    @RequestMapping(method = arrayOf(RequestMethod.GET), value = ["/{name}"], produces = arrayOf(MediaType.APPLICATION_JSON_VALUE))
    fun createAction(@PathVariable name: String) : Action {
        return Action(name)
    }
}


