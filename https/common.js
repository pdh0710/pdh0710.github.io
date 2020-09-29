"use strict";

function addScript(name, onload) {
	var script = document.createElement('script');

	script.setAttribute('src', name);
	script.setAttribute('type', 'text/javascript');
	script.onload = onload;
	document.body.appendChild(script);
}

function addCSS(name) {
	var link  = document.createElement('link');

	link.rel  = 'stylesheet';
	link.type = 'text/css';
	link.href = name;
	link.media = 'all';
	document.head.appendChild(link);
}

var elementMargin = 20;
