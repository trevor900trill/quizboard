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
//the correct answers
var answers = ["PASCAL" , "HTML" , "ECMAscript" , "Node js" , "YES" , "CPU" , "PROLOG" , "css" , "java" , "ones and zeros"];
//the answers given by the user
var byUser = [];
//marking get the last item;
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
        document.getElementsByClassName("statusupdate")[0].textContent = "you got the following answers correct";
        var correctionList = document.getElementsByClassName("correctList")[0];
        correctionList.innerHTML += "<li>"+byUser[j]+"</li>";
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
//clear the values
var clear =(() => {
   //reload the page
   setTimeout(function(){
     location.reload();
   },7000);
});
//logic user interface
$(document).ready(function(){
  //click handle
  $(".submitBtn").on("click",function(){
      find();
     $(this).hide();
      if(res[res.length-1] === undefined)
      {
        alert("0% is a fail");
        document.getElementsByClassName("picture")[0].setAttribute("src" , "https://pngimage.net/wp-content/uploads/2018/06/wrong-symbol-png-8.png");
        document.getElementById("resultperc").textContent="FAIL"
        document.getElementById("numberres").textContent="0%";
      }
      else
      {
        //get the mark
        var numbercheck = parseInt(res[res.length - 1]);
        if( numbercheck < 50 )
        {
          alert(numbercheck + "% " + "is a fail");
          document.getElementsByClassName("picture")[0].setAttribute("src" , "https://pngimage.net/wp-content/uploads/2018/06/wrong-symbol-png-8.png");
          document.getElementById("resultperc").textContent="FAIL"
          document.getElementById("numberres").textContent= numbercheck + "%";
        }
        else if( numbercheck > 50 || numbercheck === 50 && numbercheck < 80)
        {
          alert(numbercheck + "% "+"is a fair mark");
          document.getElementsByClassName("picture")[0].setAttribute("src" , "https://cdn.pixabay.com/photo/2017/01/13/01/22/ok-1976099__340.png");
          document.getElementById("resultperc").textContent="FAIR"
          document.getElementById("numberres").textContent= numbercheck + "%";
        }
        else if(numbercheck > 80 || numbercheck === 80)
        {
          alert(numbercheck + "% "+"is a pass");
          document.getElementsByClassName("picture")[0].setAttribute("src" , "https://cdn.pixabay.com/photo/2017/01/13/01/22/ok-1976099__340.png");
          document.getElementById("resultperc").textContent="PASS"
          document.getElementById("numberres").textContent= numbercheck + "%";
        }
      }
      clear(); 
  });
});
