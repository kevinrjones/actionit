package com.rsk.actionit.security.model

data class ActionItUser(val email: String,
                        val firstName: String,
                        val lastName: String,
                        val password: String,
                        val repeatPassword: String)