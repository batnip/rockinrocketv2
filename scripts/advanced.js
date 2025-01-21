class game_object{

    constructor(mode){
     this.mode=mode
     this.stage=0
     this.countdown=9
     this.score=0
     this.game_count=0
     this.keydown="Space"
     this.beat_keys=["8593","8592","8595","8594"]
     this.beat_use=["8593","8592","8595","8594"]
     this.stats=[]
    } 
    gamecount(){
        this.game_count++
        if(this.game_count==20)
        {
          return true
        }
    }
    newkey() {
        if(this.beat_use.length==0){
         this.beat_use=["8593","8592","8595","8594"]
        }
        var index=Math.floor(Math.random() * this.beat_use.length)
        var key=this.beat_use[index];
        this.beat_use.splice(index,1)

        if(key=="8593"){
           this.keydown="KeyW"
        }
        else if(key=="8592"){
           this.keydown="KeyA"
        }
        else if(key=="8595"){
           this.keydown="KeyS"
        }
        else{
           this.keydown="KeyD"
        }
       return String.fromCharCode(key)
     
    }
 }
var game;
function create_game(mode){
game=new game_object(mode)    
}

