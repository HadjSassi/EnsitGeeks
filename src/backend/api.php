<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once "connect.php";

class Api{
    private $db;
    private $conn;
    function __construct(){
        $this->db=new DataBase();
        $this->conn=$this->db->connect();

    }
    
    
    
    function getAllMembers(){
        $pre=$this->conn->prepare("SELECT * FROM dashbordGeeks.members");
        $pre->execute();
        
        return $pre->fetchAll();
    }

    
    
    function addNewMembers(){
        $body=file_get_contents("php://input");
        if(!empty($body)&& isset($body))
        {
            $data=json_decode($body,true);
            if($this->search_exif($this->getAllMembers(),$data["mail"],"email")==false){
                if($this->search_exif($this->getAllMembers(),$data["phone"],"phone")==true){
                    return json_encode(["state"=>3]);
                }
                else{
                    if($data["states"]=="old"){
                        $query="INSERT INTO dashbordGeeks.members (`email`, `phone`, `name`, `prename`, `skills`, `states`,`dep`) VALUES ('".$data['mail']."','"
                        .$data['phone']."','".$data['name']."','".$data['prename']."','".$data['skills']."','old','".$data["dep"]."')";
                        $msg="Congratulations <br> Ensit Geeks club informs you that you are officially a member in our Club.<br>Cordially.";
                        if($this->sendMail($data["name"],$data["prename"],$data["mail"],"Registration",$msg)==false)
                        {
                            return json_encode(["state"=>"error"]);
                        }
                    }
                    else{
                        $query="INSERT INTO dashbordGeeks.members (`email`, `phone`, `name`, `prename`, `skills`, `states`,`dep`) VALUES ('".$data['mail']."','"
                        .$data['phone']."','".$data['name']."','".$data['prename']."','".$data['skills']."','pre-inscription','".$data["dep"]."')";
                        if($this->sendMail($data["name"],$data["prename"],$data["mail"],"","")==false)
                        {
                            return json_encode(["state"=>"error"]);
                        }
                    
                    }
                    $pre=$this->conn->prepare($query);
                    $pre->execute();
                    
                    return json_encode(["state"=>1]);
                }
            }
            else {
                return json_encode(["state"=>2]);
            }
        }
    }



    function returnScoreAndStateAndInterviewInfo(){
        $body=file_get_contents("php://input");
        if(!empty($body)&& isset($body))
        {
            $data=json_decode($body,true);
            
            $req="SELECT score,states,salleI,hourInter,dateInter FROM dashbordGeeks.members WHERE email='".$data['mail']."'";
            $pre=$this->conn->prepare($req);
            $pre->execute();
            return json_encode($pre->fetchAll());
        }
        return json_encode(["state"=>"error"]);                
        }


    function updtaeScore(){
        $body=file_get_contents("php://input");
        if(isset($body)&& !empty($body)){
            $data=json_decode($body,true);
            $req="UPDATE dashbordGeeks.members SET `score`='".$data["score"]."' WHERE email='".$data["mail"]."'";
            $pre=$this->conn->prepare($req);
            $pre->execute();        
            return true;
        }
        
        return false;
    }


    function updateforInterview(){
        $body=file_get_contents("php://input");
        if(isset($body)&& !empty($body)){
            $data=json_decode($body,true);
            echo $$data["data"];
            $req="UPDATE dashbordGeeks.members SET `states`='to interview',`salleI`='".$data["data"]["salleI"]."',`hourInter`='".$data["data"]["timeI"]."',`dateInter`='".$data["data"]["dateI"]."' WHERE email='".$data["mail"]."'";
            $pre=$this->conn->prepare($req);
            $pre->execute();
            $msg="Ensit Geeks club informs you that your interview with our manager will be the '".$data["data"]["dateI"]."' at '".$data["data"]["timeI"]."' in the '".$data["data"]["salleI"]."' classroom.<br>
            Please be on time.<br>
            Note: After successfully completing the interview you only have to pay the '' 20d '' registration fee to become an official member of our club.<br>
            Finally we wish you all the best.<br>
            Cordially.<br>
            ";        
            if($this->sendMail($data["name"],$data["prename"],$data["mail"],$msg,"Interview Details"))
            {
                return json_encode(["passe"=>"error"]);
            }
            return json_encode(["passe"=>true,"data"=>$msg]);
        }
        
        return json_encode(["passe"=>false]);
    
    }


