<?php
// Connection à la BDD
function getPDO() {
  include 'config.php';
    $dsn = 'mysql:host=127.0.0.1;dbname=psychoidol;charset=utf8';


    try {
        $dbh = new PDO($dsn,$user,$pass);
        $dbh->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
    } catch (Exception $e){
        echo $e->getMessage();
    }

    return $dbh;
}
