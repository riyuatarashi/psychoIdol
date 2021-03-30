Create Table score (
	id Serial Unique,
	pseudo varchar(100) NOT NULL,
	score int NOT NULL,
	score_date date NOT NULL,

	primary Key(id)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

Create Table discussion (
	id Serial Unique,
	name varchar(60) Not NULL,
	content text not null,

	primary Key(id)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;