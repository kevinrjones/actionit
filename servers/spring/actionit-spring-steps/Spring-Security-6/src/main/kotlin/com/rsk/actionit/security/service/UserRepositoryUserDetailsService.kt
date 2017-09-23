package com.rsk.actionit.security.service

import com.rsk.actionit.data.models.User
import com.rsk.actionit.exceptions.ActionItException
import com.rsk.actionit.security.exceptions.EmailExistsException
import com.rsk.actionit.security.model.ActionItUser
import com.rsk.actionit.security.repository.UsersRepository
import com.rsk.actionit.viewmodel.AuthenticatedUser
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service



@Service
class UserRepositoryUserDetailsService(val userRepository: UsersRepository, var passwordEncoder: PasswordEncoder ) : ActionItUserService {


    @Throws(EmailExistsException::class, ActionItException::class)
    override fun registerNewUserAccount(serviceUser: ActionItUser): AuthenticatedUser {

        if (emailExist(serviceUser.email)) {
            throw EmailExistsException("There is an account with that email address:" + serviceUser.email)
        }

        val user = User()
        user.firstName=serviceUser.firstName
        user.lastName=serviceUser.lastName

        user.password = passwordEncoder.encode(serviceUser.password)

        user.email = serviceUser.email

        if (userRepository.save(user) != null) {
            val authenticatedUser = AuthenticatedUser(user)
            val auth = UsernamePasswordAuthenticationToken(authenticatedUser, null,
                    ArrayList<GrantedAuthority>())

            SecurityContextHolder.getContext().authentication = auth

            return authenticatedUser
        }

        throw ActionItException("Unable to register the user")
    }

    override fun loadUserByUsername(username: String): UserDetails {
        val user = userRepository.findByEmail(username) ?: throw UsernameNotFoundException("Could not find user " + username)
        return AuthenticatedUser(user)
    }

    private fun emailExist(email: String): Boolean {
        return userRepository.findByEmail(email) != null
    }

}



