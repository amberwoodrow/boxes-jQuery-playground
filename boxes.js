$(function() {
  console.log("hello world");

  // $("#secretBox").css('background-color', 'white');
  // $("#secretBox").html('<h1>"secret box!"</h1>').css("color","pink");
  // $('#row1').children().addClass("boxType3");
  // $('#row4').children().last().css("display","none");
  // $('.boxType1').css("background-color","white");
  // $('#row2').children().slice(0,2).css("display","none");
  // $(".row").children('*:not(#secretBox)').css("width","2px");

  // $("#container").click(function(e) {
  //   console.log('x: ' + e.pageX + ' y: ' + e.pageY);
  // });

  // $( document ).ready(function() {
  //   $( "a" ).click(function( event ) {
  //       alert("NO! No Galvanize website for you!");
  //       event.preventDefault();
  //   });
  // });

  // $(".boxType1").html('<a href="http://www.galvanize.com/">Galvanize</a>');


  $(".box").click(function() {
    //if showing pic
    if ($(this).children('img').length === 1) {
      $(this).html("");
    }
    else {
      var pic = "<img class='img' src='http://www.shenet.org/acadia/tredman/studentwebs2013/7a/cute%20puppy%20site/Cute_Puppy_Hat.jpg'/>";
      $(this).html(pic);
    }
  });

  // $("#container").click(function(event) {
  // if($("#container").is(event.target)) {
  //    $("#container").css("background", "limegreen");
  // }
  // else {
  //   $("#container").css("background", "black");
  //   $(event.target).css("background", "white");
  // }
  // });

});