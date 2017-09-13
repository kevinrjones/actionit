package com.rsk.actionit.exceptions

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ResponseStatus

/**
 * When this exception is raised then this particular status is returned
 */
@ResponseStatus(HttpStatus.CONFLICT)
class IllegalActionException : Exception() {
}

class ActionItException : Throwable {

    constructor(message: String) : super(message)
}
