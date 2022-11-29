$(".bar-inner").each(function(){
    $(this).animate({
      width: $(this).parent().attr("data-width")
    },2000)
  });

var c1 = $("#Country1").attr('name');
var c2 = $("#Country2").attr('name');
var c3 = $("#Country3").attr('name');
var c4 = $("#Country4").attr('name');
var c5 = $("#Country5").attr('name');
var c6 = $("#Country6").attr('name');
var c7 = $("#Country7").attr('name');
var c8 = $("#Country8").attr('name');





$(".name1").hover(function(){
  $(".countrytext").text($(".countrytext").text().replace("Country Name:", "Country Name: " + c1));
},function(){
  $(".countrytext").text($(".countrytext").text().replace("Country Name: " + c1, "Country Name:"));
});


$(".name2").hover(function(){
  $(".countrytext").text($(".countrytext").text().replace("Country Name:", "Country Name: " + c2));
},function(){
  $(".countrytext").text($(".countrytext").text().replace("Country Name: " + c2, "Country Name:"));
});


$(".name3").hover(function(){
  $(".countrytext").text($(".countrytext").text().replace("Country Name:", "Country Name: " + c3));
},function(){
  $(".countrytext").text($(".countrytext").text().replace("Country Name: " + c3, "Country Name:"));
});



$(".name4").hover(function(){
  $(".countrytext").text($(".countrytext").text().replace("Country Name:", "Country Name: " + c4));
},function(){
  $(".countrytext").text($(".countrytext").text().replace("Country Name: " + c4, "Country Name:"));
});



$(".name5").hover(function(){
  $(".countrytext").text($(".countrytext").text().replace("Country Name:", "Country Name: " + c5));
},function(){
  $(".countrytext").text($(".countrytext").text().replace("Country Name: " + c5, "Country Name:"));
});


$(".name6").hover(function(){
  $(".countrytext").text($(".countrytext").text().replace("Country Name:", "Country Name: " + c6));
},function(){
  $(".countrytext").text($(".countrytext").text().replace("Country Name: " + c6, "Country Name:"));
});


$(".name7").hover(function(){
  $(".countrytext").text($(".countrytext").text().replace("Country Name:", "Country Name: " + c7));
},function(){
  $(".countrytext").text($(".countrytext").text().replace("Country Name: " + c7, "Country Name:"));
});



$(".name8").hover(function(){
  $(".countrytext").text($(".countrytext").text().replace("Country Name:", "Country Name: " + c8));
},function(){
  $(".countrytext").text($(".countrytext").text().replace("Country Name: " + c8, "Country Name:"));
});






