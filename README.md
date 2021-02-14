<p align="center"><img src="https://ak-wear.de/img/logo.png" alt="AK-Wear Logo" width="50px">&nbsp;&nbsp;<span style="font-size:45px">AK Wear</span></p>
<p align="center"><a href="https://laravel.com/docs/8.x/"><img src="https://img.shields.io/static/v1?label=laravel&message=8.12&color=orange" alt="laravel version"></a>&nbsp;
<a href="https://vuejs.org/v2/guide/"><img src="https://img.shields.io/static/v1?label=vue&message=2.6.12&color=42b883" alt="vue version"></a>
</p>

## Installation

**Prerequisites:**
- a) Using Docker
    - Make sure to install [Docker Desktop](https://www.docker.com/products/docker-desktop)
    - On Windows:
        - Ensure that Windows Subsystem for Linux 2 (WSL2) [is installed and enabled](https://docs.microsoft.com/de-de/windows/wsl/install-win10).
        - Ensure that Docker Desktop is [configured correctly](https://docs.docker.com/docker-for-windows/wsl/) for the WSL.
- b) Using standard environment:
    - Ensure you're on a Linux or UNIX environment.
    - Ensure you have MySQL 5.7.25 or MySQL 8.0 or higher installed on your system and have created a user and database you want to use.
    - Ensure PHP v7.3 or higher is installed on your system. (To support MyQSL's 8.0 authentication default system you have to install PHP v7.4 or higher!)
    - Ensure [Composer](https://getcomposer.org/doc/00-intro.md#globally) is installed and available globally.
    - Ensure [Node/NPM](https://nodejs.org/en/download/) (and optionally [Yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable)) is installed on your system.

**Installation**
1. Clone repository to a directory of your choice
2. Create a copy of the `.env.example` file and rename it to  `.env`. Apply the desired environment configuration.
3. a) Using Docker
    1. In `.env` file set `DB_HOST` to `mysql`.
    2. Switch to the laradock directory.
    3. Create a copy of the `env-example` file and rename it to `.env`. 
    4. Open the `.env` file
        - Change the value for `COMPOSE_PROJECT_NAME` to a preferred project name.
        - Change the value for `PHP_VERSION` to `7.4` or a higher preferred PHP-Version.
        - Under the section `### MYSQL ###` change the values to the corresponding values for your Database in the project's `.env`.
    5. In Terminal run `docker-compose up -d nginx mysql`. Running the first time it'll create all images from scratch, this could take some time.
    6. When all containers are up and running:
        1. In Terminal run `docker-compose exec workspace bash` to enter the workspace container.
        2. Run `php artisan key:generate`.
        3. Run `php artisan migrate`.
        4. Run `php artisan db:seed`.
3. b) Using other configurations:
    1. In Terminal run `composer install` to install needed composer packages
    2. Run `npm install` or `yarn install` to install the needed javascript packages
    3. Run `php artisan key:generate` to generate a random project key.
    4. Run `php artisan migrate` to automatically create all tables used in the project to your database.
    5. Run `php artisan db:seed` to fill your database with preset data.
    6. Run `php artisan serve` to use the php development server.

## Usage ##
Note: When using docker, the following commands have to be executed in the workspace container (enter it by running `docker-compose exec workspace bash`).

Use `npm run hot` or  `yarn run hot` to run with hot module replacement.
Run `npm run watch-poll` or `yarn run watch-poll` to run live reloading of changed files. 
Run `npm run dev`or `yarn run dev` for compiling assets for development.  
Run `npm run prod` or `yarn run prod` for compiling assets for production.