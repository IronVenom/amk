const blogBtn = document.querySelector("#blog-btn");
const blogList = document.querySelectorAll(".blog-card");
let checkBlogs = false;

document.addEventListener("DOMContentLoaded", function(){
	if(blogList.length>6){
		for(let i = 6;i<blogList.length;i++){
			blogList[i].style.display = "none";
		}
	}
	else{
		blogBtn.style.display = "none";
	}
});

blogBtn.addEventListener("click", function(){
	if(blogList.length>6){
		if(checkBlogs){
			checkBlogs = false;
			blogBtn.innerText = "Show More";
			for(let i = 6;i<blogList.length;i++){
				blogList[i].style.display = "none";
			}
		}
		else{
			checkBlogs = true;
			blogBtn.innerText = "Show Less";
			for(let i = 6;i<blogList.length;i++){
				blogList[i].style.display = "block";
			}
		}
	}
});