var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


document.addEventListener('click', function(event) {
 
      if (event.target.id=="statsButton") {
                loadchart()
                $("#game").hide()
                $("#stats").show()
                console.log("stats hit")
      }
      
      if (event.target.id=="new_button") {
                $("#stats").hide()
                $("#game").show()
                restart()
                
      }
      console.log(event.target.className)
      if (event.target.classList.contains("menu_button")==true) {
                $("#game").hide()
                $("#settings").hide()
                $("#stats").hide()
                $("#menu").show()
      }
      if (event.target.id=="settings_button") {
                  fade_out()
                  if(game.mode=="advanced"){
                        $("#arrow_settings").show()  
                  }
                  else{
                        $("#arrow_settings").hide()  
                  }
                $("#settings").css("display","flex")
      }
      if (event.target.id=="settings") {
                fade_in()
                $("#settings").hide()
       }
       if (event.target.className=="restart_button") {
            console.log("restart")
            restart()
       }
      if (event.target.className=="mode_button") {
                
                var mode=event.target.dataset.value 
                if(isMobile)
                {
                  $("#retry1").empty().append("Press <button class='restart_button'>restart</button> to try again")
                  $("#retry2").empty().append("Press <button class='restart_button'>restart</button> to try again")
                 
                  if(mode=="advanced"){
                        $('#mobile').show()
                  } 
                  else{
                        $('#mobile').hide()
                  }
                }
                
                console.log(mode)
                $("#menu").hide()
                $('#game').show()
                create_game(mode)
                restart()
                
      }
      
     
      

});

function dropdown(){
      var src= $("#beat").val()
      $("#audio").attr("src", src)
}
