# PsychoIdol

## Table of Contents
***
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Functionality](#functionality)
4. [Release](#release)

### General Info
***

![Image Text](https://cdn.discordapp.com/attachments/810783962531364884/823511752032387112/veldara.gif)

Psycho-Idol est un petit "rogueLike" avec une histoire simple.
Le joueur cherche un trésor dans un vaste donjon. Mais pour ce faire il doit aller chercher couloir après couloir pour vérifier dans chacune des salles si il n'y a pas la statuette qu'il cherche.

A la fin de chaque couloir il rencontrera un Boss, qui si il le bat, lui donnera accès à une amélioration de ces capacitées. Suitge à cela il reviendra à l'entré du donjon pour ce reposer.
Puis il repartira ensuite vers un nouveau couloir.

> [ bien entendue chaque nouveau couloir est plus dure que le précédent ]

### Technologies
***
Ce projet utilise ces diférentes technologies pour fonctionner :
* [bootstrap](https://getbootstrap.com/): Version 5.0.0 beta-1
* [RPG Maker MV - RTP](https://www.rpgmakerweb.com/products/rpg-maker-mv): Les RTP contient les images, animation et song du moteur de jeu

### Functionality
***
[ X ] représente la/les personne.s qui à/on travaillé sur la fonctionnalité et qui l'a/on fini.  
~ X ~ représente une fonctionnalité fortement avancé par X mais non encore fini

```text
- [  T] déplacement  
-       système lancé de rayon  
-       gestion pv, pp, etc  
- ~  T~ création de salle aléatoire  
-       création de salle de boss  

-       ennemi  
- ~  T~ joueur  
-       objet  

-       dialogue  
-       dialogue à choix multiple  
-       une fin ( "cinématique" / dialogue )  
-       charadisign  

-       menu ( pause, option )  
-       inventaire ( vie + objets + bonus ) [ peut être tout * contenue dans l'hud ]  
-       hud  

-       gestion de difficulté  

-       leader board  
- [A  ] menu d'accueil  

-       gestion son  
-       config touches  
-  
-       "sauvegarde des scores (php)"  

-       ( animation )  
-       ( son )
```

### Release
***
release v0.0.1 (23-03-2021)  
1.	release stable des objets principaux du moteur de jeux :  
	* game  
	* map  
	* camera  
	* character  

>	cette release ne contient pas le "menu d'accueil" qui n'est pas encore intégrer au projet