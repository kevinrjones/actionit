package com.rsk.actionit.security.service

import com.rsk.actionit.security.exceptions.EmailExistsException
import com.rsk.actionit.security.model.ActionItUser
import com.rsk.actionit.viewmodel.AuthenticatedUser
import org.springframework.security.core.userdetails.UserDetailsService


interface ActionItUserService : UserDetailsService {
    @Throws(EmailExistsException::class)
    fun registerNewUserAccount(serviceUser: ActionItUser): AuthenticatedUser
}