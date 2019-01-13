package com.rsk.actionit.web.config

import org.apache.commons.logging.Log
import org.apache.commons.logging.LogFactory
import org.slf4j.LoggerFactory
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties
import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.web.server.ErrorPage
import org.springframework.boot.web.server.WebServerFactoryCustomizer
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Primary
import org.springframework.context.annotation.Profile
import org.springframework.http.HttpStatus
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter
import javax.sql.DataSource


@Configuration
class MvcConfiguration {
    @Bean
    fun notFoundCustomizer(): WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> {
        return NotFoundIndexTemplate()
    }

    private class NotFoundIndexTemplate : WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> {
        override fun customize(container: ConfigurableServletWebServerFactory) {
            container.addErrorPages(ErrorPage(HttpStatus.NOT_FOUND, "/"))
        }
    }

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

//    @Bean(destroyMethod = "")
//    @Profile("production")
//    @Throws(IllegalArgumentException::class, NamingException::class)
//    fun dataSource(): DataSource {
//        val bean = JndiObjectFactoryBean()
//        bean.jndiName = "java:comp/env/jdbc/JacketDB"
//        bean.setProxyInterface(DataSource::class.java)
//        bean.setLookupOnStartup(false)
//        bean.afterPropertiesSet()
//        return bean.`object` as DataSource
//    }

    internal val log = LogFactory.getLog(LoggerFactory::class.java)

    @Bean
    fun createLogger(): Log {
        return LogFactory.getLog("com.rsk")
    }

    @Bean
    fun corsConfigurer(): WebMvcConfigurer {
        return object : WebMvcConfigurerAdapter() {
            override fun addCorsMappings(registry: CorsRegistry) {
                registry.addMapping("/user/**")
                        .allowedMethods("GET","POST", "PUT", "DELETE")
                        .allowedOrigins("http://localhost:4200")
            }
        }
    }
}
