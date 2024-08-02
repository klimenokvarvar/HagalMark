let comp= Math. floor(Math.random()*5);
//console.log(comp);
let gameUser=true;
function choise(user){
   if(gameUser==true){
      document.getElementById("box"+user).style.animation= "shake 0.5s 5";
      setTimeout(function(){
         if(comp==user){
            document.getElementById("box"+user).src ="lkj/pic.jpg";
            document.getElementById("restartButton").style.display="flex";
            document.getElementById("textHello").style.display="none";
            document.getElementById("textWinner").style.display="block";
        }
         else{
            document.getElementById("box"+user).src ="lkj/lkj.jpg";
            document.getElementById("restartButton").style.display="flex";
            document.getElementById("textHello").style.display="none";
            document.getElementById("textLooser").style.display="block";
         }
      }, 3000)
    
     gameUser=false;
   }  
}
function reloadgame(){
    location.reload();
  }
