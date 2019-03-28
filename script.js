$("button").click(function(){
   var ranged= $(".range").val();
   var close= parseInt($(".strength").val());
   
   if(ranged==="close range" && close >=10){
        $(".ant-man").show();
        $(".Thor").hide(); 
        $(".Hawkeye").hide();
        $(".Iron-man").hide();
        $(".Black-widow").hide();
        $(".default").hide();
        $(".hulk").hide();
    }
   else if(ranged==="close range" && close <100){
       $(".Hawkeye").show();
       $(".ant-man").hide();
       $(".Thor").hide();
       $(".Iron-man").hide();
       $(".Black-widow").hide();
       $(".default").hide();
       $(".hulk").hide();
   }
   else if(ranged==="close range" && close >=1000){
        $(".hulk").show();   
        $(".Hawkeye").hide();
        $(".ant-man").hide();
        $(".Thor").hide();
        $(".Black-widow").hide();
        $(".default").hide();
        $(".Iron-man").hide();
    }
   else if(ranged==="close range" && close >=100){
        $(".Thor").show(); 
        $(".Hawkeye").hide();
        $(".Iron-man").hide();
        $(".Black-widow").hide();
        $(".default").hide();
        $(".hulk").hide();
        $(".ant-man").hide();
   }
   else if(ranged==="long range" && close<=100){
        $(".Black-widow").show(); 
        $(".Hawkeye").hide();
        $(".Thor").hide();
        $(".Iron-man").hide();
        $(".default").hide();
        $(".hulk").hide();
        $(".ant-man").hide();
   }
   else if(ranged==="long range" && close >100){
        $(".Iron-man").show();   
        $(".Hawkeye").hide();
        $(".Thor").hide();
        $(".Black-widow").hide();
        $(".default").hide();
        $(".hulk").hide();
        $(".ant-man").hide();
   }
    
   
   else{
        $(".default").show();   
        $(".Hawkeye").hide();
        $(".Thor").hide();
        $(".Iron-man").hide();
        $(".Black-widow").hide();
        $(".ant-man").hide();
   }
});