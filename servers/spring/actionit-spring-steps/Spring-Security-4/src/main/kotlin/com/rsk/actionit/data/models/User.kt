package com.rsk.actionit.data.models

import javax.persistence.*

@Entity
@Table(name = "Users")
data class User(@Column(unique = true, nullable = false) var email: String = "",
                var firstName: String = "",
                var lastName: String = "",
                var password: String = "",
                @Id @GeneratedValue(strategy = GenerationType.AUTO) var id: Long = 0) {

    constructor (user: User) : this(
            user.email,
            user.firstName,
            user.lastName,
            user.password,
            user.id)

}

