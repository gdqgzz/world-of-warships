set NAMES UTF88;
DROP DATABASE IF EXISTS world_of_warships;
CREATE database world_of_warships CHARSET=UTF8;
use world_of_warships;
create table leaderboard(
    said INT,
    ename varchar(14),
    region varchar(2),
    win_rate varchar(5),
    efficiency varchar(8),
    damage INT,
    _kill varchar(4),
    experience INt
);
