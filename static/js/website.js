
//Bar animation

$(".bar-inner").each(function(){
    $(this).animate({
      width: $(this).parent().attr("data-width")
    },2000)
  });




//Countries

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


//Contact Form


const form = document.getElementById("form");

const res = document.getElementById("sent");


form.addEventListener("submit", function (e) {

  const formData = new FormData(form);
  e.preventDefault();
  var object ={};
  formData.forEach((value,key) => {
    object[key] = value;
  });

  var json = JSON.stringify(object);
  res.innerHTML = "One Second...";

  fetch("https://api.web3forms.com/submit" , {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json

  })
  
  .then(async (response) => {
    let json = await response.json();
    if (response.status == 200) {
      res.innerHTML = json.message;
        res.classList.remove("text-gray-500");
        res.classList.add("text-green-500");
      } else {
        console.log(response);
        res.innerHTML = json.message;
        res.classList.remove("text-gray-500");
        res.classList.add("text-red-500");
      }
  })

  .catch((error) => {
    console.log(error);
    res.innerHTML = "Something went wrong!";
  })

  .then(function () {
    form.reset();
    setTimeout(() => {
      res.style.display = "none";
    }, 5000);
  });
});







