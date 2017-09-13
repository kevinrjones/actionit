This is a more advanced security setup.

It is configured in WebSecurityConfig to have basic authentication. The default password is set in
application.properties

The Spring configuration now has the security set to allow all the URLs that the 
application needs apart from the 'api'

The angular 2 app in the 'resources' directory is set up to send the `X-Requested-With: XMLHttpRequest` header
so that if not authenticated the call fails, but it fails silently (ie Spring does not pop up the users dialog box)