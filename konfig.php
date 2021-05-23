<?php
$_SERVER= "localhost";
$_dbuser="root";
$_dbpass = "";
$_dbase = "resm";

$koneksi= mysqli_connect($_SERVER,$_dbuser,$_dbpass,$_dbase);

if(!$koneksi){
    die("<script> alert('Koneksi Gagal')<script>");
}
?>