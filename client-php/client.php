<?php
// Exercice 1 
$albums = file_get_contents('http://localhost:3001/albums');
echo $albums;

// Exercice 2

$labels = file_get_contents('http://localhost:3001/labels');
echo $labels;
