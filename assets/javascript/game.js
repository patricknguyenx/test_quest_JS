

  $(document).ready(function(){


        //GLOBAL ARRAY OF OBJECTS
    // ------------------------------------------
    var triviaBucket = [

   {
    question: 'what color is the sky?',
    trueAnswer:'blue',
    falseOne: 'red',
    falseTwo: 'green',
    falseThree: 'violet',
    },

  {
    question: 'San Francisco is in what State?',
    trueAnswer: 'California',
    falseOne: 'Idaho',
    falseTwo: 'North Dakota',
    falseThree: 'Florida',
    },

  {
    question: "In what city is Apple's Headquarters?",
    trueAnswer: 'Cupertino',
    falseOne: 'San Francisco',
    falseTwo: 'Houston',
    falseThree: 'Boston',
    },

  {
    question: 'Is water wet?',
    trueAnswer: 'Yes',
    falseOne: 'no',
    falseTwo: 'what?',
    falseThree: 'I need some coffee',
    }

];

      //GLOBAL VARIABLES
//------------------------------------------
  var clickSwitch = true //BOOLEAN TO SWITCH QUESTIONS ON ANSWER CLICKS
  var index = 0
  var correct = 0
  var incorrect = 0

  function incrementQuestion(){
    index++;
      };

      //FUNCTION POPULATES QUESTIONAREA
//------------------------------------------
function populateQuestionArea(){

  $(".questionArea").html(triviaBucket[index].question);
  $("#1_1").html(triviaBucket[index].trueAnswer);
  $("#1_2").html(triviaBucket[index].falseOne);
  $("#1_3").html(triviaBucket[index].falseTwo);
  $("#1_4").html(triviaBucket[index].falseThree);
};
//------------------------------------------


//START BUTTON
//------------------------------------------
$('#startButton').on("click", function(){

timer();

console.log("clickswitch is now = " + clickSwitch)

});
//------------------------------------------


//ASWER BUTTON CLICK FUNCTION.
//------------------------------------------
$(document).on("click", ".answerBlock", function(){
var $this = this;

var clickIdentifier = $(this).attr('id');
if (clickIdentifier === '1_1') {
// console.log('true!');
clickSwitch = false
correct++;
$("#wins").html("Correct " + correct);
console.log(correct + " is the number of correct answers");
    window.onbeforeunload = function(event)
    {
        return confirm("Confirm refresh");
    };
incrementQuestion();
populateQuestionArea();
timer();
// intervalTimer();
} else {
// console.log('false');
clickSwitch = false
incorrect++;
$("#losses").html("Awww! " + incorrect);
console.log(incorrect + " is the number of incorrect answers");
incrementQuestion();
populateQuestionArea();
timer();
// intervalTimer();
}
});

    //TIME TO ANSWER FUNCTION
//------------------------------------------
      function timer () {

      populateQuestionArea();

      var countDownTime = 10; //Countdown time.
      var counter = setInterval(function(){
          console.log("clickSwitch is now "+ clickSwitch);
          countDownTime -= 1;

          if (countDownTime <= 0) {

          clearInterval(counter);

        } else if (countDownTime <= 0 || !clickSwitch) {

          clearInterval(counter);
          intervalTimer();
          }

          console.log("countDownTime is now = " + countDownTime);

          $("#timerArea").html(countDownTime + " seconds left to answer!"); //display's time left to answer

        }, 1000);
      }
//------------------------------------------


    //INTERVAL TIMER FUNCTION
//------------------------------------------
function intervalTimer () {

var intervalTime = 5; //Countdown time.
var intervalCounter = setInterval(intervalClock, 1000)

  function intervalClock(){
  intervalTime -= 1;
  console.log("intervalTime is now = " + intervalTime)

  //dynamically display true/false answer screen here.
  $("#timerArea").html(intervalTime + " seconds until next question!");

    if (intervalTime <= 0){
    clearInterval(intervalCounter);
    clickSwitch = true
    timer();
    console.log("Time has run out! Next question!");
    }
  }
}
//------------------------------------------






}); //Document ready endtag.

//------------------------------------------
