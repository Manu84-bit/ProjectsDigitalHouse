-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Spotify
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Spotify
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Spotify` DEFAULT CHARACTER SET utf8 ;
USE `Spotify` ;

-- -----------------------------------------------------
-- Table `Spotify`.`Pais`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Pais` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(50) NULL,
  `fecha_nacimiento` DATE NULL,
  `sexo` CHAR(1) NULL,
  `codigo_postal` VARCHAR(45) NULL,
  `pais` VARCHAR(45) NULL,
  `tipo_usuario` VARCHAR(10) NULL,
  `Pais_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Usuario_Pais1_idx` (`Pais_id` ASC) VISIBLE,
  CONSTRAINT `fk_Usuario_Pais1`
    FOREIGN KEY (`Pais_id`)
    REFERENCES `Spotify`.`Pais` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Password`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Password` (
  `idPassword` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(45) NULL,
  `fecha_modificacion` DATE NULL,
  `idUsuario` INT NOT NULL,
  PRIMARY KEY (`idPassword`),
  INDEX `fk_Password_Usuario_idx` (`idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Password_Usuario`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `Spotify`.`Usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Playlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Playlist` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NULL,
  `numero_canciones` INT NULL,
  `estado` TINYINT(1) NULL,
  `fecha_creacion` DATE NULL,
  `fecha_eliminacion` DATE NULL,
  `Usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Playlist_Usuario1_idx` (`Usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_Playlist_Usuario1`
    FOREIGN KEY (`Usuario_id`)
    REFERENCES `Spotify`.`Usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Artista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Artista` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `img` VARCHAR(250) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Discografica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Discografica` (
  `idDiscografica` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NULL,
  `Pais_id` INT NOT NULL,
  PRIMARY KEY (`idDiscografica`),
  INDEX `fk_Discografica_Pais1_idx` (`Pais_id` ASC) VISIBLE,
  CONSTRAINT `fk_Discografica_Pais1`
    FOREIGN KEY (`Pais_id`)
    REFERENCES `Spotify`.`Pais` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Album`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Album` (
  `id` INT NOT NULL,
  `titulo` VARCHAR(100) NULL,
  `anio` YEAR(4) NULL,
  `Artista_id` INT NOT NULL,
  `Discografica_idDiscografica` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Album_Artista1_idx` (`Artista_id` ASC) VISIBLE,
  INDEX `fk_Album_Discografica1_idx` (`Discografica_idDiscografica` ASC) VISIBLE,
  CONSTRAINT `fk_Album_Artista1`
    FOREIGN KEY (`Artista_id`)
    REFERENCES `Spotify`.`Artista` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Album_Discografica1`
    FOREIGN KEY (`Discografica_idDiscografica`)
    REFERENCES `Spotify`.`Discografica` (`idDiscografica`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Cancion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Cancion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NULL,
  `duracion` VARCHAR(45) NULL,
  `reproducciones` INT NULL,
  `likes` INT NULL,
  `Album_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Cancion_Album1_idx` (`Album_id` ASC) VISIBLE,
  CONSTRAINT `fk_Cancion_Album1`
    FOREIGN KEY (`Album_id`)
    REFERENCES `Spotify`.`Album` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Playlist_Cancion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Playlist_Cancion` (
  `id` INT NOT NULL,
  `Playlist_id` INT NOT NULL,
  `Cancion_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Playlist_Cancion_Playlist2_idx` (`Playlist_id` ASC) VISIBLE,
  INDEX `fk_Playlist_Cancion_Cancion1_idx` (`Cancion_id` ASC) VISIBLE,
  CONSTRAINT `fk_Playlist_Cancion_Playlist2`
    FOREIGN KEY (`Playlist_id`)
    REFERENCES `Spotify`.`Playlist` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Playlist_Cancion_Cancion1`
    FOREIGN KEY (`Cancion_id`)
    REFERENCES `Spotify`.`Cancion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Genero`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Genero` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Genero_Cancion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Genero_Cancion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Cancion_id` INT NOT NULL,
  `Genero_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Genero_Cancion_Cancion1_idx` (`Cancion_id` ASC) VISIBLE,
  INDEX `fk_Genero_Cancion_Genero1_idx` (`Genero_id` ASC) VISIBLE,
  CONSTRAINT `fk_Genero_Cancion_Cancion1`
    FOREIGN KEY (`Cancion_id`)
    REFERENCES `Spotify`.`Cancion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Genero_Cancion_Genero1`
    FOREIGN KEY (`Genero_id`)
    REFERENCES `Spotify`.`Genero` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Playlist_Cancion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Playlist_Cancion` (
  `id` INT NOT NULL,
  `Playlist_id` INT NOT NULL,
  `Cancion_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Playlist_Cancion_Playlist2_idx` (`Playlist_id` ASC) VISIBLE,
  INDEX `fk_Playlist_Cancion_Cancion1_idx` (`Cancion_id` ASC) VISIBLE,
  CONSTRAINT `fk_Playlist_Cancion_Playlist2`
    FOREIGN KEY (`Playlist_id`)
    REFERENCES `Spotify`.`Playlist` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Playlist_Cancion_Cancion1`
    FOREIGN KEY (`Cancion_id`)
    REFERENCES `Spotify`.`Cancion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
explain password;