$(".ButOne").click(function()

{
   let age=parseInt($(".InputOne").val());
   let feeling=$(".InputTwo").val();
   
   if(feeling === "calm" && age <13){
       $("div").text("Gary");
       $(".Gary").show();
   }
   else if(feeling === "energtic" && age <13){
       $("div").text("Spongebob");
       $("Spongebob").show();
   }
   else if(feeling === "calm" && age >13){
       $("div").text("SquidWard");
       $(".SquidWard").show();
   }
    else if (feeling === "energetic" && age >13){
        $("div").text("Patrick");
        $(".Patrick").show();
    }
        else{
            $("div").text("This ain't it chief");
        }
    
});
$(".ButTwo").click(function() {
    $("div").hide();
    $("img").hide();
    
});