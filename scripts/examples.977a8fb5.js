"use strict";$(".left-nav a").click(function(a){a.preventDefault();var b=$(this).attr("href");$("html,body").animate({scrollTop:$(b).offset().top-70},"slow")}),$(".nav").sidr({side:"right",name:"sidr-right"}),window.onresize=function(){window.innerWidth>480&&$.sidr("close","sidr-right")},$(".navbar").sidr({side:"left",name:"left-nav",displace:!1}),window.onresize=function(){window.innerWidth>480&&$.sidr("close","sidr-right"),window.innerWidth>800?$.sidr("open","left-nav"):$.sidr("close","left-nav")},$("#left-nav").click(function(){window.innerWidth<800&&$.sidr("close","left-nav")}),window.innerWidth>800?$.sidr("open","left-nav"):$.sidr("close","left-nav");