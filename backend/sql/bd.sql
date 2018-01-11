-- MySQL Script generated by MySQL Workbench
-- Thu Dec  7 18:21:33 2017
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Categorie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Categorie` (
  `id` INT NOT NULL,
  `numeCategorie` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Document`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Document` (
  `id` INT NOT NULL,
  `numeDocument` VARCHAR(45) NOT NULL,
  `numarInregistrare` INT NOT NULL,
  `idDoc` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_ID_DOC` FOREIGN KEY (`idDoc`) REFERENCES `Categorie` (`id`) ON DELETE CASCADE ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;