    function search_exif($arr, $value,$key)
    {
        foreach ($arr as $data)
        {
            if ($data[$key] == $value)
                return true;
        }
        return false;
    }


    function sendMail($name,$prename,$email,$msg,$Subject){
        date_default_timezone_set('Africa/Tunis');
        $hour = date('H')+1;
        $greeting="";
        $message="";
        if($hour > 18 || $hour < 1) {$greeting='Good Evening';}
        else if($hour>12){$greeting='Good Afternoon';}
        else  {$greeting='Good Morning';}
        $bodyMsg=$msg;
        $subject="";
        $header="MIME-Version: 1.0\r\n";
        $header.='From:"ENSIT Geeks Club"<contact@ensitGeeksclub.com>'."\n";
        $header.='Content-Type:text/html; charset="utf-8"'."\n";
        $header.='Content-Transfer-Encoding: 8bit';
        
        if($msg=="")
        {
            $subject="pre-inscriptizon";
            $bodyMsg="<br>  Congrats you finished the pre-registration successfully   <br>
            <p>Stay tuned you will receive an email for an interview</p>  
            Contact us for more information.<br>
                Cordially.<br>
            ";
        }
        else {
            $subject=$Subject;
            $bodyMsg=$msg;
        }
        
        $message = '
            <html>
            <head>
            <title>Welcome</title>
            <meta charset="utf-8" />
            </head>
                <body style="font: small/ 1.5 Arial,Helvetica,sans-serif;">
                <div style="max-width:602px;margin:0 auto;background:#f6f7f9;padding:20px;box-sizing: border-box;"  bgcolor="#f6f7f9">
                    <div style="width:100%;height:30px;display:flex;margin-bottom: 30px;">
                        <div style="display:flex;align-items: center;height:100%;margin-left:10px;font-size:20px;font-weight: bold;">ENSIT Geeks Club</div>
                    </div>
                    <div style="width:100%;background:white;box-sizing: border-box;padding:30px;">
                        <b>'.$greeting.' Dear '.$name.' '.$prename.',</b><br><br>'.$bodyMsg.' </div>
                    <br>
                </div>
                </body>  
        </html>';
        if(mail($email, $subject, $message, $header)==false || mail("abderrazek455@gmail.com", $subject, $message, $header)==false || mail("ensitgeeksclub@gmail.com", $subject, $message, $header)==false)
            {
                return false;
            }
        return true;

    
    }


    function login(){
        $body=file_get_contents("php://input");
        if(!empty($body)&& isset($body))
        {
            $data=json_decode($body,true);
            if($data["mail"]=="ensitgeeksclub@gmail.com"&& $data["password"]=="EnsitGeeksClub/2022")
            {
                return json_encode(["token"=>rand(10000,99999)]);
            }
            else{
                return json_encode(["token"=>0]);
            }
        }
    }
    

    function sendMailsForManyPeople(){
        $body=file_get_contents("php://input");
        if(!empty($body)&& isset($body))
        {
            $data=json_decode($body,true);
            
            foreach($data["data"] as $information)
            {
                if($this->sendMail($information["name"],$information["prename"],$information["email"],$data["email"],$data["subject"])==false){
                    return json_encode(["sendMany"=>"error"]);
                }
                
            }
            return json_encode(["sendMany"=>"success"]);
        }
    }

