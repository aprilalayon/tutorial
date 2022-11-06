//Javascript or jQuery

//Typing effect 

    $(function(){
        $(".text").typed({
            strings: ["Hi, I am April.",  
                      "Want to improve <br> your online portfolio?",
                      "Learn about Javascript <br> and jQuery.", 
                      "Scroll down to view <br> the demos."],
            typeSpeed: 100,
        
        });
    });

     $(function repeat(){
        $(".intro").typed({
            strings: ["Hello!",
                     "I'm a web-developer."],
            typeSpeed: 100
        
        });
         
         setInterval(repeat,5000);
    });

    $(function repeat(){
        $(".type-tutorial").typed({
            strings: ["Type anything you like."],
            typeSpeed: 100
        
        });
         
         setInterval(repeat,8000);
    });

    $(function repeat(){
        $(".credits").typed({
            strings: ["Credits"],
            typeSpeed: 100
        
        });
         
         setInterval(repeat,10000);
    });



// Timeline script

$('.timeline').timelify({
        animLeft: "fadeInLeft",
		animCenter: "fadeInUp",
		animRight: "fadeInRight",
		animSpeed: 600,
		offset: 150
	});
       
