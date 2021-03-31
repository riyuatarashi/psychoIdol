# PsychoIdol
![Image Text](https://cdn.discordapp.com/attachments/810783962531364884/823569067323293746/shalltear_1-min-min-min.gif)

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Configuration](#configuration)
4. [Functionality](#functionality)
5. [Release](#release)

## General Info
![Image Text](https://cdn.discordapp.com/attachments/810783962531364884/823511752032387112/veldara.gif)

Psycho-Idol est un petit "Rogue-Lite" avec une histoire simple.
Le joueur cherche un trésor dans un vaste donjon. Mais pour ce faire il doit aller chercher couloir après couloir pour vérifier dans chacune des salles si il n'y a pas la statuette qu'il cherche.

A la fin de chaque couloir il rencontrera un Boss, qui si il le bat, lui donnera accès à une amélioration de ces capacitées. Suitge à cela il reviendra à l'entré du donjon pour ce reposer.
Puis il repartira ensuite vers un nouveau couloir.

> [ bien entendue chaque nouveau couloir est plus dure que le précédent ]

## Technologies
Ce projet utilise ces diférentes technologies pour fonctionner :
* [bootstrap](https://getbootstrap.com/): Version 5.0.0 beta-1
* [RPG Maker MV - RTP](https://www.rpgmakerweb.com/products/rpg-maker-mv): Les RTP contient les images, animation et song du moteur de jeu

## Configuration
Pour installer et faire fonctionner ce jeu il vous suffi de suivre les étapes suivantes :
* clonner le repository sur un serveur php
* créé une base de donnée (sql) "psychoidol" en utf8-unicode-ci
* importer le ficher "assets/create.sql" dans votre base de données
* modifier le fichier "include/config.php" avec le bon hôte et mot de passe

Voilà vous pouvez dors et déjà jouer à notre jeux !

## Functionality
[ X ] représente la/les personne.s qui à/on travaillé sur la fonctionnalité et qui l'a/on fini.  
~ X ~ représente une fonctionnalité fortement avancé par X mais non encore fini

```text
[  T] - déplacement 
[  T] - gestion pv, pp, etc  
[  T] - création de salle aléatoire  
      - création de salle de boss  

[  T] - ennemi  
[  T] - joueur  
      - objet  

[A  ] - dialogue  
      - dialogue à choix multiple  
      - une fin ( "cinématique" / dialogue )  
[A  ] - charadisign  

[ L ] - menu ( pause, option )  
      - inventaire ( vie + objets + bonus ) [ peut être tout * contenue dans l'hud ]  
      - hud  

      - gestion de difficulté  

[ L ] - leader board  
[A  ] - menu d'accueil  

[ L ] - gestion son  
[  T] - config touches

~A  ~ - "sauvegarde des scores (php)"  

      - ( animation )  
      - ( son )
```

## Release
release v0.1.0 (31-03-2021)
1. Système de combat opérationnel, stabilisation des mouvement, etc.

***

release v0.0.1 (23-03-2021)  
1.	release stable des objets principaux du moteur de jeux :  
	* game  
	* map  
	* camera  
	* character  

>	cette release ne contient pas le "menu d'accueil" qui n'est pas encore intégrer au projet
