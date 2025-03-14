function loadchart(){
        var total=0
        var chart=document.getElementById("chart")
        var delay=document.getElementById("delay")
        $("#svg_container").empty()
        var svgns = "http://www.w3.org/2000/svg";
        var svg=document.createElementNS(svgns,"svg")
        svg.setAttribute('width',"100%")
        svg.setAttribute('height',"300px") 
        
        var y=0
        var numbers=game.stats.map(num => Math.abs(num));

        for(var i=0;i<game.stats.length;i++)
        {
        
        var stats=game.stats[i]  
        total=total+numbers[i]  
        var div=document.createElement("div")
        var g=document.createElementNS(svgns,"g")
        g.setAttribute("value",stats);
        var rect1=document.createElementNS(svgns,"rect")
        rect1.setAttribute("class","rectangl");
        rect1.setAttribute('fill',"transparent")
        rect1.setAttribute('width','100vw')
        rect1.setAttribute('height',8)
        rect1.setAttribute('x',0)
        rect1.setAttribute('y', y)
        var rect=document.createElementNS(svgns,"rect")
        rect.setAttribute("class","rectangle");
        rect.setAttribute('fill','rgb(255,255,255,1)')
        rect.setAttribute('width',Math.abs(stats)/2+"%")
        rect.setAttribute('min-width',Math.abs(stats))
        rect.setAttribute('height',8)
        rect.setAttribute('x', "50%")
        rect.setAttribute('y', y)
        if(stats<0){
            rect.setAttribute('x', (100+stats)/2+"%")
               // rect.setAttribute('transform','translate('+stats*3+',0)')  
            }
        g.appendChild(rect1)
        g.appendChild(rect)
        svg.appendChild(g)
        y+=15

        }
        $("#svg_container").append(svg)
       // $("#chart").append("#svg_container")
        
        
        var min=numbers.indexOf(Math.min.apply( Math, numbers))
        var max=numbers.indexOf(Math.max.apply( Math, numbers))
        $("#stats_score").text(game.score+" ft")
        $("#min").text(game.stats[min] +"ms")
        $("#average").text(total/numbers.length +"ms")
        $("#max").text(game.stats[max] +"ms")

        var g=document.getElementsByTagNameNS(svgns,"g")
        for(let i=0;i<g.length;i++)
        {
            if(!isMobile){

            
                g[i].onmouseover=function(){
                    
                    delay.innerText=g[i].getAttribute("value")+"ms"
                    
                    $(g[i]).find('.rectangl').css('fill','rgb(255,255,255,.2)')
                
                }

                g[i].onmouseout=function(){
                    $(g[i]).find('.rectangl').css('fill','transparent')
                    
                    
                }
            }
            
            else{
                    g[i].addEventListener('touchstart', function(event) {
                        delay.innerText=g[i].getAttribute("value")+"ms"
                        
                        $(g[i]).find('.rectangl').css('fill','rgb(255,255,255,.2)')
                    
                    });

                    
                    
                    g[i].addEventListener('touchend', function(event) {
                        $(g[i]).find('.rectangl').css('fill','transparent')
                    
                    });

                }
        }
}
