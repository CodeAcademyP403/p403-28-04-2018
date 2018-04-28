$(document).ready(function(){

    // $("button").click(function(){
    //     $(this).animate({
    //         "backgroundColor":"red",
    //         "color":"black",
    //         "fontSize":"2em"
    //     }, 1000).find("span").fadeOut();
    // })

    // $(".main").click(function(e){
    //     $(".content").slideUp();
    //     $(this).next().slideDown(1000);
    // })

    $(window).scroll(function(){
        
        if(($(".wrapper2").offset().top - ($(this).scrollTop() + $(this).height())) < 200){
            $(".wrapper2").animate({
                "top":"0px"
            }, 1500);
        }

        if(($(".wrapper3").offset().top - ($(this).scrollTop() + $(this).height())) < 200){
            $(".wrapper3").animate({
                "top":"0px",
                "left":"0px"
                
            }, 1500);
        }
    })

    $(document).click(function(e){
        var div = $("<div>");
        div.css({
            "position": "absolute",
            "top": e.pageY - 150 + "px",
            "left": e.pageX - 150 + "px",
            "width": "300px",
            "height": "300px",
            "backgroundColor": "teal",
            "borderRadius": "100%"
        }).appendTo($("body"));

    })

});