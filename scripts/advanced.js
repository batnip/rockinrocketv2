class game_object{

    constructor(){
     this.stage=0
     this.countdown=9
     this.score=0
     this.count=0
     this.game_count=0
     this.keydown="Space"
     this.stats=[]
    } 
    gamecount(){
        this.game_count++
        if(this.game_count==20)
        {
          return true
        }
    }
   
 }
var game;
function create_game(){
game=new game_object()    
}

