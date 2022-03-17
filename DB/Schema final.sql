CREATE DATABASE  IF NOT EXISTS `pap-plataformaestagios` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `pap-plataformaestagios`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: mysql-71843-0.cloudclusters.net    Database: pap-plataformaestagios
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `area`
--

DROP TABLE IF EXISTS `area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area` (
  `idArea` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  PRIMARY KEY (`idArea`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` VALUES (1,'Informática'),(2,'Ambiente');
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conta`
--

DROP TABLE IF EXISTS `conta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conta` (
  `idConta` int NOT NULL AUTO_INCREMENT,
  `tipoConta` enum('admin','diretor de turma','formando','empresa') NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(500) NOT NULL,
  `nome` varchar(75) NOT NULL,
  `contactoTelefonico` varchar(9) DEFAULT NULL,
  `publicKey` varchar(50) DEFAULT NULL,
  `privateKey` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idConta`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conta`
--

LOCK TABLES `conta` WRITE;
/*!40000 ALTER TABLE `conta` DISABLE KEYS */;
INSERT INTO `conta` VALUES (1,'admin','admin','$2a$10$35pRmiwia3swQp1jM7dtheOyReKWT2A4jn4xqx0K.fcXWk3SyJ/.C','admin',NULL,'m8zcv59yqrr24','zabwc05yjkn24'),(3,'formando','formando','$2a$10$.MSjCovGJQrAXHK.QWx1geYnEKoync9B6RJf0GY5q8kunPoR3rcci','formando',NULL,'mw3k90hmdn927','ite4zd6mndg27'),(4,'empresa','empresa','$2a$10$wArB1xPjsvxappOojuwHzuC8MTVDC3NxVKxU2NfOM4vTati57YHvK','empresa',NULL,'6yg8we4trox28','y7nzq2604td28'),(17,'formando','formando1','$2a$10$yCyVXNs8nJvWjjsx0B7Ul.muxGAidJ4PqcGRNmBF7yBWe5Ha6ZQD2','formando1',NULL,'g1ayeh1za3k17','e46k6ep2yy617'),(29,'formando','hhh','$2a$10$OUybSfIZzhAl3Z9MvlkCw.v6nxduoqUnkJbSfGpWua.yI5uY8t186','formando',NULL,'9tmdkvoh16w29','ib8vx2ela529'),(30,'formando','yuo','$2a$10$kNT07NMyYoM9z60WkC1s1eEMQl0SlMFupaP1x6OvDSpP5RuV2fkKe','formando',NULL,'t584weotpl30','myypu62slm30'),(37,'admin','admin1','$2a$10$Tme1e0IwkJWsHS/71Twcr.NWvP.yUEZuNykz2o2agJLPISIgYS9d.','admin111223',NULL,'qxlyzw9haym37','131cqpq8a1oa37'),(41,'diretor de turma','diretor@gmail.com','$2a$10$sBJRWjX2Y/ar7Aw.qOvIzuuCY0dNvtjBO.rjeMID5eX9uqHB4uGHO','diretor',NULL,'z8fdlv9z7f41','5osrwtp58n41'),(47,'empresa','empresaaaaa','d','empresaaaaa',NULL,'x','x'),(48,'empresa','empresa@gmail.com','$2a$10$qzH12j3pdh6hZyUz2ecVf.Qtx2DlbuKTrLnSlJthpQFUzZk55MsIK','Enta','999999999','xob6chj89848','k4h0czikdy48'),(55,'admin','admin@gmail.com','$2a$10$gXcCgExT5IfcodGNK5gtZe7seXylazET/vH1rh3XnIP/ZmaAPOn92','admin',NULL,'ud7x03kkjq55','ikltnf2omj855'),(56,'admin','diogo@gmail.com','$2a$10$fCU8VpEFz6uuDLP3NGa.7OC0kz7pS7ePm.g42oCFEElMqFwqhd5he','Diogo ',NULL,'1pynv8s8ext56','dp1zn2720i56'),(57,'diretor de turma','bernardo@gmail.com','$2a$10$Wu7vbZqNDNX3lAjhyzF/yey8uz47bI2EYUngVDYYhlpVf97qcdCoK','bernardo',NULL,'bb24z5fdjne57','sy60uxt6fu57');
/*!40000 ALTER TABLE `conta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `contaArea`
--

DROP TABLE IF EXISTS `contaArea`;
/*!50001 DROP VIEW IF EXISTS `contaArea`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `contaArea` AS SELECT 
 1 AS `idConta`,
 1 AS `idArea`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `curso`
--

DROP TABLE IF EXISTS `curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curso` (
  `idCurso` int NOT NULL AUTO_INCREMENT,
  `idArea` int DEFAULT NULL,
  `nome` varchar(50) NOT NULL,
  `sigla` varchar(10) NOT NULL,
  `duracao` varchar(1) NOT NULL,
  PRIMARY KEY (`idCurso`),
  KEY `fk_curso_area1_idx` (`idArea`),
  CONSTRAINT `fk_curso_area1` FOREIGN KEY (`idArea`) REFERENCES `area` (`idArea`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curso`
--

LOCK TABLES `curso` WRITE;
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
INSERT INTO `curso` VALUES (1,1,'Técnico de informática - Sistemas','TIS','3'),(3,1,'Técnico de informática - Gestão de redes','TIGR','1');
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oferta`
--

DROP TABLE IF EXISTS `oferta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oferta` (
  `idOferta` int NOT NULL AUTO_INCREMENT,
  `idConta` int NOT NULL,
  `idArea` int NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `descricao` varchar(250) NOT NULL,
  `vagas` tinyint NOT NULL,
  `finalizado` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`idOferta`),
  KEY `fk_oferta_conta_idx` (`idConta`),
  KEY `fk_oferta_area1_idx` (`idArea`),
  CONSTRAINT `fk_oferta_area1` FOREIGN KEY (`idArea`) REFERENCES `area` (`idArea`) ON DELETE CASCADE,
  CONSTRAINT `fk_oferta_conta` FOREIGN KEY (`idConta`) REFERENCES `conta` (`idConta`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oferta`
--

LOCK TABLES `oferta` WRITE;
/*!40000 ALTER TABLE `oferta` DISABLE KEYS */;
INSERT INTO `oferta` VALUES (17,48,2,'aa','dddda',1,0),(18,48,1,'d','dddd',2,0),(20,4,1,'Reparação','O formando admitido irá realizar a reparação de equipamentos informáticos, limpeza e atendimento ao publico',2,0);
/*!40000 ALTER TABLE `oferta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oferta_conta`
--

DROP TABLE IF EXISTS `oferta_conta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oferta_conta` (
  `idOferta` int NOT NULL,
  `idConta` int NOT NULL,
  `deferido` tinyint NOT NULL DEFAULT '0',
  `confirmado` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`idOferta`,`idConta`),
  KEY `fk_oferta_has_conta_conta1_idx` (`idConta`),
  KEY `fk_oferta_has_conta_oferta1_idx` (`idOferta`),
  CONSTRAINT `fk_oferta_has_conta_conta1` FOREIGN KEY (`idConta`) REFERENCES `conta` (`idConta`) ON DELETE CASCADE,
  CONSTRAINT `fk_oferta_has_conta_oferta1` FOREIGN KEY (`idOferta`) REFERENCES `oferta` (`idOferta`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oferta_conta`
--

LOCK TABLES `oferta_conta` WRITE;
/*!40000 ALTER TABLE `oferta_conta` DISABLE KEYS */;
INSERT INTO `oferta_conta` VALUES (17,3,0,0),(20,3,0,0);
/*!40000 ALTER TABLE `oferta_conta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `turma`
--

DROP TABLE IF EXISTS `turma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `turma` (
  `idTurma` int NOT NULL AUTO_INCREMENT,
  `idCurso` int DEFAULT NULL,
  `numero` varchar(1) DEFAULT NULL,
  `ano` varchar(1) NOT NULL,
  PRIMARY KEY (`idTurma`),
  KEY `fk_turma_curso1_idx` (`idCurso`),
  CONSTRAINT `fk_turma_curso1` FOREIGN KEY (`idCurso`) REFERENCES `curso` (`idCurso`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turma`
--

LOCK TABLES `turma` WRITE;
/*!40000 ALTER TABLE `turma` DISABLE KEYS */;
INSERT INTO `turma` VALUES (2,1,'1','3'),(14,3,'1',''),(16,3,'','1'),(20,3,'2','1'),(21,3,'1','1');
/*!40000 ALTER TABLE `turma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `turma_conta`
--

DROP TABLE IF EXISTS `turma_conta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `turma_conta` (
  `idTurma` int NOT NULL,
  `idConta` int NOT NULL,
  PRIMARY KEY (`idTurma`,`idConta`),
  KEY `fk_turma_has_conta_conta1_idx` (`idConta`),
  KEY `fk_turma_has_conta_turma1_idx` (`idTurma`),
  CONSTRAINT `fk_turma_has_conta_conta1` FOREIGN KEY (`idConta`) REFERENCES `conta` (`idConta`) ON DELETE CASCADE,
  CONSTRAINT `fk_turma_has_conta_turma1` FOREIGN KEY (`idTurma`) REFERENCES `turma` (`idTurma`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turma_conta`
--

LOCK TABLES `turma_conta` WRITE;
/*!40000 ALTER TABLE `turma_conta` DISABLE KEYS */;
INSERT INTO `turma_conta` VALUES (14,3),(2,17),(14,29),(14,30),(2,41),(14,41),(16,41),(20,41),(21,41);
/*!40000 ALTER TABLE `turma_conta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `vistaAdmin`
--

DROP TABLE IF EXISTS `vistaAdmin`;
/*!50001 DROP VIEW IF EXISTS `vistaAdmin`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vistaAdmin` AS SELECT 
 1 AS `idConta`,
 1 AS `nome`,
 1 AS `email`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vistaCurso`
--

DROP TABLE IF EXISTS `vistaCurso`;
/*!50001 DROP VIEW IF EXISTS `vistaCurso`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vistaCurso` AS SELECT 
 1 AS `idCurso`,
 1 AS `idArea`,
 1 AS `curso`,
 1 AS `sigla`,
 1 AS `area`,
 1 AS `duracao`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vistaDiretorTurma`
--

DROP TABLE IF EXISTS `vistaDiretorTurma`;
/*!50001 DROP VIEW IF EXISTS `vistaDiretorTurma`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vistaDiretorTurma` AS SELECT 
 1 AS `idConta`,
 1 AS `nome`,
 1 AS `email`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vistaEmpresa`
--

DROP TABLE IF EXISTS `vistaEmpresa`;
/*!50001 DROP VIEW IF EXISTS `vistaEmpresa`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vistaEmpresa` AS SELECT 
 1 AS `idConta`,
 1 AS `nome`,
 1 AS `email`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vistaFormando`
--

DROP TABLE IF EXISTS `vistaFormando`;
/*!50001 DROP VIEW IF EXISTS `vistaFormando`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vistaFormando` AS SELECT 
 1 AS `idConta`,
 1 AS `idTurma`,
 1 AS `nome`,
 1 AS `email`,
 1 AS `turma`,
 1 AS `curso`,
 1 AS `idCurso`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vistaOferta`
--

DROP TABLE IF EXISTS `vistaOferta`;
/*!50001 DROP VIEW IF EXISTS `vistaOferta`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vistaOferta` AS SELECT 
 1 AS `idOferta`,
 1 AS `idConta`,
 1 AS `idArea`,
 1 AS `area`,
 1 AS `vagas`,
 1 AS `finalizado`,
 1 AS `nome`,
 1 AS `titulo`,
 1 AS `descricao`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vistaTurma`
--

DROP TABLE IF EXISTS `vistaTurma`;
/*!50001 DROP VIEW IF EXISTS `vistaTurma`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vistaTurma` AS SELECT 
 1 AS `idTurma`,
 1 AS `idCurso`,
 1 AS `curso`,
 1 AS `ano`,
 1 AS `numero`,
 1 AS `turma`,
 1 AS `idConta`,
 1 AS `diretorTurma`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping events for database 'pap-plataformaestagios'
--

--
-- Dumping routines for database 'pap-plataformaestagios'
--
/*!50003 DROP PROCEDURE IF EXISTS `deleteConta` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `deleteConta`(IN idConta INT)
BEGIN
	DELETE FROM oferta WHERE oferta.idConta= idConta;
	DELETE FROM oferta_conta WHERE oferta_conta.idConta= idConta;
	DELETE FROM turma_conta WHERE turma_conta.idConta = idConta;
	DELETE FROM conta WHERE conta.idConta = idConta;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `deleteTurma` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `deleteTurma`(IN idTurma INT)
BEGIN
	DELETE FROM turma_conta WHERE turma_conta.idTurma = idTurma;
	DELETE FROM turma WHERE turma.idTurma = idTurma;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `limparDiretorTurma` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `limparDiretorTurma`(IN idTurma INT)
BEGIN
	DELETE FROM turma_conta 
    WHERE turma_conta.idTurma = idTurma 
    AND turma_conta.idConta IN (SELECT idConta FROM conta WHERE tipoConta = 'diretor de turma');    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `limparFormandoTurma` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `limparFormandoTurma`(IN idConta INT)
BEGIN
	DELETE FROM turma_conta WHERE turma_conta.idConta = idConta;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `contaArea`
--

/*!50001 DROP VIEW IF EXISTS `contaArea`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `contaArea` AS select `conta`.`idConta` AS `idConta`,`area`.`idArea` AS `idArea` from ((((`conta` join `turma_conta`) join `turma`) join `curso`) join `area`) where ((`conta`.`tipoConta` = 'formando') and (`conta`.`idConta` = `turma_conta`.`idConta`) and (`turma_conta`.`idTurma` = `turma`.`idTurma`) and (`turma`.`idCurso` = `curso`.`idCurso`) and (`curso`.`idArea` = `area`.`idArea`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaAdmin`
--

/*!50001 DROP VIEW IF EXISTS `vistaAdmin`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaAdmin` AS select `conta`.`idConta` AS `idConta`,`conta`.`nome` AS `nome`,`conta`.`email` AS `email` from `conta` where (`conta`.`tipoConta` = 'admin') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaCurso`
--

/*!50001 DROP VIEW IF EXISTS `vistaCurso`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaCurso` AS select `curso`.`idCurso` AS `idCurso`,`curso`.`idArea` AS `idArea`,`curso`.`nome` AS `curso`,`curso`.`sigla` AS `sigla`,`area`.`nome` AS `area`,`curso`.`duracao` AS `duracao` from (`curso` join `area`) where (`curso`.`idArea` = `area`.`idArea`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaDiretorTurma`
--

/*!50001 DROP VIEW IF EXISTS `vistaDiretorTurma`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaDiretorTurma` AS select `conta`.`idConta` AS `idConta`,`conta`.`nome` AS `nome`,`conta`.`email` AS `email` from `conta` where (`conta`.`tipoConta` = 'diretor de turma') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaEmpresa`
--

/*!50001 DROP VIEW IF EXISTS `vistaEmpresa`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaEmpresa` AS select `conta`.`idConta` AS `idConta`,`conta`.`nome` AS `nome`,`conta`.`email` AS `email` from `conta` where (`conta`.`tipoConta` = 'empresa') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaFormando`
--

/*!50001 DROP VIEW IF EXISTS `vistaFormando`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaFormando` AS select `conta`.`idConta` AS `idConta`,`turma_conta`.`idTurma` AS `idTurma`,`conta`.`nome` AS `nome`,`conta`.`email` AS `email`,`vistaTurma`.`turma` AS `turma`,`curso`.`nome` AS `curso`,`curso`.`idCurso` AS `idCurso` from ((((`conta` join `turma_conta`) join `vistaTurma`) join `turma`) join `curso`) where ((`conta`.`tipoConta` = 'formando') and (`conta`.`idConta` = `turma_conta`.`idConta`) and (`turma_conta`.`idTurma` = `vistaTurma`.`idTurma`) and (`turma_conta`.`idTurma` = `turma`.`idTurma`) and (`turma`.`idCurso` = `curso`.`idCurso`)) union all select `conta`.`idConta` AS `idConta`,NULL AS `idTurma`,`conta`.`nome` AS `nome`,`conta`.`email` AS `email`,NULL AS `turma`,NULL AS `curso`,NULL AS `idCurso` from `conta` where ((`conta`.`tipoConta` = 'formando') and `conta`.`idConta` in (select `turma_conta`.`idConta` from `turma_conta`) is false) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaOferta`
--

/*!50001 DROP VIEW IF EXISTS `vistaOferta`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaOferta` AS select `oferta`.`idOferta` AS `idOferta`,`oferta`.`idConta` AS `idConta`,`area`.`idArea` AS `idArea`,`area`.`nome` AS `area`,`oferta`.`vagas` AS `vagas`,`oferta`.`finalizado` AS `finalizado`,`conta`.`nome` AS `nome`,`oferta`.`titulo` AS `titulo`,`oferta`.`descricao` AS `descricao` from ((`oferta` join `conta`) join `area`) where ((`oferta`.`idConta` = `conta`.`idConta`) and (`oferta`.`idArea` = `area`.`idArea`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaTurma`
--

/*!50001 DROP VIEW IF EXISTS `vistaTurma`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaTurma` AS select `turma_conta`.`idTurma` AS `idTurma`,`curso`.`idCurso` AS `idCurso`,`curso`.`nome` AS `curso`,`turma`.`ano` AS `ano`,`turma`.`numero` AS `numero`,if((`curso`.`duracao` = '1'),if((`turma`.`numero` <> ''),concat(`curso`.`sigla`,' turma ',`turma`.`numero`),concat(`curso`.`sigla`)),if((`turma`.`numero` <> ''),concat(`curso`.`sigla`,' ',`turma`.`ano`,'º ano turma ',`turma`.`numero`),concat(`curso`.`sigla`,' ',`turma`.`ano`,'º ano'))) AS `turma`,`turma_conta`.`idConta` AS `idConta`,concat(`conta`.`nome`,' - ',`conta`.`email`) AS `diretorTurma` from (((`curso` join `turma_conta`) join `conta`) join `turma`) where ((`turma_conta`.`idConta` = `conta`.`idConta`) and (`conta`.`tipoConta` = 'diretor de turma') and (`turma_conta`.`idTurma` = `turma`.`idTurma`) and (`turma`.`idCurso` = `curso`.`idCurso`)) union all select `turma`.`idTurma` AS `idTurma`,`curso`.`idCurso` AS `idCurso`,`curso`.`nome` AS `curso`,`turma`.`ano` AS `ano`,`turma`.`numero` AS `numero`,if((`curso`.`duracao` = '1'),if((`turma`.`numero` <> ''),concat(`curso`.`sigla`,' turma ',`turma`.`numero`),concat(`curso`.`sigla`)),if((`turma`.`numero` <> ''),concat(`curso`.`sigla`,' ',`turma`.`ano`,'º ano turma ',`turma`.`numero`),concat(`curso`.`sigla`,' ',`turma`.`ano`,'º ano'))) AS `turma`,NULL AS `idConta`,NULL AS `diretorTurma` from (`curso` join `turma`) where (`turma`.`idTurma` in (select `turma_conta`.`idTurma` from (`turma_conta` join `conta`) where ((`turma_conta`.`idConta` = `conta`.`idConta`) and (`conta`.`tipoConta` = 'diretor de turma'))) is false and (`turma`.`idCurso` = `curso`.`idCurso`)) union all select `turma_conta`.`idTurma` AS `idTurma`,NULL AS `idCurso`,NULL AS `curso`,NULL AS `turma`,`turma`.`ano` AS `ano`,`turma`.`numero` AS `numero`,`turma_conta`.`idConta` AS `idConta`,concat(`conta`.`nome`,' - ',`conta`.`email`) AS `diretorTurma` from ((`turma_conta` join `conta`) join `turma`) where ((`turma_conta`.`idConta` = `conta`.`idConta`) and (`conta`.`tipoConta` = 'diretor de turma') and (`turma_conta`.`idTurma` = `turma`.`idTurma`) and (`turma`.`idCurso` is null)) union all select `turma`.`idTurma` AS `idTurma`,NULL AS `idCurso`,NULL AS `curso`,`turma`.`ano` AS `ano`,`turma`.`numero` AS `numero`,NULL AS `turma`,NULL AS `idConta`,NULL AS `diretorTurma` from `turma` where (`turma`.`idTurma` in (select `turma_conta`.`idTurma` from (`turma_conta` join `conta`) where ((`turma_conta`.`idConta` = `conta`.`idConta`) and (`conta`.`tipoConta` = 'diretor de turma'))) is false and (`turma`.`idCurso` is null)) order by `turma` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-17 12:05:44
