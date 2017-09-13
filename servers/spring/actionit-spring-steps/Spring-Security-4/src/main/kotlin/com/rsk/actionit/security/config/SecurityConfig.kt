package com.rsk.actionit.security.config

import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder


@Configuration
@EnableAutoConfiguration
class SecurityConfig {

    @Bean
    fun passwordEncoder(): PasswordEncoder {
        return BCryptPasswordEncoder()
    }

}