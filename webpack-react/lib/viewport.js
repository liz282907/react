(function(){
	var dpr = window.devicePixelRatio ||1,
	scale = 1/dpr,
	documentEle = document.documentElement,
	width = documentEle.clientWidth,
	rem = width*dpr/10;

	//set meta viewport
	var meta = document.querySelector("meta[name='viewport']");
	var contentAttr = ["width=",dpr*width,
						"initial-scale=",scale,
						"maximum-scale=",scale,
						"minimum-scale=",scale].join(",");

	meta.setAttribute("content",contentAttr);

	//set font-size
	documentEle.style.fontSize = (rem+"px!important");//html{font-size}




})();
