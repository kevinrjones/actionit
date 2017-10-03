package com.rsk.actionit.web.controllers

import com.rsk.actionit.viewmodel.Todo
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(value = "/api/todos")
class TodosController {
    @RequestMapping(method = arrayOf(RequestMethod.GET), value = "", produces = arrayOf(MediaType.APPLICATION_JSON_VALUE))
    fun todos() : List<Todo> {
        return listOf(
                Todo(1, "ActionIt", "20170219", 1, 1),
                Todo(2, "ActionIt", "20170107", 2, 1),
                Todo(3, "ActionIt", "20170223", 3, 1),
                Todo(4, "ActionIt", "20170304", 1, 1),
                Todo(5, "ActionIt", "20170225", 2, 1),
                Todo(6, "ActionIt", "20170307", 0, 1)
        )
    }

    @RequestMapping(method = arrayOf(RequestMethod.POST), value = "")
    fun addTodo(title: String)  {
        println(title)
    }
}