    function sendEmailAndUpdateState(){
        $body=file_get_contents("php://input");
        if(!empty($body)&& isset($body))
        {
            $data=json_decode($body,true);
            if($this->sendMail($data["name"],$data["prename"],$data["email"],$data["body"],$data["subject"])==false){
                return json_encode(["send"=>"error"]);
            }
            else{
                if($data["states"]=="to interview")
                {
                    $req="UPDATE dashbordGeeks.members SET `states`='passe interview(not payed)' WHERE email='".$data["email"]."'";
                    $pre=$this->conn->prepare($req);
                    $pre->execute();
                }
                else if($data["states"]=="passe interview(not payed)"){
                    $req="UPDATE dashbordGeeks.members SET `states`='member(payed)' WHERE email='".$data["email"]."'";
                    $pre=$this->conn->prepare($req);
                    $pre->execute();
                }
                return json_encode(["send"=>"success"]);

            }

        }
    }


    function allEvents(){
        $sql="SELECT * FROM dashbordGeeks.event";
        $pre=$this->conn->prepare($sql);
        $pre->execute();
        return json_encode($pre->fetchAll());
    } 



    function openEvents(){
        $sql="SELECT * FROM dashbordGeeks.event WHERE '".date('y-m-d')."' BETWEEN dateouvert AND dateferme";
        $pre=$this->conn->prepare($sql);
        $pre->execute();
        return json_encode($pre->fetchAll());
    } 

    function newEvent(){
        $body=file_get_contents("php://input");
        if(!empty($body)&& isset($body))
        {
            $data=json_decode($body,true);
            if($this->notExistEvent($data["nameE"]))
            {
                $sql="INSERT INTO dashbordGeeks.event (`name`, `dateouvert`, `dateferme`, `max`, `description`,`type`) VALUES ('".$data["nameE"]."','".
                $data["dateouvert"]."','".$data["dateferme"]."','".$data["max"]."','".$data["detail"]."','".$data["options"]."')";
                $pre=$this->conn->prepare($sql);
                $pre->execute();
                return json_encode(["insertE"=>true]);
            }
            return json_encode(["insertE"=>"already exist"]);
        }
        return json_encode(["insertE"=>false]);

    }


    function notExistPersonForEvent($email,$event){
        $sql="SELECT * FROM  dashbordGeeks.eventdetails where email='".$email."' and "."event='".$event."'";
        $pre=$this->conn->prepare($sql);
        $pre->execute();
        $data=$pre->fetchAll();
        if(count($data)==0)
        {
            return true;
        }
        return false;
    }

    function notExistEvent($event){
        $sql="SELECT * FROM  dashbordGeeks.event where name='".$event."'";
        $pre=$this->conn->prepare($sql);
        $pre->execute();
        $data=$pre->fetchAll();
        if(count($data)==0)
        {
            return true;
        }
        return false;
    }
    function compareMaxToInscriptions($event)
    {
        $sql="SELECT * FROM ensitgsgeeks.eventdetails WHERE event='".$event."'";
        $pre=$this->conn->prepare($sql);
        $pre->execute();
        $data=$pre->fetchAll();
        $sql="SELECT max,type FROM ensitgsgeeks.event WHERE name='".$event."'";
        $pre=$this->conn->prepare($sql);
        $pre->execute();
        $max=intval($pre->fetchAll()[0]["max"]);
        $type=$pre->fetchAll()[0]["type"];
        if(count($data)<$max){
            return [true,$max,$type,$data];
        }
        return [false,$max,$type,$data];
    }

