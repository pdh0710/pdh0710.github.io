"use strict";

sJsonpHost = sJsonpHost.trim();
while(sJsonpHost.charAt(sJsonpHost.length-1) == '/')
	sJsonpHost = sJsonpHost.slice(0, -1);

var oJsonp = {script:null, isLoading:0, url:""};
oJsonp.ErrMsg = function(m) {
	Message('<img src='+sCommonFolderName+'_error.png> JSONP '+m+' error : [' + oJsonp.url + '] <img src='+sCommonFolderName+'_error.png>');
}

function indexGet(bPathChgd, sOpt) {
	if(oJsonp.isLoading)
		return;
	oJsonp.isLoading = 1;

	if(bPathChgd)
		SetLocation(false);
	ShowCwd();
	Message('<img src='+sCommonFolderName+'__loading.gif class=loading>');

	if(sOpt == undefined)
		sOpt = '';
	else
		sOpt = '&' + sOpt;
	oJsonp.url = sJsonpHost + oHome.sEncoded + oSub.sEncoded + '?callback=indexDirList' + sOpt;

	oJsonp.script = document.createElement("script");
	oJsonp.script.setAttribute("src", oJsonp.url);
	oJsonp.script.setAttribute('type', 'text/javascript');
	oJsonp.script.onerror = function() {
		oJsonp.ErrMsg('Response');
		oJsonp.isLoading = 0;
	}
	oJsonp.script.onload = function () {
		try {
			ShowList(1);
		}
		catch(err) {
			oJsonp.ErrMsg('Executing');
		}
		document.getElementsByTagName('body')[0].removeChild(oJsonp.script);
		oJsonp.isLoading = 0;
	}

	try {
		document.getElementsByTagName('body')[0].appendChild(oJsonp.script);
	}
	catch(err) {
		oJsonp.ErrMsg('Access');
		oJsonp.isLoading = 0;
	}
}
