let l=0;

document.getElementsByClassName("min-menu__title")[0].onclick = function(){
	if (l%2==0){
		document.getElementsByClassName("min-menu__item")[0].style.display = "block";
		document.getElementsByClassName("min-menu__item")[1].style.display = "block";
		document.getElementsByClassName("min-menu__item")[2].style.display = "block";
	}
	if (l%2==1){
		document.getElementsByClassName("min-menu__item")[0].style.display = "none";
		document.getElementsByClassName("min-menu__item")[1].style.display = "none";
		document.getElementsByClassName("min-menu__item")[2].style.display = "none";
	}
	l++;
}