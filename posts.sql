DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tags` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `posts` WRITE;

INSERT INTO `posts` (`id`, `title`, `img`, `tags`)
VALUES
	(1,'Joyeuse Saint-Valentin !','01.jpg','love,message,graffiti,canal,slap,bobigny'),
	(2,'Le pochoir de Dalì','02.jpg','dali,canal,graffiti,paris,pochoir,10e'),
	(3,'Oggy et les cafards','03.jpg','oggy,mct,graffiti,canal,bobigny'),
	(4,'C’est l’heure du réveil !','04.jpg','wekup,graffiti,canal,bobigny'),
	(5,'Les crânes de La Villette','05.jpg','skull,statue,canal,paris,19e'),
	(6,'La statue de Minerve','06.jpg','minerve,statue,londres,angleterre,tamise'),
	(7,'Maquette de la Tamise','07.jpg','maquette,londres,angleterre,tamise'),
	(8,'Le Tate Museum','08.jpg','tatemuseum,londres,angleterre,tamise'),
	(9,'Entrée du Clink Prison Museum','09.jpg','clink,londres,angleterre,tamise'),
	(10,'Le Gherkin Building','10.jpg','city,londres,angleterre,gherkin'),
	(11,'Un graffiti à Brighton','11.jpg','graffiti,brighton,waterfront,angleterre,vampire'),
	(12,'Le Pavillon Royal','12.jpg','royalpavilion,brithton,angleterre'),
	(13,'Vue de la Tamise','13.jpg',',tamise,londres,angleterre'),
	(14,'La jetée de Brighton','14.jpg','brighton,waterfront,pier'),
	(15,'La maison à l’envers','15.jpg','brighton,waterfront,pier'),
	(16,'Un crâne mexicain','16.jpg','skull,statue,canal,paris,19e'),
	(17,'Rue Bichat','17.jpg','velib,chat,collage,paris,10e'),
	(18,'Attention aux dents !','18.jpg','requin,urinoir,canal,paris,10e');

UNLOCK TABLES;
