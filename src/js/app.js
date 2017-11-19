
import '../scss/styles.scss'

(function(){

document.onreadystatechange = () => {
  	if (document.readyState === 'complete') {

  		smothScroll();
  		document.getElementById("background").onclick = hideSidenav;
		document.getElementById("ic-toggle").onclick = openNav;

  		function smothScroll() {
  			if (window.innerWidth < 768) {
				var mainMenu = document.querySelector('.menu-xs');
				console.log(mainMenu);	 	
			} else {
  				var mainMenu = document.querySelector('.menu');
  			}
  			for (var i = 0; i < mainMenu.children.length; i++) {
	  			var item = mainMenu.children[i];
	  			item.addEventListener('click', scrollHandler(item.className))
  			}
  		}

	  	function scrollHandler (section) {
	  		return function () {
	  			var selector = "."+section+"-content";
	  			if (window.innerWidth < 768) {
					hideSidenav();	 	
				}	  			
	  			document.querySelector(selector).scrollIntoView({ 
				  behavior: 'smooth' 
				});
	  		}
	  	}

		var animateHTML = function () {
			var elems,
			    windowHeight
			 var init = function () {
			    elems = document.getElementsByClassName('hidden')
			    windowHeight = window.innerHeight
			    _addEventHandlers()
			 }
		  	var _addEventHandlers = function () {
			    window.addEventListener('scroll', _checkPosition)
			    window.addEventListener('resize', init)
			  }
			var _checkPosition = function () {
			    for (var i = 0; i < elems.length; i++) {
			      	var posFromTop = elems[i].getBoundingClientRect().top
			      	if (posFromTop - windowHeight <= 0) {
			        	elems[i].className = elems[i].className.replace('hidden', 'fade-in-element')
			      	}
			    }
			}
			return {
			    init: init
			}
		}
		animateHTML().init()
     
		function openNav() {
			var toggleIcon = document.getElementById("ic-toggle");


			if (!(toggleIcon.className.match("close"))) { 
				var w = window.innerWidth; 
				var marginl = w-72;

				document.querySelector('#ic-toggle .fa-bars').style.display = "none";
				document.querySelector('#ic-toggle .fa-times').style.display = "inline-block";

				toggleIcon.className = "close";
				
			    document.getElementById("content").style.marginLeft = marginl+"px"; //Set the #content's margin-left
			    document.getElementById("hugenav").style.width = marginl+"px"; //Set the #hugenav's width
			    document.getElementById("background").style.display = "block"; 

			    document.body.style.overflow = "hidden";		
				
			} else { 
				hideSidenav ();
			}
		}

		function hideSidenav(){
			document.getElementById("hugenav").style.width = "0";
		    document.getElementById("content").style.marginLeft = "0";	    
		    document.body.style.overflow = "visible";
		    document.querySelector('#ic-toggle .fa-bars').style.display = "inline-block";
			document.querySelector('#ic-toggle .fa-times').style.display = "none";
			document.getElementById("ic-toggle").className = ""; 
			document.getElementById("background").style.display = "none";
		}
	} 
} /* Close onready */
  
})();


