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
        return LogFactory.getLog("com.pluralsight")
    }

}
