# Blogoshphere
Creative blog website using react as a front-end and Spring as a back-end server where user can login, create blogs, edit blogs, comment on blogs and see other blogs.
I am currently working on integrating Firebase to this app where all the post and user credentials can be stored in real-time.

### Backend
- Go to your project folder from your terminal
- cd blog-backend
- Run: `mvnw spring-boot:run`

### Frontend
- Go to your project folder from your terminal
- cd blog-frontend
- Run: `npm install` or `yarn install`
- After install, run: `npm run start` or `yarn start`
- It will open your browser(http://localhost:3000)

### Swagger UI
- http://localhost:8080/swagger-ui.html

### To Login use this credentials 
- admin email : admin@mail.com
- admin password : admin

### Technology Stack
Component         | Technology
---               | ---
Frontend          | React 16+
Backend           | Spring Boot 2.1+, Java 11+
Security          | Spring Security, JWT
Auth              | Local, Google, Facebook
Database          | H2 Database, Mysql
Persistence       | JPA 
API Documentation | Swagger-UI
Client Build      | npm, yarn, webpack
Server Build      | Maven
