<?php
function Conection(){
   if (!($link=mysql_connect("192.168.0.104","thegameuser","Iwwwagaisppdenmwwygnmwwys")))  {
      exit();
   }
   if (!mysql_select_db("thegamedb",$link)){
      exit();
   }
   return $link;
}
?>