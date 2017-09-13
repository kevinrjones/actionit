package com.rsk.actionit.web.config

import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer
import org.springframework.boot.web.servlet.ErrorPage
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpStatus

@Configuration
class MvcConfiguration {
    @Bean
    fun notFoundCustomizer(): EmbeddedServletContainerCustomizer {
        return NotFoundIndexTemplate()
    }

    private class NotFoundIndexTemplate : EmbeddedServletContainerCustomizer {
        override fun customize(container: ConfigurableEmbeddedServletContainer) {
            container.addErrorPages(ErrorPage(HttpStatus.NOT_FOUND, "/"))
        }
    }
}