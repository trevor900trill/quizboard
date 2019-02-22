var ans1;
var ans2;
var ans3;
var ans4;
var ans5;
var ans6;
var ans7;
var ans8;
var ans9;
var ans10;
$('#question1').change(function(){
   ans1 = $(this).val();
});
$('#question2').change(function(){
   ans2 = $(this).val();
});
$('#question3').change(function(){
   ans3 = $(this).val();
});
$('#question4').change(function(){
   ans4 = $(this).val();
});
$('#question5').change(function(){
   ans5 = $(this).val();
});
$('#question6').change(function(){
   ans6 = $(this).val();
});
$('#question7').change(function(){
   ans7 = $(this).val();
});
$('#question8').change(function(){
   ans8 = $(this).val();
});
$('#question9').change(function(){
   ans9 = $(this).val();
});
$('#question10').change(function(){
   ans10 = $(this).val();
});
var answers = ["PASCAL" , "HTML" , "ECMAscript" , "Node js" , "YES" , "CPU" , "PROLOG" , "css" , "java" , "ones and zeros"];
var byUser = [];
var res = []
//logic for is it correct
var count=0;
var find = (() => {
  byUser.push(ans1 ,ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9,ans10);
  console.log(byUser);
  for(var i = 0; i < answers.length ; i++){
    for(var j = 0 ; j < byUser.length ; j++){
      if(answers[i] === byUser[j])
      {
        count = count+1
        console.log(" correct "+ byUser[j] +" score " + count + " out of 10" );
        calculate(count);
      }
      else
      {
        //do nothing;
      }
    }
  }
});
//calculate handle
var calculate = ((number) => {
  var divide = number / 10;
  var final =  divide * 100;
  res.push(final);
});
//logic user interface
$(document).ready(function(){
  //click handle
  $(".submitBtn").on("click",function(){
      find();
      alert(res[res.length -1 ] + "%");
  });
});
