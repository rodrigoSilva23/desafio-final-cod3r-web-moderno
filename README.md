Select Language: **English**, [Portuguese](https://github.com/rodrigoSilva23/desafio-final-cod3r-web-moderno/blob/main/README-pt.md)
desafio-final-cod3r-web-moderno

# challenges!

With the aim of enhancing and further validating the knowledge acquired during the Modern Web Development course, I sought to refine the base code through various significant modifications. I implemented a more streamlined folder structure, introduced essential validations, and thoroughly documented each step using the Swagger tool.

Here is the improved version of the base code ([versao-final](https://github.com/cod3rcursos/knowledge/tree/master/versao-final)) that served as the starting point for these enhancements. The implemented changes were carefully designed to reinforce the project's architecture and ensure the quality of the developed code.

## Functionalities

- login
  - signin
  - validateToken
- users
  - ['create','get', 'update' ] users
  - validateToken
- categories
  - ['create','get', 'update','delete' ] category
  - categories by tree
  - categories with patch
- articles
  - ['create','get', 'update','delete' ] articles
  - find article by category


## Technologies Used

- docker
- javascript - nodeJS

## Prerequisites

Before starting the project installation, make sure you have the following requirements installed on your machine:

- Docker: [How to install Docker](https://www.docker.com/get-started/)
- Docker Compose

Make sure all required dependencies are installed before proceeding with the following steps.

## Step 1: Clone the repository

```bash
  git clone https://github.com/rodrigoSilva23/desafio-final-cod3r-web-moderno.git
```

## Step 2: Installation

```bash
    cd desafio-final-cod3r-web-moderno
    docker-compose up
```

## routes

You can check the available intent service routes by going to:

#### with wragger

- [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

#### with redoc

- [http://localhost:3000/docs](http://localhost:3000/docs)

This will give you an overview of all endpoints available in your API.

<p>
 Explore the routes listed to understand the different endpoints and features your API offers. Each route will have its description and supported HTTP methods, such as GET, POST, PUT, DELETE, among others.
</p>

## possible errors

There is a chance that a permission error will occur when running the docker-compose up command. To fix this, you can give the product and intent scripts execute permissions.

To grant execute permissions to the entrypoint.sh file, you can run the following command in the terminal:

```bash
   chmod +x .docker/entrypoint.sh

```

this will give permission to execute the script

## Author

- [@rodrigosilvaDev23](https://github.com/rodrigoSilva23)

## License

This project is licensed under the MIT License. See the file [LICENSE](https://opensource.org/licenses/MIT) for more information.
