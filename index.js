

$(".first-button").click(function(){
  var inputValue= $("#Tip-value").val();
    var numOfPerson= $("#numOfPerson").val();
    var total=inputValue*5/100;
    $(".first-button").fadeIn(100).fadeOut(100).fadeIn(100);
    $('.calc-h').text((inputValue*5/100).toFixed(2) + "$");
    if (numOfPerson==0) {
    $('.calc-h1').text((inputValue*5/100).toFixed(2) + "$");
    }
    else {
      $('.calc-h1').text((total * numOfPerson).toFixed(2) + "$");
    }
});

$(".second-button").click(function(){
  var inputValue= $("#Tip-value").val();
  var numOfPerson= $("#numOfPerson").val();
  var total=inputValue*10/100;
  $(".second-button").fadeIn(100).fadeOut(100).fadeIn(100);
   $('.calc-h').text((inputValue*10/100).toFixed(2) + "$");
  if (numOfPerson==0) {
  $('.calc-h1').text((inputValue*10/100).toFixed(2) + "$");
  }
  else {
    $('.calc-h1').text((total * numOfPerson).toFixed(2) + "$");
  }

});

$(".third-button").click(function(){
  var inputValue= $("#Tip-value").val();
  var numOfPerson= $("#numOfPerson").val();
var total=inputValue*15/100;
$(".third-button").fadeIn(100).fadeOut(100).fadeIn(100);
$('.calc-h').text((inputValue*15/100).toFixed(2)+ "$");
if (numOfPerson==0) {
$('.calc-h1').text((inputValue*15/100).toFixed(2) + "$");
}
else {
  $('.calc-h1').text((total * numOfPerson).toFixed(2) + "$");
}

});

$(".button-4").click(function(){
  var inputValue= $("#Tip-value").val();
  var numOfPerson= $("#numOfPerson").val();
    var total=inputValue*25/100;
    $(".button-4").fadeIn(100).fadeOut(100).fadeIn(100);
    $('.calc-h').text((inputValue*25/100).toFixed(2)+ "$");
    if (numOfPerson==0) {
    $('.calc-h1').text((inputValue*25/100).toFixed(2) + "$");
    }
    else {
      $('.calc-h1').text((total * numOfPerson).toFixed(2) + "$");
    }

});

$(".button-5").click(function(){
  var inputValue= $("#Tip-value").val();
    var numOfPerson= $("#numOfPerson").val();
    var total=inputValue*50/100;
      $(".button-5").fadeIn(100).fadeOut(100).fadeIn(100);
    $('.calc-h').text((inputValue*50/100).toFixed(2)+ "$");
    if (numOfPerson==0) {
    $('.calc-h1').text((inputValue*50/100).toFixed(2) + "$");
    }
    else {
      $('.calc-h1').text((total * numOfPerson).toFixed(2) + "$");
    }

});

$(".reset-button").click(function(){
  $(".reset-button").fadeOut(100).fadeIn(100);
  $('.calc-h').text("0.00"+ "$");
$('.calc-h1').text("0.00" + "$");
$("input").html();
});
