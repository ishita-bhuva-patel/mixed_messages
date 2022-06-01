
const dice = () => {
    $('#mm-die1').text(Math.floor((Math.random() * 6) + 1));
    $('#mm-die2').text(Math.floor((Math.random() * 6) + 1));
    $('#mm-die3').text(Math.floor((Math.random() * 6) + 1));
  }
$(document).ready(function(){
    $("#mm-dice-roll").click(dice);
  });

