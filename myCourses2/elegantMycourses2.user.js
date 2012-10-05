// ==UserScript==
// @match https://mycourses2.mcgill.ca/d2l/lms/discussions/messageLists/frame_right*
// @include https://mycourses2.mcgill.ca/d2l/lms/discussions/messageLists/frame_right*
// ==/UserScript==
setTimeout(function(){
	var frameright = window;
	var frameset = frameright.document.getElementsByTagName("frameset")[0]; 
	frameset.setAttribute("rows","99%,1%");
	frameset.setAttribute("cols","50%, 50%");
	
	frameset.removeAttribute("rows");
},10);

