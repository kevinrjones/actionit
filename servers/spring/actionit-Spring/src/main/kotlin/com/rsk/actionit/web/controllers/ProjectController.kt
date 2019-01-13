package com.rsk.actionit.web.controllers

import com.rsk.actionit.viewmodel.Project
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(value = ["/api/projects"])
class ProjectController {

    @RequestMapping(method = arrayOf(RequestMethod.GET), value = [""], produces = arrayOf(MediaType.APPLICATION_JSON_VALUE))
    fun projects() : List<Project> {
        return listOf(
                Project(1, "Personal", "#fb886e"),
                Project(2, "Shopping", "#cccccc"),
                Project(3, "Work", "#e4c4a8"),
                Project(4, "Errand", "#74e8d3")
                )
    }
}

