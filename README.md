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


---
# REST API

### To list all locations
> curl -X GET 'http://localhost:8080/restcrud/location/api/list'

### To create a location
> curl -X POST 'http://localhost:8080/restcrud/location/api/save' --data 'name=Shopping&latitude=-3.794692&longitude=-38.479832'

### To retrieve a specific location by id
> curl -X GET 'http://localhost:8080/restcrud/location/api/get/1'

### To update one location
> curl -X POST 'http://localhost:8080/restcrud/location/api/save' --data 'name=Shopping&latitude=-3.741075&longitude=-38.471299&id=1'

### To remove a specific location by id
> curl -X DELETE 'http://localhost:8080/restcrud/location/api/delete/1'


---
# Build Process

### To build this project
> mvn package