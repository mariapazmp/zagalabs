
import '../scss/styles.scss'

(function(){

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {

  	document.getElementById("background").onclick = hideBackground;
	document.getElementById("ic-toggle").onclick = openNav; 
	document.querySelector('.link-interest').onclick = smothScroll;

// Desktop and mobile navigation events

	let items = document.getElementsByClassName('menu-a');
  	let submenu = document.getElementsByClassName('submenu');
  	
  	let sideitems = document.getElementsByClassName('link-subxs');
  	let sidesubmenu = document.getElementsByClassName('submenuxs');  	

  	for ( var i = 0; i < sideitems.length; i++ ) (	
		function showSubmenu(i){ 
			sideitems[i].onclick = function() {
				let active = "menu-a link-subxs";
				let arrow = "url(img/ic_arrow.svg)";
				let display = "none";

				if (!(sideitems[i].className.match("active"))) { 
					active = "active menu-a link-subxs";
					arrow = "url(img/ic_arrow_up.svg)";
					display = "block";
				}

				sideitems[i].className = active;
				sideitems[i].style.backgroundImage = arrow;
				sidesubmenu[i].style.display = display				
			}

			items[i].onclick = function (){ 
				let display = "none";
				if (!(submenu[i].className.match("active"))) { 
					display = "block";  			
				}
				document.getElementById("background").style.display = display;
			}				  
		}
	)(i); /* Close the loop */ 

function smothScroll() {
	document.querySelector('.interest').scrollIntoView({ 
	  behavior: 'smooth' 
	});
}

function hideBackground() {		
	if (window.innerWidth < 768) {
		hideSidenav ();	 	
	}
	document.getElementById("background").style.display = "none";
}


     
function openNav() {
	if (!(document.getElementById("ic-toggle").className.match("close"))) { 

		document.getElementById("ic-toggle").style.backgroundImage = "url(img/toggle-close.svg)";
		var w = window.innerWidth; 
		var marginl = w-72; //72px is the id content's width, when the sidenav appears
	    document.getElementById("content").style.marginLeft = marginl+"px"; //Set the #content's margin-left
	    document.getElementById("hugenav").style.width = marginl+"px"; //Set the #hugenav's width

	    document.body.style.overflow = "hidden";
		document.getElementById("ic-toggle").className = "close";
		document.getElementById("background").style.display = "block"; 
	}

	else { hideSidenav ();}
}

function hideSidenav(){
	document.getElementById("hugenav").style.width = "0";
    document.getElementById("content").style.marginLeft = "0";	    
    document.body.style.overflow = "visible";
    document.getElementById("ic-toggle").style.backgroundImage = "url(img/toggle-open.svg)";
	document.getElementById("ic-toggle").className = ""; 
	document.getElementById("background").style.display = "none";
}


} /* Close readystate */

} /* Close onready */
  
})();


