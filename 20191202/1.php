<?php
$host = "01043573052.iptime.org:3306";
$user = "new_stu";
$pw = "00xx";
$dbname = "test";

$mysqli = new mysqli($host, $user, $pw, $dbname);

$name = $_POST[`name`];
$email = $_POST[`email`];
$phone = $_POST[`phone`];
$message = $_POST[`msg`];

$sql = "insert into ljw_table values(`$name`,`$email`,`$phone`,`$message`)";
$result = $mysql->query($sql);
$count = mysqli_num_rows($result);

if($result){
    echo "<script>alert('입력완료되었습니다. 빠른시일내로 연락드리겠습니다.'); location.href='request.html';</script>";
}else{
    echo "<script>alert('다시 입력해주세요'); history.back(-1);</script>";
}
?>