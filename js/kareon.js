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


