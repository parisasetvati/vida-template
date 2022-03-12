
// -------------------------------owl-caousel-------------------------
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,

        dots:false,
        // autoplay:true,
        nav:true,
        loop:true,
        margin:10,
        responsive : {
          0 : {
             items:1,
          },
         480 : {
             items:1,
          },
         768 : {
             items:1,
           },
           992:{
             items:1
           },
           1024: {
            items:1
           }
    
         }
        });

        
    });
    // ---------------------------------parcham-------------------------
   $(".country").on('change',function(){
    
    var y= $(":selected").val();
    $(".parcham-img").attr("src","image/"+ y +".png")
  
    
   });
   
  //  -------------------------------------scrolltop-------------------------
  $(".top").click(function(){
    $(this).css("background","#252544");
   
  $('html,body').animate({scrollTop:0},'');
  });