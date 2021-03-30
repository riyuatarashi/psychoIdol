<?php
// Inclut notre fonction et crée un nouveau moteur dans la variable $twig
include('include/twig.php');
include('include/connexion.php');
include('include/dialogue.php');
$twig = init_twig();
$dbh = getPDO();

$tab = dialogue::readall($dbh);
$json = json_encode($tab);
$data = ['json' => $json];
       
echo $twig->render('acceuil.html', $data);