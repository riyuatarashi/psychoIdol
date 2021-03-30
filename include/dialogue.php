<?php
class dialogue {
  
        static function readAll($dbh) {
            $statement = '
                SELECT *
                FROM discussion';
            $query = $dbh->prepare($statement);
            $query->execute();
            $prod = $query->fetchAll(PDO::FETCH_CLASS,'dialogue');
            return $prod;
    
        }
    }