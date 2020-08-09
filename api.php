<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

const HOST = 'localhost:3308';
const DB = 'pictagram';
const USER = 'root';
const PASSWORD = '';

$db = new PDO('mysql:host=' . HOST . ';dbname=' . DB . ';charset=utf8', USER, PASSWORD);
$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

if (isset($_GET['tag']) && $_GET['tag']) {
  $query = $db->prepare('SELECT * FROM posts WHERE tags LIKE :tag OR title LIKE :tag');
  $query->bindValue('tag', '%' . $_GET['tag'] . '%', PDO::PARAM_STR);
  $query->execute();
} else {
  $query = $db->query('SELECT * FROM posts');
}

$posts = $query->fetchAll();

echo json_encode($posts);
