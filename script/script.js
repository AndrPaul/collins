$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $('nav').toggleClass('active');
  });
  $('#toptext').click(function() {
    $('#aboutme').show();
    $('#me').slideDown(1500);
    $('#vlogs').slideDown(1600);
    $('#work').slideDown(1700);
    $('html, body').animate({
      scrollTop: $("#aboutme").offset().top
    }, 1000);
  });

  $('#socfacebook h1').mouseover(function() {
    $('#socfacebook a').animate({
      "paddingLeft": "0%",
    }, 400);
  });
  $('#socinsta h1').mouseover(function() {
    $('#socinsta a').animate({
      "paddingLeft": "0%",
    }, 400);
  });
  $('#socyoutube h1').mouseover(function() {

    $('#socyoutube a').animate({
      "paddingLeft": "0%",
    }, 400);
    $('#video').slideDown(700);


  });

});


$('#year').html(new Date().getFullYear());
