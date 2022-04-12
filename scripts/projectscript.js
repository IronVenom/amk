const projectBtn = document.querySelector("#project-btn");
const projectList = document.querySelectorAll(".project-card");
let checkProjects = false;

document.addEventListener("DOMContentLoaded", function(){
	if(projectList.length>6){
		for(let i = 6;i<projectList.length;i++){
			projectList[i].style.display = "none";
		}
	}
	else{
		projectBtn.style.display = "none";
	}
});

projectBtn.addEventListener("click", function(){
	if(projectList.length>6){
		if(checkProjects){
			checkProjects = false;
			projectBtn.innerText = "Show More";
			for(let i = 6;i<projectList.length;i++){
				projectList[i].style.display = "none";
			}
		}
		else{
			checkProjects = true;
			projectBtn.innerText = "Show Less";
			for(let i = 6;i<projectList.length;i++){
				projectList[i].style.display = "block";
			}
		}
	}
});