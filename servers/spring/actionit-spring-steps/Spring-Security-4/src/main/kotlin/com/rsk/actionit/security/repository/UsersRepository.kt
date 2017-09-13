package com.rsk.actionit.security.repository

import com.rsk.actionit.data.models.User
import org.springframework.data.repository.CrudRepository


interface UsersRepository : CrudRepository<User, Long> {

    fun findByEmail(email: String): User?
}