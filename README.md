# restcrud

RESTful CRUD application to manage Locations. This application has the following features:
- Maven
- Spring MVC
- Hibernate
- HSQLDB
- JSON
- HTML
- CSS
- Bootstrap
- Javascript
- JQuery
- AJAX
- Google Maps API

P.S.: The application uses Hibernate for persistence, but to make the deployment process painless, the application is currently configured to save data in memory. If you prefer you can make HQSLDB save data in file or even change the database.

---
# Demo

If you want to see the application running, [click here](http://restcrud-samuelportela.rhcloud.com).


---
# REST API

### To list all locations
> curl -X GET 'http://restcrud-samuelportela.rhcloud.com/location/api/list'

### To create a location
> curl -X POST 'http://restcrud-samuelportela.rhcloud.com/location/api/save' --data 'name=Shopping&latitude=-3.794692&longitude=-38.479832'

### To retrieve a specific location by id
> curl -X GET 'http://restcrud-samuelportela.rhcloud.com/location/api/get/1'

### To update one location
> curl -X POST 'http://restcrud-samuelportela.rhcloud.com/location/api/save' --data 'name=Shopping&latitude=-3.741075&longitude=-38.471299&id=1'

### To remove a specific location by id
> curl -X DELETE 'http://restcrud-samuelportela.rhcloud.com/location/api/delete/1'


---
# Build Process

### To build this project
> mvn package