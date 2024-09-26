var crsr=document.querySelector("#cursor")
var crsrblr=document.querySelector("#cursorblur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    crsrblr.style.left=dets.x -250+"px"
    crsrblr.style.top=dets.y -250+"px"
})





gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }

})


gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#aboutus img, #aboutusin h3",{
    y:50,
    opacity:0,
    duration:1,
    stragger:0.4,
    scrollTrigger:{
trigger:"#aboutus",
scroller:"body",
start:"top 70%",
end:"top 65%",
scrub:3
    }
})

gsap.from(".card",{
    y:50,
    scale:0.8,
    opacity:0,
    duration:1,
    stragger:1,
    scrollTrigger:{
trigger:".card",
scroller:"body",
start:"top 70%",
end:"top 65%",
scrub:3
    }
})


gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

