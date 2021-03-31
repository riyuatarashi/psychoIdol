<?php
class score {
    public $pseudo;
    public $score;
    public $score_date;



    function __construct($array = NULL) {
        if($array !== null) {
            foreach($array as $key => $value) {
                if(property_exists(get_class($this), $key)) {
                    $this->$key = $value;
                }
            }
        }
    }
        static function readAll($dbh) {
            $statement = '
                SELECT *
                FROM score';
            $query = $dbh->prepare($statement);
            $query->execute();
            $prod = $query->fetchAll(PDO::FETCH_CLASS,'score');
            return $prod;
    
        }
        function create($dbh) {
        
            $sql = 'INSERT INTO score (pseudo, score, score_date) VALUES (:pseudo, :score, :score_date);';
            
            // préparation de la requête
            $query = $dbh->prepare($sql);
            // on donne une valeur aux paramètres à partir des attributs de l'objet courant
            $query->bindValue(':pseudo', $this->pseudo, PDO::PARAM_STR);
            $query->bindValue(':score', $this->score, PDO::PARAM_INT);
            $query->bindValue(':score_date', $this->score_date, PDO::PARAM_STR);
            $query->execute();
            
        }
    }