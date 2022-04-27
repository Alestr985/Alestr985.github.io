document.getElementById("calculator").onsubmit = function(event) {
	event.preventDefault();
  var eruption = document.getElementsByName("eruption")[0].value/1000;
  var ec = document.getElementsByName("eruption_time")[0].value ;
  var aec = document.getElementsByName("cycle_time")[0].value ;
  var ac = document.getElementsByName("work_time")[0].value*600;
  var cycles = document.getElementsByName("activity_cycle")[0].value*600;
  var result = Math.round(((ac/aec)*ec*eruption));
  document.getElementById("result").innerHTML = result+" kg";
    }