
nodejs,mysql install

npm i

npm install pm2 -g

cd /back

pm2 start main.js --watch

cd /front

ng serve -o



database

CREATE TABLE `T_USER` (
	`seq` INT(11) NOT NULL AUTO_INCREMENT COMMENT '인덱스',
	`id` VARCHAR(20) NOT NULL COMMENT '아이디',
	`password` VARCHAR(255) NOT NULL COMMENT '비밀번호',
	`created` DATETIME NOT NULL COMMENT '생성날짜',
	PRIMARY KEY (`seq`),
	UNIQUE INDEX `username` (`username`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;
