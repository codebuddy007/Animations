var elem = document.querySelectorAll(".cont")
elem.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var bgimg = e.getAttribute("data-img");
        document.querySelector("#pg2").style.backgroundImage = `url(${bgimg})`
      
    })
  
})