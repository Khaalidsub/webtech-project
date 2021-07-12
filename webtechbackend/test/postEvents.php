<?php 

require 'db.php';

$title = $_POST["title"];
$start = $_POST["start"];

try {
    $sql = "INSERT INTO event1 (title,start) VALUES (:title,:start)";
    $db = new db();
    // Connect
    $db = $db->connect();
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':title', $title);
    $stmt->bindValue(':start', $start);

    $stmt->execute();
    $count = $stmt->rowCount();
    $db = null;

    $data = array(
        "status" => "success",
        "rowcount" =>$count,
        "title" => $title,
        "start" => $start,
    );
    echo json_encode($data);
} catch (PDOException $e) {
    $data = array(
        "status" => "fail"
    );
    echo json_encode($data);
}

?>