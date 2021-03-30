<?php
require_once('vendor/autoload.php');

function init_twig() {
    // Indique le répertoire ou sont placés les modèles (templates)
    $loader = new \Twig\Loader\FilesystemLoader('templates');

    // Crée un nouveau moteur Twig
    $twig = new \Twig\Environment($loader);

    // Renvoie le moteur
    return $twig;
}