<?php

if(!empty($_POST)) {
    $dsn = 'mysql:dbname=js_advance;host=localhost;charset=utf8';
    $user = 'root';
    $password = 'root';
    $options = array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::MYSQL_ATTR_USE_BUFFERED_QUERY => true,
    );

    $dbh = new PDO($dsn, $user, $password, $options);

    $stmt = $dbh->prepare('SELECT * FROM users WHERE email = :email');

    $stmt->execute(array(':email' => $_POST['email']));

    $result = 0;

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if(empty($result)) {
        echo json_encode(array(
            'errorFlg' => false,
            'msg' => '未登録です。'
        ));
    } else {
        echo json_encode(array(
            'errorFlg' => true,
            'msg' => 'すでに登録されています。'
        ));
    } 
    exit();
}