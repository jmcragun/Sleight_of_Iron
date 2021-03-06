CREATE TABLE Character_data_table
(
Char_id int,
User_name varchar(25),
Health int,
Stamina int,
Mana int,
Gender varchar(6),
Race varchar(16),
Eye_color varchar(8),
Hair_color varchar(8),
Strength int,
Agility int,
Dexterity int,
Wisdom int,
Faith int,
Endurance int,
Intelligence int,
Luck int,
Mysterium int,
Personality int,
Main_hand varchar(60),
Off_hand varchar(60),
Gold varchar(10000000)
Attack_rating int,
Physical_defense int,
Mystic_attack int,
Mystic_defense int,
Priority_Points int,
Action_deduction int,
Training_affinity int,
Magic_affinity int,
Critical_chance int,
Magic_critical_chance int,
Skill_points int,
intimidation int,
perception int,
persuasion int,
pickpocket int,
stealth int,
survival int,
blade int,
blunt int,
one_handed int,
two_handed int,
light_armor int,
heavy_armor int,
block int,
dodge int,
brawler int,
archery int,
marskman int,
throwing int,
divination int,
restoration int,
covenant int,
pyromancy int,
hydromancy int,
aeromancy int,
geomancy int,
electromancy int,
chronomancy int,
skeptomancy int,
necromancy int,
conjuration int,
fysomancy int,
arcanomancy int,
fitness int,
armorer int,
weapon_crafter int,
alchemy int,
engineering int,
tactics int,
tracking int,
looter int,
barter int,
leadership int,
deception int
);
CREATE TABLE USER_LOGIN_INFO
(
account_user_name varchar(25),
account_email varchar(40),
account_password varchar(50)
);