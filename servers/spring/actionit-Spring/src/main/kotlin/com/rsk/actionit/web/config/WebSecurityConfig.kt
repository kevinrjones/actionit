package com.rsk.actionit.web.config

import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.web.csrf.CookieCsrfTokenRepository


@Configuration
//@EnableWebSecurity
/**
 * Have angular code send an http header
 * X-Requested-With: XMLHttpRequest
 *
 * May need to change where CSRF token comes from
 *
 * May need to change the logoutSuccessUrl
 *
 * Add cors here but also need to set it on the browser
 */
class WebSecurityConfig : WebSecurityConfigurerAdapter() {
    @Throws(Exception::class)
    override fun configure(http: HttpSecurity) {

        // @formatter: on
        http.httpBasic()
                .and()
                .authorizeRequests()
                .antMatchers("/**.bundle.js"
                        , "/**.woff2"
                        , "/**.map"
                        , "/"
                        , "/app"
                        , "/home"
                        , "/user"
                        , "/index.html"
                ).permitAll()
                .anyRequest().authenticated()
                .and().csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .and().logout()
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID")
                .and().cors()
        // @formatter: off
    }

//    @Autowired
//    @Throws(Exception::class)
//    fun configureGlobal(auth: AuthenticationManagerBuilder, userDetailsService: UserDetailsService, encoder: PasswordEncoder) {
//        auth.userDetailsService(userDetailsService).passwordEncoder(encoder)
//    }


}

