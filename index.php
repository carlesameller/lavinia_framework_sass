<?php
require_once("vendor/autoload.php");

$app = new Silex\Application();

$app->register(new Silex\Provider\TwigServiceProvider(), array(
	'twig.path' => __DIR__.'/templates',
));

$app['debug'] = true;

$app->get('/', function() use($app) {
	return $app['twig']->render('index.twig');
})->bind('home');

$app->get('/page02', function() use($app) {
	return $app['twig']->render('page02.twig');
})->bind('page02');

$app->run();