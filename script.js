// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click",function() {
// 	console.log("click");
// })   


// creating a button to add items to list 


var button = document.getElementById("enter");
var input = document.getElementById("userinput");     //1. started with selecting the elemnts interseted in
var ul = document.querySelector("ul");



function inputlength() {
	return input.value.length;
}

function createlistelement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value))     // created functions
	ul.appendChild(li);
	input.value = "";
}

function addlistafterclick(){
	if (inputlength() > 0 ) {
		createlistelement();
	}
}


function addlistafterkeypress(event) {

	if (inputlength() > 0 && event.keyCode ===13) {
		createlistelement()
	}

}

button.addEventListener("click", addlistafterclick);             // here i added eventlisteners and linked them to functions 

input.addEventListener("keypress", addlistafterkeypress);