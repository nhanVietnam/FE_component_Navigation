<?php
namespace Demo\Controllers;

use Jenssegers\Blade\Blade;

class DefaultController
{
	public function index()
	{
		$blade = new Blade([__DIR__.'/../../src/', __DIR__.'/../../sample'], __DIR__.'/../../cache');

		echo $blade->make('index', ['greetings' => 'Hello World!'])->render();
	}
	public function navigation()
	{
		$blade = new Blade([__DIR__.'/../../src/navigation', __DIR__.'/../../sample'], __DIR__.'/../../cache');

		echo $blade->make('index', ['greetings' => 'Hello'])->render();
	}
}