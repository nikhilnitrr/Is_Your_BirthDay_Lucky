var dateRef = document.querySelector("#birthday-date");
var luckRef = document.querySelector("#lucky-number");
var btnRef = document.querySelector("#btn-primary");
var msgRef = document.querySelector("#message");

function myScript() {
  var sum = 0;
  var dateArray = dateRef.value.split("");
  for (var i = 0; i < dateArray.length; i++) {
    if (dateArray[i] !== "-") {
      sum += parseInt(dateArray[i]);
    }
  }
  if (!dateRef.value || !luckRef.value || parseInt(luckRef.value) < 0) {
    msgRef.innerText = "😠 Invalid Input";
  } else if (sum % parseInt(luckRef.value) === 0) {
    msgRef.innerText = "🤩 your birthday is lucky ";
  } else {
    msgRef.innerText = "😞 your birthday is NOT lucky , so sad ";
  }
}

btnRef.addEventListener("click", myScript);