    function inscription()
    {
        $body=file_get_contents("php://input");
        if(!empty($body)&& isset($body))
        {
            $data=json_decode($body,true);
            if($this->notExistPersonForEvent($data["email"],$data["nameE"]) )
            {
                $d=[];
                $d=$this->compareMaxToInscriptions($data["nameE"]);
                if($this->compareMaxToInscriptions($data["nameE"])[0]==true)
                {
                    $sql="INSERT INTO ensitgsgeeks.eventdetails (`name`, `prenom`, `email`, `event`) VALUES ('".$data["name"]."','".
                    $data["prename"]."','".$data["email"]."','".$data["nameE"]."')";
                    $pre=$this->conn->prepare($sql);
                    $pre->execute();
                    if($d[2]=="event")
                    {
                     $type="event";
                    }
                    else{
                     $type="training";
                    }
                    $msg="Your participation in our ".$data["nameE"]." ".$type." is successfully received<br>
                                        Contact us for any other information.<br>Cordially.<br> ";

                    if ( $this->sendMail($data["name"],$data["prename"],$data["email"],$msg,"Inscription in ".$data["nameE"]) )
                    {
                        return json_encode(["insertPforE"=>"succ",$d]);
                    }    
                }
                else{
                    return json_encode(["insertPforE"=>"no place"]);
                }
            }
            else{
                return json_encode(["insertPforE"=>"exist"]);
            }
        
        return json_encode(["insertPforE"=>false]);
    }
}


    function existInpole($email)
    {
        $sql="select * from dashbordGeeks.pole where email= '".$email."'";
        $pre=$this->conn->prepare($sql);
        $pre->execute();
        $nb=count($pre->fetchAll());
        if($nb==0)
        {
            return true;
        }            
        else{
            return false;
        }
    
    }


    function addNewMemberToPole(){
        $body=file_get_contents("php://input");
        if(!empty($body)&& isset($body))
        {
            $data=json_decode($body,true);
            if($this->existInpole($data["email"]))
                {
                    $sql="INSERT INTO dashbordGeeks.pole (`name`, `prenom`, `email`,`phone`,`pole`) VALUES ('".$data["name"]."','".
                    $data["prename"]."','".$data["email"]."','".$data["phone"]."','".$data["pole"]."')";
                    $pre=$this->conn->prepare($sql);
                    $pre->execute();
                    $msg="
                        <br>  Congrats you are affected to the pole ".$data["pole"]."successfully   <br>  
                        Contact us for more information.<br>
                        Cordially.<br>
                    ";
                    if($this->sendMail($data["name"],$data["prename"],$data["email"],$msg,"Geeks Hack Poles")){
                        return json_encode(["pole"=>"succ"]);
                    }
                    return json_encode(["pole"=>"errorEmail"]);

                }
                return json_encode(["pole"=>"exist"]);
        }
        return json_encode(["pole"=>"error"]);
    }

    function personsByEvent(){
        $body=file_get_contents("php://input");
        if(!empty($body)&& isset($body))
        {
            $data=json_decode($body,true);
            $sql="SELECT * FROM dashbordGeeks.eventdetails WHERE event='".$data["event"]."'";
            $pre=$this->conn->prepare($sql);
            $pre->execute();
            $data=$pre->fetchAll();
            return json_encode($data);
        }   
        return json_encode(["errer"=>true]);
    }

    function getMembersByPoles(){
        $sqlMedia="SELECT * FROM dashbordGeeks.pole WHERE pole='media'";
        $sqlSponsoring="SELECT * FROM dashbordGeeks.pole WHERE pole='sponsoring'";
        $sqlLogistique="SELECT * FROM dashbordGeeks.pole WHERE pole='logistique'";
        $sqlMarketing="SELECT * FROM dashbordGeeks.pole WHERE pole='marketing'";
        $pre=$this->conn->prepare($sqlMedia);
        $pre->execute();
        $media=$pre->fetchAll();
        $pre=$this->conn->prepare($sqlSponsoring);
        $pre->execute();
        $sponsoring=$pre->fetchAll();
        $pre=$this->conn->prepare($sqlLogistique);
        $pre->execute();
        $logistique=$pre->fetchAll();
        $pre=$this->conn->prepare($sqlMarketing);
        $pre->execute();
        $marketing=$pre->fetchAll();
        return json_encode(["media"=>$media,"sponsoring"=>$sponsoring,"logistique"=>$logistique,"marketing"=>$marketing]);
    }

}   