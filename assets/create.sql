-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 30 mars 2021 à 15:53
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `psychoidol`
--

-- --------------------------------------------------------

--
-- Structure de la table `discussion`
--

DROP TABLE IF EXISTS `discussion`;
CREATE TABLE IF NOT EXISTS `discussion` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(60) DEFAULT NULL,
  `content` text NOT NULL,
  `brand` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `discussion`
--

INSERT INTO `discussion` (`id`, `name`, `content`, `brand`) VALUES
(1, 'johnny', 'Je suis enfin arrivé à ce donjon  ……. AHAHAHAHAHAHAH ', 0),
(2, 'johnny', 'Quesqui m’arrive …. Hum je suis ou déjà ?', 0),
(3, 'johnny', 'Ah oui la Statuette c’est Monsieur Chaputo qui m\'envoie la chercher il m\'a promit une belle sommes pour cette statuette', 0),
(4, 'johnny', 'Il y a quelque chose d\'écrit … \"Votre esprit sera mis à rude épreuve\"', 0),
(5, 'johnny', 'Ece vraiment prudent d’y aller … si je renonce maintenant ma réputation en prendrait un coup', 0),
(6, NULL, 'Johnny entre dans le donjon et arrive dans une salle', NULL),
(7, 'johnny', 'HAHAHAHA Encore c’est voix dans ma tête', NULL),
(8, NULL, 'Des Fantôme apparaissent ', NULL),
(9, 'johnny', 'HUM !!!!!! c’est une illusions ? ils se rapprochent il semble vouloir s’en prendre à moi', NULL),
(10, 'johnny', 'C’est quoi ça ?', NULL),
(11, '', 'Johhny prends le bâton … Le fantôme est devant lui prêt à l\'attaquer, il tend le bâton vers le fantôme !!!!!!!!! Une boule de lumière en sort', NULL),
(12, 'johnny', 'Hum ?? le fantôme a disparue… ils semblerait que ce bâton puisse combattre les fantôme', NULL),
(13, 'johnny', 'Je vois la porte de sortie de l’autre côté ils semblerait que j’ai le choix entre les affronter ou les esquiver', NULL),
(14, 'johnny', 'La porte vers la salle suivante semble fermé à clef je suis obligé de me battre', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
