const expBtn = document.querySelector("#experience-btn");
const expList = document.querySelectorAll(".experience-card");
let checkExp = false;

document.addEventListener("DOMContentLoaded", function(){
	if(expList.length>3){
		for(let i = 3;i<expList.length;i++){
			expList[i].style.display = "none";
		}
	}
});

expBtn.addEventListener("click",function(){
	if(checkExp&&expList.length>3){
		checkExp = false;
		expBtn.innerText = "Show More";
		for(let i = 3;i<expList.length;i++){
			expList[i].style.display = "none";
		}
	}
	else{
		checkExp = true;
		expBtn.innerText = "Show Less";
		for(let i = 3;i<expList.length;i++){
			expList[i].style.display = "grid";
		}
	}
});