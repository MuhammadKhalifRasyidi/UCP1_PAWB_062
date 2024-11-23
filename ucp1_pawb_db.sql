CREATE TABLE `CatatanPupuk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `namaPetani` varchar(50) DEFAULT NULL,
  `lokasiLahan` varchar(50) DEFAULT NULL,
  `luasLahan` VARCHAR(11) DEFAULT NULL,  
  `jenisTanaman` text DEFAULT NULL,  
  PRIMARY KEY (`id`)
);namePetani, lokasiLahan, luasLahan, jenisTanaman

CREATE TABLE `CatatanBibit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `namaPetani` varchar(50) DEFAULT NULL,
  `lokasiLahan` varchar(50) DEFAULT NULL,
  `luasLahan` VARCHAR(11) DEFAULT NULL,  
  `jenisTanaman` text DEFAULT NULL,  
  PRIMARY KEY (`id`)
);namePetani, lokasiLahan, luasLahan, jenisTanaman

INSERT INTO `CatatanPupuk` (`namaPetani`, `lokasiLahan`, `luasLahan`,`jenisTanaman`) VALUES
('roy', 'sleman', '1 hektar', 'tanaman orang');

DROP TABLE IF EXISTS CatatanPupuk;