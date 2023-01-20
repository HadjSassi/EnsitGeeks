<?php
    class DataBase{
        private $host="localhost";
        private $db_name="dashbordGeeks";
        private $name="root";
        private $password="dashbordGeeks";
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