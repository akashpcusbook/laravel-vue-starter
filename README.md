## About Laravel Vue Starter Package

This package is meant for a basic laravel 11 integration with vue js 3 with login authentication code.

## Requirements
- PHP 8.2
- Composer 2.7
- node 20
- npm 10

## Dependency Used
- Laravel 11 (sanctum, Breez, fortify). Please refer composer.json for more details.
- Vue 3 (vue-router, axios, laravel-vite-plugin, @vitejs/plugin-vue).Please refer package.json for more details.

## Installation
```
# Install all php dependencies. must have php 8.2 or greater.
composer install

# laravel artisan commands to install database schema and seed with test users.
php artisan migrate
php artisan db:seed

# node command to install vue dependencies
npm install
```

Once all dependency installed successfylly then run application using below command
```
php artisan serve
npm run dev
```
Now you can access your application using http://127.0.0.1:8000/

To create build of your application run command
```
npm run build
```
## Documentation
Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

[Vue](https://vuejs.org/guide/introduction.html) (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).