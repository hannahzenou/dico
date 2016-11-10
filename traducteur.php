<?php

$mot = $_GET['mot'];

$words = array(
	'Hello' => 'Bonjour',
	'Name' => 'Prenom',
	'Birthday' => 'Anniversaire',
	'Username' => 'Pseudo',
	'Adress' => 'Adresse',
	'Dog' => 'Chien',
	'Cat' => 'Chat',
	'Umbrella' => 'Parapluie',
	'Apple' => 'Pomme'
	);

echo $words[$mot];
