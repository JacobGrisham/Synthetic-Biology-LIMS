# Synthetic Biology Laboratory Information Management System (LIMS)
![Security Headers](https://img.shields.io/security-headers?url=https%3A%2F%2Fwww.yelpcamp.app)
[[CircleCI](https://img.shields.io/circleci/build/github/JacobGrisham/YelpCamp)](https://app.circleci.com/pipelines/github/JacobGrisham/YelpCamp)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/323b83dec4c44b78bde6a4b2aa3477ec)](https://www.codacy.com/gh/JacobGrisham/Finance-Full-Stack-Web-App-using-Flask-and-SQL/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=JacobGrisham/Finance-Full-Stack-Web-App-using-Flask-and-SQL&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/6272d48144774479b06e9b4b2caea0d6)](https://www.codacy.com/gh/JacobGrisham/YelpCamp/dashboard?utm_source=github.com&utm_medium=referral&utm_content=JacobGrisham/YelpCamp&utm_campaign=Badge_Coverage)
![David](https://img.shields.io/david/jacobgrisham/React.js-Advanced-Hooks-and-Redux)
[![Updates](https://pyup.io/repos/github/JacobGrisham/Finance-Full-Stack-Web-App-using-Flask-and-SQL/shield.svg)](https://pyup.io/repos/github/JacobGrisham/Finance-Full-Stack-Web-App-using-Flask-and-SQL/)
[![Python 3](https://pyup.io/repos/github/JacobGrisham/Finance-Full-Stack-Web-App-using-Flask-and-SQL/python-3-shield.svg)](https://pyup.io/repos/github/JacobGrisham/Finance-Full-Stack-Web-App-using-Flask-and-SQL/)
[![gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.dev)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://semantic-release.gitbook.io/semantic-release/)

## 🎓 [Final Project](https://cs50.harvard.edu/x/2020/project/) for [Harvard's Introduction to Computer Science CS50 hosted on eDX](https://www.edx.org/course/cs50s-introduction-to-computer-science)

## 💡Lessons Learned
-   Gathering business requirements and scoping project feature development
-   Prototyping Single Page Application User Interface in AdobeXD
-   Creating new, meaningful SVG illustrations by combining and altering existing free SVG illustrations
-   Architected SQL Database to Boyce-Codd Normal form in UML
-   Using PostgreSQL with Django
-   Implementing JSON Web Token authentication with Redis in Django
-   Designing an API, especially in Django using django-rest-framework
-   Implementing React Hooks
-   Implementing complex state management in Redux
-   Writing React and Redux in Typescript
-   Integration testing React and Redux with Jest and react-testing-library
-   End to end automation testing with Cypress
-   Unit and Integration testing Django with pytest
-   Behavioral Driven Testing: test the expected result, not the implementation details
-   Implementing Test Driven Development: write tests as you go
-   Implementing Domain Driven Development: start and finish features based on user stories
-   Working with python virtual environment (virtualenv) for python dependency management
-   Dockerizing the development environment for coordinating the following services: Django, PostgreSQL, Redis, and React
-   Setting up linting with Prettier and Husky
-   Setting up standardized commit messages with gitmoji
-   Compressing files with Webpack and zipping files with brotli

## 🛠 Technologies
|Protoyping|Graphic Design|Front-End         |Back-End|Database  |Deployment   |Testing  |
-----------|------------- | -----------------| ------ | -------- | ----------- | ------- |
|Adobe XD  |Adobe XD	    |React	           |Python3 |PostgreSQL|Git          |Jest     |
|.         |Freepik			  |Redux		         |Django  |Redis     |circleci     |React Testing Library   |
|.         |.      			  |Typescript        |Celery  |.         |Docker       |Cypress  |
|.         |.			        |ES6               |.		    |.		     |Kubernetes	 |PyTest   |
|.         |.             |Styled Components |.       |.         |AWS EC2      |.        |
|.         |.             |.                 |.       |.         |AWS DynamoDB |.        |
|.         |.             |.                 |.       |.         |AWS Cloudfront|.       |


## ⚖️ Methodology
-   Single Page Application for a better user experience.
-   Separated front-end and back-end to avoid a monolithic architecture and to lay the foundation of a microservices architecture.
-   Microservices architecture for decoupled business logic and more flexibility for adaptations in the future.
-   React for front-end for the component-based approach to writing code, one-way data flow, and virtual document-object-model (DOM). Chose React over Angular and Vue since I have the most experience with React.
-   Redux for managing state in React since this is a large application and managing React states would become unweidly in the long run.
-   React and Redux both written in Typescript to leverage static typing for a more secure and well-tested application.
-   Styled Components for styling for leveraging the power and benefits of CSS-in-JS.
-   Django RESTful API for back-end. Django-rest-framework to simplify Create, Read, Update, and Delete routes. I've built a Django REST API without the help of a framework and there are no benefits to building routes at a lower level.
-   Celery for asynchronous operations within Python since Django asynchronous support is still just for views (as of v3.1).
-   SQL Database for leveraging the benefits of relational databases
-   PostgreSQL as the Relational Database Management System (RDBMS) since it has more features integrations in Django
-   Docker containerization of the application while in development mode because there are four different services and docker-compose provides automation for starting and ending the services.
-   circleci for continuous integration and continuous delivery since I have the most experience with circleci. Considered using Jenkins, but my focus as a Web Developer is not DevOps.

## ⚙️ Features
-   Manage user groups
-   Manage chemical/biological inventory
-   Manage protocols
-   Manage projects (made up of protocols)
-   Manage jobs (completing the protocol in a project)
-   Manage products (output from a job)

## 🚀 Getting Started

## 📐 Tests
- Django unit tests
- React unit and integration tests

## 🔒 License
Copyright Notice and Statement: currently not offering any license. Permission only to view and download. Refer to [choose a license](https://choosealicense.com/no-permission/) for more info.