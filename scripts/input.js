var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if(isMobile)
      {
        $("#retry1").empty().append("Press <button class='restart_button'>restart</button> to try again")
        $("#retry2").empty().append("Press <button class='restart_button'>restart</button> to try again")
       
        
      }

document.addEventListener('click', function(event) {
 
      if (event.target.id=="statsButton") {
                loadchart()
                $("#game").hide()
                $("#settings_bar").css("display","none")
                $("#stats").show()
                console.log("stats hit")
      }
      
      if (event.target.className=="new_button") {
                $("#stats").hide()
                $("#menu").hide()
                $("#game").show()
                $("#settings_bar").css("display","flex")
                restart()
      }
      
      if (event.target.id=="settings_button") {
                fade_out()
                $("#settings").css("display","flex")
      }
      if (event.target.id=="settings") {
                fade_in()
                $("#settings").hide()
       }
       if (event.target.className=="restart_button") {
            restart()
       }
     
});

document.addEventListener('mouseover', function(event) {
      if (event.target.id=="info_button") {
            $("#info").css("display","flex")
      }
});
document.addEventListener('mouseout', function(event) {
      if (event.target.id=="info_button") {
            $("#info").css("display","none")
      }
});

function dropdown(){
      var src= $("#beat").val()
      $("#audio").attr("src", src)
}
