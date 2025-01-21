class game_object{

    constructor(mode){
        this.mode=mode
        this.start=false
        this.end=false
        this.countdown=9
        this.score=0
        this.game_count=0
        this.keydown="Space"
        this.stats=[]
    } 
    gamecount(){
        this.game_count++
        if(this.game_count==50)
        {
          return true
        }
    }
 }

var game;
function create_game(){
game=new game_object("regular") 
console.log("create")   
}