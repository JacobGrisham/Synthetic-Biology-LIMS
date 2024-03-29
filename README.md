<div align="center">
  <img width="200" src="react-frontend/frontend/public/logo512.png" alt="Synthetic Biology LIMS logo">

  # Synthetic Biology Laboratory Information Management System (LIMS)
  [![CircleCI](https://img.shields.io/circleci/build/github/JacobGrisham/Synthetic-Biology-LIMS)](https://app.circleci.com/pipelines/github/JacobGrisham/Synthetic-Biology-LIMS)
  [![Codacy Badge](https://app.codacy.com/project/badge/Grade/d719037fafc641ada6f1f1527d8b54ca)](https://www.codacy.com/gh/JacobGrisham/Synthetic-Biology-LIMS/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=JacobGrisham/Synthetic-Biology-LIMS&amp;utm_campaign=Badge_Grade)
  [![codecov](https://codecov.io/gh/JacobGrisham/Synthetic-Biology-LIMS/branch/master/graph/badge.svg?token=HU39MQLWVD)](https://codecov.io/gh/JacobGrisham/Synthetic-Biology-LIMS)
  ![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/jacobgrisham/Synthetic-Biology-LIMS)
  [![Updates](https://pyup.io/repos/github/JacobGrisham/Synthetic-Biology-LIMS/shield.svg)](https://pyup.io/repos/github/JacobGrisham/Synthetic-Biology-LIMS/)
  [![Python 3](https://pyup.io/repos/github/JacobGrisham/Synthetic-Biology-LIMS/python-3-shield.svg)](https://pyup.io/repos/github/JacobGrisham/Synthetic-Biology-LIMS/)
  [![gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.dev)
  [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://semantic-release.gitbook.io/semantic-release/)
  ![GitHub all releases](https://img.shields.io/github/downloads/JacobGrisham/Synthetic-Biology-LIMS/total)
</div>

## 🎓 [Final Project](https://cs50.harvard.edu/web/2020/projects/final/capstone/) for [Harvard's Web Programming with Python and Javascript CS50W hosted on eDX](https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript)

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
|Protoyping|Graphic Design|Front-End         |Back-End                |Database  |Deployment        |Testing                 |
-----------|------------- | -----------------| ---------------------- | -------- | ---------------- | ---------------------- |
|Adobe XD  |Adobe XD	    |React	           |Python3                 |PostgreSQL|Git               |Jest                    |
|.         |Freepik			  |Redux		         |Django                  |Redis     |circleci          |React Testing Library   |
|.         |.      			  |Typescript        |Django Rest Framework   |.         |Docker            |Cypress                 |
|.         |.			        |ES6               |*Celery*	              |.		     |*Kubernetes*	    |PyTest                  |
|.         |.             |React Router      |.                       |.         |*AWS Lambda*      |.                       |
|.         |.             |Formik            |.                       |.         |*AWS Aurora*      |.                       |
|.         |.             |Styled Components |.                       |.         |*AWS API Gateway* |.                       |
|.         |.             |Material UI       |.                       |.         |.                 |.                       |

-   note that *italicized* text indicates that the technology has not been applied yet

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

## 📐 Tests
-   Interactive code coverage diagram on [codecov](https://codecov.io/gh/JacobGrisham/Synthetic-Biology-LIMS). The code coverage takes into account both the Django unit tests and the React unit/integration tests.
-   [Django unit](https://app.circleci.com/pipelines/github/JacobGrisham/Synthetic-Biology-LIMS/50/workflows/d5bd12a2-0792-49e8-b318-54b0cb35f843/jobs/117/tests) and the [React unit/integration](https://app.circleci.com/pipelines/github/JacobGrisham/Synthetic-Biology-LIMS/50/workflows/d5bd12a2-0792-49e8-b318-54b0cb35f843/jobs/116/tests) junit.xml test reports and code coverage artifacts automatically uploaded to circleci.

## 🚀 Getting Started
### System requirements:
-   Make sure you have [PostgreSQL](https://www.postgresql.org/download/) installed and running on your computer. If you installed PostgreSQL with [Homebrew](https://brew.sh/), then you can start PostgreSQL with `brew services start postgresql`
-   Make sure you have [Redis](https://redis.io/download) installed and running on your computer. If you installed Redis with [Homebrew](https://brew.sh/), then you can start Redis with `brew services start redis`
-   Create an .env file in the root directory with the following key: `ENV_API_SERVER=http://127.0.0.1`
-   Create an .env file in the django-backend directory with the following keys:
    ```
    DJANGO_ENV=
    DEBUG=
    SECRET_KEY=
    DJANGO_ALLOWED_HOSTS=www.example.com localhost 127.0.0.1 [::1]

    DJANGO_ADMIN_USER=
    DJANGO_ADMIN_EMAIL=
    DJANGO_ADMIN_PASSWORD=

    DATABASE=postgres

    DB_DATABASE=db.postgresql
    DB_USER=postgres_user
    DB_PASSWORD=
    DB_HOST=
    DB_PORT=5432

    JWT=
    REDIS_URL=
    ```
-   Create an .env file in the postgres directory with the following keys:
    ```
    POSTGRES_USER=
    POSTGRES_PASSWORD=
    ```

### To run this project on your system with Docker:
<ol>
  <li>Make sure you have <a href='https://docs.docker.com/get-docker/'>Docker</a> installed and running on your computer</li>
  <li>In your terminal, navigate to the root of this repository and run <code>docker-compose up</code> (Docker will automatically run <code>docker-compose up --build</code> for the first setup phase)</li>
</ol>

**⚠️ Important:** if you are getting conflict errors, you should run `docker stop <container name>` that is already running in the background.  
**⚠️ Important:** if you are getting other errors, you should run `docker-compose down` to bring everything down, and start over.  

### To run this project on your system manually (without Docker):
<ol>
  <li>Ensure that python3, python3-pip, and python3-venv are installed on your system</li>
  <li>(For first time running this application) run <code>python3 -m venv venv</code> to create the virtual environment. Navigate to the directory django-backend and run <code>source venv/bin/activate</code> to activate the virtual environment. (For first time running this application) Run <code>pip install -r requirements.txt</code> to install the django dependencies</li>
  <li>(If you need to set up local database) Navigate to the directory django-backend and run <code>python3 manage.py migrate</code> and then <code>python3 manage.py makemigrations</code></li>
  <li>While still in the django-backend directory, run <code>python3 manage.py runserver</code> to start the server</li>
  <li>(For first time running this application) Navigate to the directory react-frontend/frontend and run <code>npm install</code> to install the react dependencies</li>
  <li>Open a new terminal tab or window, navigate to the directory react-frontend/frontend, and run <code>npm start</code></li>
  <li>To view the application in a web browser, visit <a href='http://localhost:3000'>http://localhost:3000</a></li>
</ol>

### To contribute to this project on your system:
-   Ensure that `git lfs` is installed on your system. Download the extension here [git-lfs.github.com](https://git-lfs.github.com/).
-   To make git commits, navigate to the root directory, add files to git staging with `git add <path/to/file>`, and then run `git commit` to activate the [Gitmoji](https://gitmoji.dev) interactive prompt in your terminal. Here's a preview of the [interactive prompt](https://www.npmjs.com/package/gitmoji-cli). After completing the prompt, exit with `:wq`
-   If making README.md updates, be sure to add `[skip ci]` to the git commit message in order to prevent running unneccessary tests in continuous integration and deployment.

## 🔒 License
Copyright Notice and Statement: currently not offering any license. Permission only to view and download. Refer to [choose a license](https://choosealicense.com/no-permission/) for more info.
