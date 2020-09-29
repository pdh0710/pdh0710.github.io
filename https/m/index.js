"use strict";

/*
** MAIN
*/

var oFlag = {nDirFile:1, nSortUnit:1}, nFlagLen = 2, aList, asSizeStr = ['B', 'kB', 'MB', 'GB', 'TB', 'PB'],
	anSortState = [1, 0, 0, 0, 0], nSortDirection, anSortStateChange = [1, 2, 1],
	asSortIcon = ['', '<img src='+sCommonFolderName+'__s-up.png>', '<img src='+sCommonFolderName+'__s-down.png>'], afSort = [nCmpName, nCmpExt, nCmpSize, nCmpTime, nCmpIcon];
var sCookieKey = 'explorer_option', nTimeZone = ((new Date).getTimezoneOffset())*60000;
var oHash = oSplitHash(), oSub = oMakePath(decodeURIComponent(oHash.sEncoded));
var oWinLst = document.getElementById('lst'), oWinCwd = document.getElementById('cwd'), oWinOpt = document.getElementById('opt'), nTimerID = null;

window.onbeforeunload = function(oE) {
	document.cookie = sCookieKey + '=' + oHash.sOption + '; expires=' + (new Date(2050,1,1)).toUTCString();
}

var sHead = oWinLst.innerHTML;
oWinLst.innerHTML = '';
oWinLst.style.display = 'block';

var oHome = oMakePath(sHome);
if(oHome.sPath.length)
	oHome.sPath = '/' + oHome.sPath;
oHome.sEncoded = '/' + oHome.sEncoded;

if(window.onpopstate != undefined)
	window.onpopstate = HistoryChgd;
else
	window.onhashchange = HistoryChgd;

if( bStr2Opt(oHash.sOption) )
	indexGet(0);
else {
	bStr2Opt(sGetCookie(sCookieKey));
	oHash.sOption = sOpt2Str();
	indexGet(1);
}


/*
	Execute
*/

function Start() {
}

function HistoryChgd(oE) {
	var h = oSplitHash();
	if(h.sEncoded != oSub.sEncoded.slice(0, -1)) {
		oSub = oMakePath(decodeURIComponent(h.sEncoded));
		oHash = h;
		if( !bStr2Opt(oHash.sOption) )
			SetLocation(true);
		indexGet(0);
	}
	else if(h.sOption != oHash.sOption) {
		oHash = h;
		if( !bStr2Opt(oHash.sOption) )
			SetLocation(true);
		ShowCwd();
		ShowList(1);
	}
}

function SetLocation(bMakeOptStr) {
	if(bMakeOptStr)
		oHash.sOption = sOpt2Str();
	location.hash = '#' + oSub.sEncoded.slice(0, -1) + '?' + oHash.sOption;
}


/*
	Misc Functions
*/

function sGetCookie(sName) {
    sName += '=';
    var aCookie = document.cookie.split(';');
    for(var i=0; i<aCookie.length; i++) {
        var c = aCookie[i];
        while(c.charAt(0) == ' ')
			c = c.substring(1);
        if(c.indexOf(sName) == 0)
			return c.substring(sName.length, c.length);
    }
    return '';
}

function Message(s) {
	oWinLst.innerHTML = '<tr><td class=msg>' + s + '</td></tr>';
}

function oSplitHash() {
	var h = {}, a = location.hash;
	if(a.length > 1) {
		a = a.slice(1).split('?');
		h.sEncoded = a[0];
		if(a.length == 2)
			h.sOption = a[1];
		else
			h.sOption = '';
	}
	else {
		h.sEncoded = '';
		h.sOption = '';
	}
	return h;
}

