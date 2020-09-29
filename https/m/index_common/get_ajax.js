"use strict";

sJsonpHost = '';

var oAjax = new XMLHttpRequest();
oAjax.bExecuting = 0;
oAjax.sURL = '';
oAjax.onreadystatechange = function() {
	if(oAjax.readyState != 4)
		return;

	oAjax.bExecuting = 0;
	if(oAjax.status != 200) {
		oAjax.ErrMsg('Access', 'Server Response='+oAjax.status);
		return;
	}

	try {
		var jp = JSON.parse(oAjax.responseText);;
	}
	catch(err) {
		oAjax.ErrMsg('JSON parse', err.message);
		return;
	}
	indexDirList(jp);
	ShowList(1);
}
oAjax.ErrMsg = function (type, m) {
	Message('<img src='+sCommonFolderName+'_error.png> AJAX ' + type + ' error : [' + m + '] [' + oAjax.sURL + '] <img src='+sCommonFolderName+'_error.png>');
}

function indexGet(bPathChgd, sOpt) {
	if (oAjax.bExecuting)
		return;
	if(bPathChgd)
		SetLocation(false);
	ShowCwd();
	Message('<img src='+sCommonFolderName+'__loading.gif class=loading>');

	if(sOpt == undefined)
		sOpt = '';
	else
		sOpt = '?' + sOpt;
	oAjax.sURL = oHome.sEncoded + oSub.sEncoded + sOpt;
	try {
		oAjax.open("GET", oAjax.sURL, true);
		oAjax.send();
		oAjax.bExecuting = 1;
	}
	catch(err) {
		oAjax.ErrMsg('Send', err.message);
	}
}
