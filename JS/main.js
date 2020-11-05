document.getElementById("calculator").onsubmit = function(event) {
	event.preventDefault();
  var eruption = document.getElementsByName("eruption")[0].value;
  var ec = document.getElementsByName("ec")[0].value / 600;
  var aec = document.getElementsByName("aec")[0].value / 600;
  var ac = document.getElementsByName("ac")[0].value;
  var cycles = document.getElementsByName("cycles")[0].value;
  var result = (ac/aec*ec*eruption);
  document.getElementById("result").innerHTML = result+" kg";
    }