function oMakePath(s) {
	s = s.trim();
	while(s.indexOf('//') >= 0)
		s = s.replace(/\/\//g, '/');
	if(s.charAt(0) == '/')
		s = s.slice(1);
	if(s.charAt(s.length-1) == '/')
		s = s.slice(0, -1);
	var p = {sPath:s};
	p.sEncoded = '';
	if(s == '') {
		p.asPath = new Array();
		return p;
	}
	p.asPath = s.split('/');
	for(var i=0; i<p.asPath.length; i++)
		p.sEncoded += encodeURIComponent(p.asPath[i]) + '/';
	return p;
}

function sOpt2Str() {
	var s = 's', i;

	for(i=0; i<anSortState.length; i++) {
		if(anSortState[i])
			break;
	}
	s += i;
	s += anSortState[i] + 'f';
	for(var i in oFlag)
		s += oFlag[i];
	return s;
}

function bStr2Opt(s) {
	if(s.length!=(4+nFlagLen) || s.charAt(0)!='s' || s.charAt(3)!='f')
		return false;

	var f = oFlag, an = new Array(), i, j, k;
	for(i=0; i<anSortState.length; i++)
		an[i] = 0;
	i = nStrRng(s.charAt(1), 0, anSortState.length-1);
	if(isNaN(i))
		return false;
	j = nStrRng(s.charAt(2), 1, 2);
	if(isNaN(j))
		return false;
	an[i] = j;

	k = 4;
	for(var i in oFlag) {
		j = nStrRng(s.charAt(k++), 0 , 1);
		if(isNaN(j))
			return false;
		f[i] = j;
	}

	anSortState = an;
	oFlag = f;
	return true;
}

function nStrRng(str, nLow, nUp) {
	var i = parseInt(str);

	if(i>=nLow && i<=nUp)
		return i;
	return NaN;
}


/*
	Show Head
*/

function SwapHead(i) {
	oWinCwd.style.display = SwapHead.asDisplay[i];
	oWinOpt.style.display = SwapHead.asDisplay[1-i];
}
SwapHead.asDisplay = ['none', 'block'];

function OpenOption() {
	SwapHead(0);
	for(var i in oFlag)
		document.getElementsByName(i)[oFlag[i]].checked = true;
}

function CloseOption() {
	SwapHead(1);
}

function ClickDF(i) {
	if(oFlag.nDirFile == i)
		return;
	oFlag.nDirFile = i;
	SetLocation(true);
	ShowList(1);
}

function ClickSU(i) {
	if(oFlag.nSortUnit == i)
		return;
	oFlag.nSortUnit = i;
	SetLocation(true);
	ShowList(0);
}

function ShowCwd() {
	window.document.title = oHome.sPath + '/' + oSub.sPath;

	var p = '#';
	var s = '<span class=icon onclick="OpenOption();"><img src='+sCommonFolderName+'__gear.png>&nbsp;</span><span class=txt>|</span><a href="'+ p+'?'+oHash.sOption +'"><img src='+sCommonFolderName+'__home.png>' + oHome.sPath + '</a>';
	for(var i=0; i < oSub.asPath.length; i++) {
		p += '/';
		p += encodeURIComponent(oSub.asPath[i]);
		s += '<span class=txt>/</span><a href="'+ p+'?'+oHash.sOption +'">' + oSub.asPath[i] + '</a>';
	}
	oWinCwd.innerHTML = s;
}


/*
	Show List
*/

function nCmpName(a, b) {
	if(oFlag.nDirFile) {
		if(a[2]==-1 && b[2]>=0)
			return -nSortDirection;
		if(a[2]>=0 && b[2]==-1)
			return nSortDirection;
	}
	return nSortDirection * a[0].localeCompare(b[0]);
}

function nCmpExt(a, b) {
	if(a[2]==-1 && b[2]>=0)
		return -nSortDirection;
	if(a[2]>=0 && b[2]==-1)
		return nSortDirection;
	if(a[1] == b[1])
		return nSortDirection * a[0].localeCompare(b[0]);
	return nSortDirection * a[1].localeCompare(b[1]);
}

function nCmpSize(a, b) {
	if(a[2] == b[2])
		return nSortDirection * a[0].localeCompare(b[0]);
	return nSortDirection * (a[2] - b[2]);
}

function nCmpTime(a, b) {
	if(oFlag.nDirFile) {
		if(a[2]==-1 && b[2]>=0)
			return -nSortDirection;
		if(a[2]>=0 && b[2]==-1)
			return nSortDirection;
	}
	if(a[3] == b[3])
		return nSortDirection * a[0].localeCompare(b[0]);
	return nSortDirection * (a[3] - b[3]);
}

function nCmpIcon(a, b) {
	if(a[4] == b[4])
		return nSortDirection * a[0].localeCompare(b[0]);
	return nSortDirection * (a[4] - b[4]);
}

function sSize2Str(idx) {
	var size = aList[idx][2], i=0, d;

	if(!oFlag.nSortUnit)
		size = size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	else {
		for(d=1; i<asSizeStr.length; i++, d*=1024) {
			if( (size/d) < 1024 )
				break;
		}
		if(i)
			size = (size/d).toFixed(2);
	}
	return  size + '&nbsp;' + asSizeStr[i];
}

function ClickSort(idx) {
	for(var i=0; i<anSortState.length; i++) {
		if(i == idx)
			anSortState[i] = anSortStateChange[anSortState[i]];
		else
			anSortState[i] = 0;
	}
	SetLocation(true);
	ShowCwd();
	ShowList(1);
}

function ShowList(bSort) {
	var s = sHead;

	for(var i=0; i<anSortState.length; i++)
		s = s.replace('###'+i+'###', asSortIcon[anSortState[i]]);

	if(aList.length) {
		if(bSort) {
			for(var i=0; i<anSortState.length; i++) {
				if(anSortState[i]) {
					nSortDirection = 2 * (anSortState[i]%2) - 1;
					break;
				}
			}
			aList.sort(afSort[i]);
		}
		for(var i=0; i<aList.length; i++) {
			if(aList[i][2] == -1)
				s += aList[i][5].replace(/###1/g, oHash.sOption);
			else
				s += aList[i][5].replace('###1', sSize2Str(i));
		}
	}

	oWinLst.innerHTML = s;
}


function indexDirList(jp) {
	var t, size, ext, icon, pth = sJsonpHost + oHome.sEncoded + oSub.sEncoded, url, s, name;
	aList = new Array();
	for(var i=0; i<jp.length; i++) {
		ext = '';
		name = jp[i].name;
		s = '<tr class=row><td class="icn bdr-r">';
		if(jp[i].type == 'file') {
			size = parseInt(jp[i].size);
			t = name.split('.');
			if(t.length > 1)
				ext = '.' + t[t.length-1].toLowerCase();
			icon = findIcon(name, ext);
			url = pth + encodeURIComponent(name);
			s += '<a href="' + url + '" target=_blank><img src="' +sCommonFolderName+aIconList[icon][0]+ '"></a></td><td class="nm bdr-r"><a href="' +  url + '">' + name + '</a></td><td class="ext bdr-r">' + ext + '</td><td class="sz bdr-r">###1';
		}
		else {
			size = icon = -1;
			url = oSub.sEncoded + encodeURIComponent(name) + '?###1';
			s += '<a href="#' + url + '" target=_blank><img src="' +sCommonFolderName+sIconFolder+ '"></a></td><td class="nm bdr-r" colspan=3><a href="#' + url + '">' + name + '</a>';
		}
		t = Date.parse(jp[i].mtime);
		s += '</td><td class=tm>' + (new Date(t-nTimeZone)).toISOString().substr(0, 19).replace('T', ' ') + '</td></tr>';
		aList.push( new Array(name, ext, size, t, icon, s) );
	}
}
