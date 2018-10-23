

// Business Logic

var factor = function(number) {
  var count;
  var result = 1;
  for (count = number; count > 1; count--) {
    result *= count;
  }
  console.log(result);
  return result;
};

//User Interface Logic
$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
      var input = parseInt($("#numberInput").val())
      $("#numberOutput").text(factor(input));
  });
});
