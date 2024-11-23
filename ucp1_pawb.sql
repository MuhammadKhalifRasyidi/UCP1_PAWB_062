CREATE TABLE `CatatanPupuk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `namePetani` varchar(50) DEFAULT NULL,
  `lokasiLahan` varchar(50) DEFAULT NULL,
  `luasLahan` VARCHAR(11) DEFAULT NULL,  
  `jenisTanaman` text DEFAULT NULL,  
  PRIMARY KEY (`id`)
);namePetani, lokasiLahan, luasLahan, jenisTanaman

CREATE TABLE `CatatanBibit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `namePetani` varchar(50) DEFAULT NULL,
  `lokasiLahan` varchar(50) DEFAULT NULL,
  `luasLahan` VARCHAR(11) DEFAULT NULL,  
  `jenisTanaman` text DEFAULT NULL,  
  PRIMARY KEY (`id`)
);namePetani, lokasiLahan, luasLahan, jenisTanaman

INSERT INTO `users` (`nama`, `email`, `password`) VALUES
('narji', 'narji@maul.com', 'narji123');

DROP TABLE IF EXISTS users;