console.log('test.js')
var zummitIframeAdded = false;

setInterval(function() {
	var reactElem = document.getElementById('react');
	var toolboxElem = document.getElementById('new-toolbox');
	
	if ( reactElem != null ) {
		reactElem.style.height = "calc(100vh - 100px)";

		if ( zummitIframeAdded == false ) {
			var frameElem = document.createElement("iframe");
			frameElem.src = "https://raw.githubusercontent.com/hacktick/hacktick.github.io/main/test.html"
			frameElem.style.bottom = "0px";
			frameElem.style.position = "fixed";
			frameElem.style.width = "100%";
	
			document.body.appendChild(frameElem);

			zummitIframeAdded = true;
		}
	}
	if ( toolboxElem != null ) {
		toolboxElem.style.bottom = "0";
	}
}, 1000);
