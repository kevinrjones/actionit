package com.rsk.actionit.web.config

import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter


@Configuration
class WebSecurityConfig : WebSecurityConfigurerAdapter() {
    @Throws(Exception::class)
    override fun configure(http: HttpSecurity) {
        http
                .httpBasic().and()
        .authorizeRequests()
            .antMatchers("/resources/**"
                    , "/account/register"
//                    , "/index.html"
            ).permitAll()
            .anyRequest().authenticated()
    }


}

