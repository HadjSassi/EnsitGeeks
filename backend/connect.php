<?php
    class DataBase{
        private $host="tsutnnytsu.mysql.db";
        private $db_name="tsutnnytsu";
        private $name="tsutnnytsu";
        private $password="Tsu012345";
        private $conn;
        public function connect(){
            $this->conn=null;
            try{
                $this->conn=new PDO("mysql:host=".$this->host.';dbname'.$this->db_name,$this->name,$this->password);
            }
            catch(PDOException $e)
            {
                printf($e->getMessage());
            }
            
            return $this->conn;
        }

    }
