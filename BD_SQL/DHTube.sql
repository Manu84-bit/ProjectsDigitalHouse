-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema DHTube
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema DHTube
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `DHTube` DEFAULT CHARACTER SET utf8 ;
USE `DHTube` ;

-- -----------------------------------------------------
-- Table `DHTube`.`avatar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`avatar` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `URL` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`Usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(120) NULL,
  `email` VARCHAR(50) NULL,
  `password` VARCHAR(45) NULL,
  `fecha_nacimiento` DATE NULL,
  `pais` VARCHAR(45) NULL,
  `cod_postal` VARCHAR(45) NULL,
  `avatar_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Usuario_avatar_idx` (`avatar_id` ASC) VISIBLE,
  CONSTRAINT `fk_Usuario_avatar`
    FOREIGN KEY (`avatar_id`)
    REFERENCES `DHTube`.`avatar` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`estado_publicacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`estado_publicacion` (
  `id` INT NOT NULL,
  `descripcion_estado` CHAR(7) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`videos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`videos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(100) NULL,
  `descripcion` TEXT(250) NULL,
  `tamano` DOUBLE NULL,
  `nombre_archivo` VARCHAR(45) NULL,
  `duracion` INT NULL,
  `num_likes` INT NULL,
  `num_dislikes` INT NULL,
  `Usuario_id` INT NOT NULL,
  `estado_publicacion_id` INT NOT NULL,
  `fecha_publicacion` DATETIME NULL,
  `num_reproducciones` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_videos_Usuario1_idx` (`Usuario_id` ASC) VISIBLE,
  INDEX `fk_videos_estado_publicacion1_idx` (`estado_publicacion_id` ASC) VISIBLE,
  CONSTRAINT `fk_videos_Usuario1`
    FOREIGN KEY (`Usuario_id`)
    REFERENCES `DHTube`.`Usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_videos_estado_publicacion1`
    FOREIGN KEY (`estado_publicacion_id`)
    REFERENCES `DHTube`.`estado_publicacion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`etiqueta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`etiqueta` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`canal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`canal` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `descripcion` TEXT(250) NULL,
  `fecha_creacion` DATETIME NULL,
  `Usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_canal_Usuario1_idx` (`Usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_canal_Usuario1`
    FOREIGN KEY (`Usuario_id`)
    REFERENCES `DHTube`.`Usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`reacciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`reacciones` (
  `id` INT NOT NULL,
  `descripcion` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`playlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`playlist` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `fecha_creacion` DATETIME NULL,
  `estado_publicacion_id` INT NOT NULL,
  `Usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_playlist_estado_publicacion1_idx` (`estado_publicacion_id` ASC) VISIBLE,
  INDEX `fk_playlist_Usuario1_idx` (`Usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_playlist_estado_publicacion1`
    FOREIGN KEY (`estado_publicacion_id`)
    REFERENCES `DHTube`.`estado_publicacion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_playlist_Usuario1`
    FOREIGN KEY (`Usuario_id`)
    REFERENCES `DHTube`.`Usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`video_reaccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`video_reaccion` (
  `reacciones_id` INT NOT NULL,
  `videos_id` INT NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha_reaccion` DATETIME NULL,
  `Usuario_id` INT NOT NULL,
  INDEX `fk_video_reaccion_reacciones1_idx` (`reacciones_id` ASC) VISIBLE,
  INDEX `fk_video_reaccion_videos1_idx` (`videos_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  INDEX `fk_video_reaccion_Usuario1_idx` (`Usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_video_reaccion_reacciones1`
    FOREIGN KEY (`reacciones_id`)
    REFERENCES `DHTube`.`reacciones` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_video_reaccion_videos1`
    FOREIGN KEY (`videos_id`)
    REFERENCES `DHTube`.`videos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_video_reaccion_Usuario1`
    FOREIGN KEY (`Usuario_id`)
    REFERENCES `DHTube`.`Usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`videos_playlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`videos_playlist` (
  `id` INT NOT NULL,
  `videos_id` INT NOT NULL,
  `playlist_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_videos_playlist_videos1_idx` (`videos_id` ASC) VISIBLE,
  INDEX `fk_videos_playlist_playlist1_idx` (`playlist_id` ASC) VISIBLE,
  CONSTRAINT `fk_videos_playlist_videos1`
    FOREIGN KEY (`videos_id`)
    REFERENCES `DHTube`.`videos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_videos_playlist_playlist1`
    FOREIGN KEY (`playlist_id`)
    REFERENCES `DHTube`.`playlist` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`video_etiqueta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`video_etiqueta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `videos_id` INT NOT NULL,
  `etiqueta_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_video_etiqueta_videos1_idx` (`videos_id` ASC) VISIBLE,
  INDEX `fk_video_etiqueta_etiqueta1_idx` (`etiqueta_id` ASC) VISIBLE,
  CONSTRAINT `fk_video_etiqueta_videos1`
    FOREIGN KEY (`videos_id`)
    REFERENCES `DHTube`.`videos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_video_etiqueta_etiqueta1`
    FOREIGN KEY (`etiqueta_id`)
    REFERENCES `DHTube`.`etiqueta` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
