## Installation

**Prerequisites:**
- a) Using Laravel Sail 
    - Make sure to install [Docker Desktop](https://www.docker.com/products/docker-desktop)
    - On Windows:
        - Ensure that Windows Subsystem for Linux 2 (WSL2) [is installed and enabled](https://docs.microsoft.com/de-de/windows/wsl/install-win10).
        - Ensure that Docker Desktop is [configured correctly](https://docs.docker.com/docker-for-windows/wsl/) for the WSL.
- b) Using standard environment:
    - Ensure you're on a Linux or UNIX environment.
    - Ensure PHP 7.4 or higher is installed on your system.
    - Ensure [Composer](https://getcomposer.org/doc/00-intro.md#globally) is installed and available globally.
    - Ensure [Node/NPM](https://nodejs.org/en/download/) (and optionally [Yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable)) is installed on your system.

**Installation**
1. Clone repository to a directory of your choice
2. Create a copy of the `.env.example` file and rename it to  `.env`. Apply the desired environment configuration.
3. a) Using Laravel Sail
    1. In Terminal run `./vendor/bin/sail up` to start up the laravel sail development container. 
    2. Run `./vendor/bin/sail artisan key:generate` to generate a random project key.
    3. Run `./vendor/bin/sail artisan migrate` to automatically create all tables used in the project to your database.
    4. Run `./vendor/bin/sail artisan db:seed` to fill your database with preset data.
3. b) Using other configurations:
    1. In Terminal run `composer install` to install needed composer packages
    2. Run `npm install` or `yarn install` to install the needed javascript packages
    3. Run `php artisan key:generate` to generate a random project key.
    4. Run `php artisan migrate` to automatically create all tables used in the project to your database.
    5. Run `php artisan db:seed` to fill your database with preset data.

## Usage ##
Use `npm run watch-poll` or `yarn run watch-poll` to run live reloading of changed files. 
Run `npm run dev`or `yarn run development` for compiling assets for development.
Run `npm run prod` or `yarn run production` for compiling assets for production.

## Project Structure ##
The Project is built with a Laravel backend that serves data over api routes to a Vue application which contains a Vue Router.