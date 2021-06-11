console.log('test.js')

setInterval(function() {
	var reactElem = document.getElementById('react');
	var toolboxElem = document.getElementById('new-toolbox');
	
	if ( reactElem != null ) {
		reactElem.style.height = "calc(100vh - 100px)";
	}
	if ( toolboxElem != null ) {
		toolboxElem.style.bottom = "0";
	}
}, 1000);
