package com.rsk.actionit.web.config

import org.apache.commons.logging.Log
import org.apache.commons.logging.LogFactory
import org.apache.log4j.spi.LoggerFactory
import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer
import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.web.servlet.ErrorPage
import org.springframework.context.annotation.*
import org.springframework.http.HttpStatus
import javax.sql.DataSource
import org.springframework.context.annotation.Primary
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer




@Configuration
class MvcConfiguration {


    /**
     * See https://docs.spring.io/spring-boot/docs/current/reference/html/howto-data-access.html#howto-two-datasources
     *
     * I'm using this code to configure the data source while pulling the configuration out of the
     * appliction.properties file
     *
     */
    @Bean
    @Primary
    @Profile("dev")
    @ConfigurationProperties("spring.datasource")
    fun devDataSourceProperties(): DataSourceProperties {
        return DataSourceProperties()
    }

    @Bean
    @Primary
    @Profile("dev")
    @ConfigurationProperties("spring.datasource")
    fun devDataSource(): DataSource {
        val ds =  devDataSourceProperties().initializeDataSourceBuilder().build()
        return ds
    }

    internal val log = LogFactory.getLog(LoggerFactory::class.java)

    @Bean
    fun createLogger(): Log {
        return LogFactory.getLog("com.rsk")
    }

    @Bean
    fun corsConfigurer(): WebMvcConfigurer {
        return object : WebMvcConfigurerAdapter() {
            override fun addCorsMappings(registry: CorsRegistry) {
                registry.addMapping("/api/**")
                        .allowedOrigins("http://localhost:8080", "http://localhost:4200")

                registry.addMapping("/user/**")
                        .allowedOrigins("http://localhost:8080", "http://localhost:4200")
            }
        }
    }

}
