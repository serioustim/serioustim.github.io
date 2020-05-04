 AOS.init({
      duration:1000,
    });

    $(document).ready(function(){
    $(this).scrollTop(0);
     });


    $(function(){
   var header = $(".upper_nav");
   $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      if(scrollTop >= 100 ){
       header.removeClass('upper_nav').addClass("upper_nav1");
      }else{
       header.removeClass('upper_nav1').addClass("upper_nav");
      }
   });
  });


   $(function () {
  $(window).scroll(function () {
    $(".counter").each(function () {
      var bottom_of_object = 
          $(this).offset().top + $(this).outerHeight();
     var bottom_of_window = 
         $(window).scrollTop() + $(window).height();
      var myVal = $(this).text();
      if(bottom_of_window > bottom_of_object  && $('.counter').text()!=700) {
            $(".counter").countTo();
      }
    });
  });
});

      $(function () {
  $(window).scroll(function () {
    $(".counter1").each(function () {
      var bottom_of_object = 
          $(this).offset().top + $(this).outerHeight();
     var bottom_of_window = 
         $(window).scrollTop() + $(window).height();
      var myVal = $(this).text();
      if(bottom_of_window > bottom_of_object  && $('.counter1').text()!=800) {
            $(".counter1").countTo();
      }
    });
  });
});
         $(function () {
  $(window).scroll(function () {
    $(".counter2").each(function () {
      var bottom_of_object = 
          $(this).offset().top + $(this).outerHeight();
     var bottom_of_window = 
         $(window).scrollTop() + $(window).height();
      var myVal = $(this).text();
      if(bottom_of_window > bottom_of_object  && $('.counter2').text()!=300) {
            $(".counter2").countTo();
      }
    });
  });
}); 