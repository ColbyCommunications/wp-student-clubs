<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit71b274ed2498c07479dae963083bc55e
{
    public static $files = array (
        'c4cab46db2c506b61fa620085fe98417' => __DIR__ . '/..' . '/johnwatkins0/wp-autoload/wp-autoload.php',
        'fe6a73718b86f419d4e88690e7d36e35' => __DIR__ . '/..' . '/johnwatkins0/wp-singleton/wp-singleton.php',
    );

    public static $prefixLengthsPsr4 = array (
        'D' => 
        array (
            'Dealerdirect\\Composer\\Plugin\\Installers\\PHPCodeSniffer\\' => 55,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Dealerdirect\\Composer\\Plugin\\Installers\\PHPCodeSniffer\\' => 
        array (
            0 => __DIR__ . '/..' . '/dealerdirect/phpcodesniffer-composer-installer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit71b274ed2498c07479dae963083bc55e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit71b274ed2498c07479dae963083bc55e::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
