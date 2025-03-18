
var game=document.getElementById("game");
var light=document.getElementById("lightning");
var total=document.getElementById("score")
var retry=document.getElementById("retry");
var win=document.getElementById("win");
var cloud1=document.getElementById("right_cloud");
var cloud2=document.getElementById("left_cloud");
var rocket=document.getElementById("rocket");
var rcontainer=document.getElementById("rocket_container");
var pulse=document.getElementById("pulse2");
var takeoff=document.getElementById("takeoff")
var audio=document.getElementById("audio") //dont need dom object
var points=document.getElementById("points")
var practice_toggle=document.getElementById("practice_toggle")
var platform=document.getElementById("platform")
var stats=document.getElementById("stats")
var audioTimeout;
var time1=null;
var time2=null;
var dif=null;
var cor=0
var addi=0
let timer;


function startStage() {
      
  gark=countdown

}

 
   
document.addEventListener('keydown', function(event) {
  
  if (event.code!="") {
    gark()
  }
    
 
});
document.addEventListener('keydown', function(event) {

  if(event.code == "Enter") {
    $("#stats").hide()
    $("#menu").hide()
    $("#settings_bar").css("display","flex")
    $("#game").show()
    restart()
  }

});



game.onclick = function(){
  
  gark() 
  
}

function main(){
      
     
     
      if(time()!=true){return}
      if(game.gamecount()==true)
      {
        finish()
        game_end()
        
      }
      else{
        rocket_pulse();
      }
      clearTimeout(timer)
     
      timer=setTimeout(check_press, 650);
      
}


function countdown(){
  

 
  
  if (game.countdown==0){
    clearTimeout(audioTimeout)
    game.stage=1
    gark=main
 
    time()
    takeoff.style.display="none"
    
    if(practice_toggle.checked==false)
    {
      fade_out()
    }
    
 
    
    cloud_animate()
    rocket_takeoff()
    launchpad()
  }
  else{
     audioCount()
     setAnimation(takeoff,"takeoff")
     takeoff.innerText=game.countdown
     game.countdown-=1
     
  }
   
  
 
}
function audio_switch(){
  if(audio.volume==1)
  {
    audio.volume=0
  }
  else{
    audio.volume=1
  }
}



function fade_in(){
  if(game.stage!=2)
    {
      audio.volume=0
      audio.play()
      $('#audio').animate({volume: 0.500}, 1500,"linear");
    }
}

function fade_out(){
  //$('#audio').animate({volume: 0.5}, 100,"linear");
  $('#audio').animate({volume: 0.00}, 500,"linear");
}

function audioCount(){
  clearTimeout(audioTimeout)
  var countdown=game.countdown
  audioTimeout=setTimeout(function() {
    if(game.countdown+1==countdown){
      //fade_out()
      game.countdown=9
      takeoff.className=""
      takeoff.offsetWidth
      takeoff.innerText="tap along to the beat"
      takeoff.style.display="block" 
  
    }
  }, 5000);
}

function score_func(p){


  var sub=p-16

  if(sub>=0){ 
  if(100-sub>0)
  {      
  game.score+=100-sub
  points.innerText="+"+(100-sub) +" "
  }
  }
  else{
    game.score+=100
    points.innerText="+100 "
  }

  total.innerText=game.score+" ft"
  points.style.display="block"
  setAnimation(points,"points")
}

points.addEventListener("animationend", (event) => { points.style.display="none"});

function restart(){
  
  time1=null;
  time2=null;
  dif=null;
 

  create_game()


  startStage()
  takeoff.className=""
  takeoff.offsetWidth
  takeoff.innerText="tap along to the beat"
  takeoff.style.display="block" 


  fade_in()
  total.style.top="0%"
  total.innerText=game.count +" ft"
  pulse.style.animationIterationCount=0
  pulse.className="thruster"
  pulse.style.display="block"
  win.style.display="none"
  retry.style.display="none"
  setAnimation(rcontainer,"rocket_container rocket_launch paused")
  setAnimation(rocket,"rocket")
  setAnimation(cloud1,"cloud")
  setAnimation(cloud2,"cloud")
  cloud1.style.animationPlayState="paused"
  cloud2.style.animationPlayState="paused"
  setAnimation(platform,"platform paused")
  
  
}


function check_press(){
 
  if(game.stage==1){
   game_end()
   loss() 
  }
}
function time(){
  var cont=true
  
  time1=Date.now()

  
      if(time2!=null){
        dif=Math.abs(time1 - time2)
        score_func(Math.abs(dif - 500))
        game.stats.push(dif - 500)
        if(dif>addi){
          cor=dif

          addi=dif
          //console.log(cor)
        }
        
        if(Math.abs(dif - 500)>100)
        { game_end()
          loss()
          cont=false
        }
      
      }
      
      time2=time1
    return cont

}

//DOM ELEMENT FUNCTIONS BELOW


function lightning(){
  light.style.display="block"
  rocket.style.filter="drop-shadow(0px 0px 10px rgb(255, 255, 255))"
  document.body.style.background=" #6d6c70"
  setTimeout(() => {
    light.style.display="none"
    rocket.style.filter="drop-shadow(20px 20px 5px rgba(0, 0, 0, 0.24))"
    document.body.style.background="#3d3b46"
  }, 100);

}

function loss(){
 
  lightning()
  lose_animation()
  
}
function game_end(){
  
  gark=null
  game.stage=2
  fade_out()
}

function finish(){
  total.style.top="30%"
  win.style.display="block"
  setAnimation(pulse,"thruster_win")
  setAnimation( rcontainer,"rocket_container rocket_win")
}

function lose_animation(){
  cloud1.style.animationPlayState="paused"
  cloud2.style.animationPlayState="paused"
  retry.style.display="block"
  pulse.style.display="none"
  rcontainer.style.animationIterationCount=1
  setAnimation( rcontainer,"rocket_container rocket_death")

}

function launchpad(){

  platform.className="platform play"
}
function rocket_takeoff(){
  /*pulse.className=""
  pulse.offsetWidth
  pulse.className="thruster_launch" */
  pulse.style.animationIterationCount=1
  setAnimation(pulse,"thruster")
  pulse.style.display="block"
  setAnimation(rcontainer,"rocket_container rocket_launch")

 
}

function rocket_pulse(){
  
      pulse.style.animationIterationCount=1
      setAnimation(pulse,"thruster")
      pulse.style.display="block"
      console.log("pulse")
      setAnimation(rocket,"rocket rocket_go")
      

}
function cloud_animate(){
      cloud1.style.animationPlayState="running"
      setTimeout(() => {
         if(game.stage==1){
          cloud2.style.animationPlayState="running"
         }
        }, 2500);
      
}                 


function setAnimation(x,y){
  x.className=""
  x.offsetWidth
  x.className=y
}