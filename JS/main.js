let l=0;

document.getElementById("min_menu_title").onclick = function(){
	if (l%2==0){
		document.getElementsByClassName("min_menu_item")[0].style.display = "block";
		document.getElementsByClassName("min_menu_item")[1].style.display = "block";
		document.getElementsByClassName("min_menu_item")[2].style.display = "block";
	}
	if (l%2==1){
		document.getElementsByClassName("min_menu_item")[0].style.display = "none";
		document.getElementsByClassName("min_menu_item")[1].style.display = "none";
		document.getElementsByClassName("min_menu_item")[2].style.display = "none";
	}
	l++;
}