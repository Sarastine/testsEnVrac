DROP TABLE [nomTable];/*supprime la table nomTable*/
CREATE TABLE [nomTable](/*Crée la table nomTable*/
	[id] INT PRIMARY KEY NOT NULL IDENTITY(1,1),/*IDENTITY = AUTO_INCREMENT*//*Détermine première colonne avec son nom (id) et son type (INT pour integer) puis la rend clef primaire (PRIMARY KEY), l'empêche d'être vide (NOT NULL) et lui fait un auto incrément (AUTO_INCREMENT ou, dans Sql management tout pourri, IDENTITY)*/
	[nomPremiereColonne] NVARCHAR(50),/*Détermine 2ème colonne avec son nom et son type avec la valeur maximale du type (50 caractères)*/
	[nomDeuxiemeColonne] NVARCHAR(50)/*etc*/
);
INSERT INTO nomTable (nomPremiereColonne, nomDeuxiemeColonne)/*Ajoute des données (INSERT) dans (INTO) la table nomTable*/
	VALUES/*Valeurs à entrer*/
		('JavaScript', 'version 5'),/*Donnée de la colonne 1, donnée de la colonne 2*/
		('PHP', 'version 5.2'),/*Donnée de la colonne 1, donnée de la colonne 2*/
		('PHP', 'version 5.4'),/*etc*/
		('HTML', 'version 5.1'),
		('JavaScript', 'version 6'),
		('JavaScript', 'version 7'),
		('JavaScript', 'version 8'),
		('PHP', 'version 7');