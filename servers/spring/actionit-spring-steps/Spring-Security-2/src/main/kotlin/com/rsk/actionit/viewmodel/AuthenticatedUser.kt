package com.rsk.actionit.viewmodel

import com.rsk.actionit.data.models.User
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.authority.AuthorityUtils



class AuthenticatedUser : UserDetails {
    private var firstName: String
    private var lastName: String
    private var email: String
    private var password: String
    private var id: Long

    constructor (user: User) {
        firstName = user.firstName
        lastName = user.lastName
        email = user.email
        password = user.password
        id = user.id
    }

    override fun getAuthorities(): Collection<GrantedAuthority> {
        return AuthorityUtils.createAuthorityList("ROLE_USER")
    }

    override fun isAccountNonExpired(): Boolean {
        return true
    }

    override fun isAccountNonLocked(): Boolean {
        return true
    }

    override fun isCredentialsNonExpired(): Boolean {
        return true
    }

    override fun isEnabled(): Boolean {
        return true
    }

    override fun getPassword(): String {
        return password
    }

    fun getId(): Long {
        return id
    }

    fun getFirstName(): String {
        return firstName
    }

    fun getLastName(): String {
        return lastName
    }

    override fun getUsername(): String {
        return getEmail()
    }

    fun getName(): String {
        return getFirstName() + " " + getLastName()
    }

    fun getEmail(): String {
        return email
    }


}