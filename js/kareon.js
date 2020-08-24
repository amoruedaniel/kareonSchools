 /*//Scroll to hide shrink
 window.addEventListener("scroll", function(){
        var navbar = document.querySelector("nav");
        navbar.classList.toggle("sticky",window.scrollY>0);
       }) */


 /*scroll to show
 var prevScrollpos = window.pageYOffset;
 window.onscroll = function(){
 	var currentScrollpos = window.pageYOffset;
 	if(prevScrollpos > currentScrollpos){
 		document.getElementById('navbar').style.top = "0";
 	}
 	else{
 		document.getElementById("navbar").style.top = "-200px"
 	}

 	prevScrollpos = currentScrollpos;
 }
 */

 /*show mobile navigation bar*/
document.getElementById("menu-toggle").onclick = function(){
	document.querySelector("nav").classList.toggle("active");
}



/*==========Work on contact form =========*/

const form = document.getElementById("form");
const fullName = document.getElementById("yourFullName");
const email = document.getElementById("yourEmail");
const phone = document.getElementById("yourPhone");
const message = document.getElementById("yourMessage");

form.addEventListener('submit',(e)=>{
	e.preventDefault();
	checkInputs();
});

let checkInputs = () =>{
	const fullNameValue = fullName.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const messageValue = message.value.trim();

	if(fullNameValue === ""){
		//show Error
		//add error class
		setErrorFor(fullName, "Please input your full name");
	}
	else{
		//add success class
		setSuccessFor(fullName);
	}

	if(emailValue === ""){
		setErrorFor(email, 'Email cannot be blank');
	}
	else if(!isEmail(emailValue)){
		setErrorFor(email, 'Email is not valid');
	}
	else{
		setSuccessFor(email);
	}
}
function setErrorFor(input, message){
	const formGroup = input.parentElement; //.form-group
	const small = formGroup.querySelector("small");

	//add error message inside small
	small.innerText = message;

	//add error class
	formGroup.classList = "form-group error";
}
function setSuccessFor(input){
	const formGroup = input.parentElement;
	formGroup.className = "form-group sucess"
}

function isEmail(email){
	return  /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/igm;if ($email.val() == '' || !re.test($email.val()));
}