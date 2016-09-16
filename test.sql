-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Сен 16 2016 г., 23:08
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `test`
--

-- --------------------------------------------------------

--
-- Структура таблицы `country`
--

CREATE TABLE IF NOT EXISTS `country` (
  `id_country` int(3) NOT NULL AUTO_INCREMENT,
  `country` varchar(50) NOT NULL,
  PRIMARY KEY (`id_country`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Дамп данных таблицы `country`
--

INSERT INTO `country` (`id_country`, `country`) VALUES
(1, 'Россия'),
(2, 'США'),
(3, 'Великобритания'),
(4, 'Бразилия'),
(5, 'Китай');

-- --------------------------------------------------------

--
-- Структура таблицы `message`
--

CREATE TABLE IF NOT EXISTS `message` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `login` varchar(50) NOT NULL,
  `message` text NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Дамп данных таблицы `message`
--

INSERT INTO `message` (`id`, `login`, `message`, `date`) VALUES
(1, 'admin', 'первое сообщение', '2016-09-16 21:28:02'),
(2, 'admin', 'второе сообщение', '2016-09-16 21:28:10'),
(3, 'admin', 'какое то сообщение', '2016-09-16 21:36:47');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `fio` varchar(50) NOT NULL,
  `login` varchar(50) NOT NULL,
  `country` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `tel` varchar(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `fio`, `login`, `country`, `email`, `tel`, `password`) VALUES
(1, 'Главатских Антон Алексеевич', 'admin', 'Россия', 'aglavatskih87@gmail.com', '89090010500', 'e388f02f750e65ebba95ab9493cda01eb3p6f');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
