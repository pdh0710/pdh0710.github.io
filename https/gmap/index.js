"use strict";
let script = document.createElement('script');
script.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD4VJSYQzF6vt3IDuXocKdji4V6TDGvgAI');
script.setAttribute('type', 'text/javascript');
script.onload = init;
document.body.appendChild(script);
document.getElementById('msg0').innerHTML = '';
class TimeAlt {
	constructor(lat = -86400, lon = -86400, alt = -86400, tz = 'UTC', now = (new Date())) {
		this.lat = lat;
		this.lon = lon;
		this.timeZone = tz;
		this.alt = alt;
		this.now = now;
		this.GetTzOff();
		this.matched = false;
	}
	GetTzOff() {
		this.tzOffset = -86400;
		let pos = this.timeZone.indexOf('Etc/'),
			s, sign = 1;
		if (!pos) {
			s = this.timeZone;
			sign = -1;
		} else {
			s = this.now.toLocaleString("UTC", {
				timeZone: this.timeZone,
				timeZoneName: "short"
			});
		}
		pos = s.indexOf('GMT');
		if (pos == -1) {
			pos = s.indexOf('UTC');
		}
		if (pos == -1) {
			pos = s.indexOf('UCT');
		}
		if (pos == -1) {
			return;
		}
		pos += 3;
		if (pos >= s.length) {
			this.tzOffset = 0;
		} else {
			this.tzOffset = sign * hm2sec(s.slice(pos));
		}
	}
	SetLatLon(lat, lon) {
		while (lat < -90) {
			lat += 180;
		}
		while (lon < -180) {
			lon += 360;
		}
		while (lat > 90) {
			lat -= 180;
		}
		while (lon > 180) {
			lon -= 360;
		}
		this.lat = lat;
		this.lon = lon;
		this.matched = false;
	}
	StrTime(level) {
		let s = '',
			offSec = 0;
		if (level) {
			offSec = this.tzOffset;
			s += ' UTC' + sec2hm(offSec);
		}
		if (level > 1) {
			s += ' ' + this.timeZone;
		}
		let d = new Date(this.now.getTime() + offSec * 1000);
		return d.toISOString().replace('T', ' ').substr(0, 19) + s;
	}
	StrLatLon(ta = this) {
		return 'Latitude : ' + lat2dms(ta.lat) + ', Longitude : ' + lon2dms(ta.lon);
	}
	StrAlt(ta = this) {
		return 'Altitude : ' + ta.alt + 'm';
	}
	StrLatLonAlt(ta = this) {
		return this.StrLatLon(ta) + ', ' + this.StrAlt(ta);
	}
	StrLatLonAltRaw(ta = this) {
		return 'Lat=' + ta.lat + ', Lon=' + ta.lon + ', Alt=' + ta.alt;
	}
}

function sec2hm(sec, sign = true) {
	let s = '';
	if (sec == -86400) {
		return '--:--';
	}
	if (sign) {
		switch (Math.sign(sec)) {
			case 0:
				return '+00:00';
			case 1:
				s = '+';
				break;
			case -1:
				s = '-';
				break;
		}
	}
	sec = Math.floor(Math.abs(sec) / 60);
	s += ('00' + Math.floor(sec / 60)).slice(-2) + ':';
	return s + ('00' + (sec % 60)).slice(-2);
}

function hm2sec(s) {
	let r = -86400;
	s = s.trim();
	if (!s) {
		return r;
	}
	let pos = 0;
	let sign = 1,
		ch = s[pos];
	if (ch == '+') {
		pos++;
	} else if (ch == '-') {
		sign = -1;
		pos++;
	}
	if (pos >= s.length) {
		return r;
	}
	ch = s[pos];
	if (ch < '0' || ch > '9') {
		return r;
	}
	r = parseInt(s.slice(pos));
	pos = s.indexOf(':', pos);
	if (pos++ == -1 || pos >= s.length) {
		return sign * r * 3600;
	}
	return sign * 60 * (r * 60 + parseInt(s.slice(pos)));
}

function USdate(d) {
	let s = d.toLocaleString("en-US");
	return s.substring(0, s.indexOf(','));
}

function us2iso(s) {
	let a = s.split('/');
	return a[2] + '-' + ('00' + a[0]).slice(-2) + '-' + ('00' + a[1]).slice(-2);
}

function deg2dms(deg) {
	let dg = Math.floor(deg);
	let min = (deg - dg) * 60;
	let stemp = min.toFixed(8);
	min = parseInt(stemp);
	let sec = (deg - dg - min / 60) * 3600;
	if (sec < 0) {
		sec = 0;
	}
	stemp = sec.toFixed(8);
	sec = parseInt(stemp);
	if (sec == 60) {
		min++;
		sec = parseFloat(stemp) - 60;
	}
	if (min >= 60) {
		dg++;
		min -= 60;
	}
	sec = (deg - dg - min / 60) * 3600;
	if (sec < 0) {
		sec = 0;
	}
	return dg.toString() + '&deg' + ('00' + min).slice(-2) + "'" + sec.toFixed(2) + '"';
}

function lat2dms(lat) {
	let p = '';
	switch (Math.sign(lat)) {
		case 1:
			p = 'N';
			break;
		case -1:
			p = 'S';
			break;
	}
	return deg2dms(Math.abs(lat)) + p;
}

function lon2dms(lon) {
	let p = '';
	switch (Math.sign(lon)) {
		case 1:
			p = 'E';
			break;
		case -1:
			p = 'W';
			break;
	}
	return deg2dms(Math.abs(lon)) + p;
}

function Msg(str, pos = 0, add = false) {
	let s;
	if (pos == 2) {
		s = 'solun';
	} else {
		s = 'msg' + pos;
	}
	if (add) {
		document.getElementById(s).innerHTML += str;
	} else {
		document.getElementById(s).innerHTML = str;
	}
}
let curr = new TimeAlt(37.5, 127.0, 24, 'Asia/Seoul');
curr.matched = true;
let taTemp = new TimeAlt(curr.lat, curr.lon);
let posMarker = ta2ltlg(curr);
let marker = null;
let mymap;

function init() {
	mymap = new google.maps.Map(document.getElementById('mapid'), {
		zoom: 16,
		center: ta2ltlg(curr),
		mapTypeId: google.maps.MapTypeId.HYBRID
	});
	google.maps.event.addListener(mymap, "click", OnMapClick);
	SetMarker(posMarker);
	ButtAct();
	GetGeoLoc();
}

function ta2ltlg(ta) {
	return {
		lat: ta.lat,
		lng: ta.lon
	};
}

function SetMarker(ll) {
	if (marker) {
		marker.setMap(null);;
	}
	posMarker = ll;
	marker = new google.maps.Marker({
		position: ll,
		map: mymap
	});
}

function OnMapClick(e) {
	var latLng = e.latLng;
	SetMarker(e.latLng);
	taTemp.SetLatLon(e.latLng.lat(), e.latLng.lng());
	Msg(taTemp.StrLatLon());
}

function SetMap() {
	mymap.panTo(posMarker);
	Msg(taTemp.StrLatLon());
	GetAll();
}

function ButtAct() {
	document.getElementById('butt').className = 'buttAct';
	document.getElementById('butt').onclick = SetMap;
}

function ButtInact() {
	document.getElementById('butt').className = 'buttInact';
	document.getElementById('butt').onclick = null;
}

function GetGeoLoc() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(ProcLoc, LocError);
	} else {
		Msg("Geolocation is not supported by this browser.", 1);
	}
}

function ProcLoc(loc) {
	taTemp.SetLatLon(loc.coords.latitude, loc.coords.longitude);
	SetMarker(ta2ltlg(taTemp));
	SetMap();
}

function LocError(error) {
	switch (error.code) {
		case error.PERMISSION_DENIED:
			Msg("User denied the request for Geolocation.", 1);
			break;
		case error.POSITION_UNAVAILABLE:
			Msg("Location information is unavailable.", 1);
			break;
		case error.TIMEOUT:
			Msg("The request to get user location timed out.", 1);
			break;
		case error.UNKNOWN_ERROR:
			Msg("An unknown error occurred.", 1);
			break;
	}
	Msg(curr.StrLatLon());
	Msg(StrTzAlt(curr), 1);
}
class AjaxObj {
	constructor(idx, url = null, PostProc = null) {
		this.idx = idx;
		this.url = url;
		this.PostProc = PostProc;
	}
}
const urlAltitude = 'https://pdh0710.duckdns.org/ele-api/lookup?locations=$lat$,$lon$';
const urlTimeZone = 'https://pdh0710.duckdns.org/node/timezone?lat=$lat$&lon=$lon$';
const urlOneDay = 'https://api.usno.navy.mil/rstt/oneday?date=$date$&coords=$lat$,$lon$&tz=$tz$'
//const urlOneDay = 'https://pdh0710.duckdns.org/rstt/oneday?date=$date$&coords=$lat$,$lon$&tz=$tz$'
const allDone = 5;
const arrUrl = [urlTimeZone, urlAltitude];
let gDone, gDoneErr, gExec = 0,
	resRS = {};
let arrObj = [{
		idx: 0,
		url: '',
		PostProc: tzProc
	},
	{
		idx: 1,
		url: '',
		PostProc: eleProc
	}
];

function StrTzAlt(ta) {
	return ta.StrTime(2) + ' ....... ' + ta.StrAlt();
}

function StrErr(type, msg) {
	return '[' + type + ' Error] : ' + msg;
}

function GetAll() {
	if (gExec) {
		Msg(StrErr('Receiving', 'Receiving previouse TimeZone &amp; Altitude data...'), 1, false);
		return;
	}
	ButtInact();
	gExec = 1;
	gDone = gDoneErr = 0;
	Msg('', 1);
	Msg('', 2);
	taTemp.now = new Date();
	for (let i = 0; i < arrObj.length; i++) {
		arrObj[i].url = arrUrl[i].replace('$lat$', taTemp.lat.toString()).replace('$lon$', taTemp.lon.toString());
		AjaxGet(arrObj[i]);
	}
}

function GetDone(idx, err = null) {
	let i;
	if (++gDone < allDone) {
		if (err) {
			gDoneErr++;
			if (typeof idx == 'number') {
				if (!idx) {
					gDone += 3;
					gDoneErr += 3;
				}
				Msg('[' + idx + ']' + err, 1, true);
			} else {
				Msg('[' + idx + ']' + err, 2, true);
			}
		} else if (idx == 0) {
			Msg(taTemp.StrTime(2), 1, true);
			GetRiseSet();
		} else if (idx == 1) {
			Msg(taTemp.StrAlt(), 1, true);
		} else {}
		if (gDone < allDone) {
			return;
		}
	}
	Msg(StrTzAlt(taTemp), 1, gDoneErr != 0);
	for (i in resRS) {
		Msg(us2iso(i) + '<br />&nbsp;&nbsp;&nbsp;&nbsp;Sun : ' + resRS[i].sun + '<br />&nbsp;&nbsp;&nbsp;&nbsp;Moon : ' + resRS[i].moon + '<br /><br />', 2, true);
	}
	if (!gDoneErr) {
		taTemp.matched = true;
		curr = taTemp;
		taTemp = new TimeAlt(curr.lat, curr.lon);
	}
	gExec = 0;
	ButtAct();
}

function AjaxReadyState() {
	if (this.readyState != 4) {
		return;
	}
	if (this.status == 200) {
		try {
			this.myObj.PostProc(this.responseText);
			GetDone(this.myObj.idx);
		} catch (err) {
			GetDone(this.myObj.idx, err.message);
		}
	} else {
		GetDone(this.myObj.idx, StrErr('AJAX Send', this.status + '(' + this.myObj.url + ')'));
	}
}

function AjaxGet(obj) {
	let ajax = new XMLHttpRequest();
	ajax.onreadystatechange = AjaxReadyState;
	ajax.myObj = obj;
	try {
		ajax.open("GET", obj.url, true);
		ajax.send();
	} catch (err) {
		GetDone(obj.idx, StrErr('AJAX Send', err.message + '(' + obj.url + ')'));
	}
}

function tzProc(data) {
	data = JSON.parse(data);
	taTemp.timeZone = data.TimeZone;
	taTemp.GetTzOff();
	if (taTemp.tzOffset == -86400) {
		throw new Error(StrErr('TimeZone not valid', taTemp.timeZone));
	}
}

function eleProc(data) {
	data = JSON.parse(data);
	taTemp.alt = data.results[0].elevation;
}

function rsCmp(a, b) {
	return a[1] - b[1];
}
let rsTbl = [
	['BC', 0, 'Civil Dawn'],
	['EC', 1, 'Civil Dusk'],
	['R', 2, 'Rise'],
	['U', 3, 'Transit'],
	['S', 4, 'Set'],
	['L', 5, 'Lower Transit']
];
let rsPhase = {
	'new moon': 0,
	'first quarter': 50,
	'full moon': 100,
	'last quarter': -50
};

function rsType(type) {
	for (let i = 0; i < rsTbl.length; i++) {
		if (rsTbl[i][1] == type)
			return rsTbl[i][2];
	}
	return '';
}

function rsPhen(phen) {
	for (let i = 0; i < rsTbl.length; i++) {
		if (rsTbl[i][0] == phen)
			return rsTbl[i][1];
	}
	return -1;
}
class SunData {
	constructor() {
		this.arr = [];
	}
	toString() {
		let s = '';
		this.arr.sort(rsCmp);
		for (let i = 0; i < this.arr.length; i++) {
			if (s) {
				s += ', ';
			}
			if (this.arr[i][1] != -86400) {
				s += rsType(this.arr[i][0]) + '=' + sec2hm(this.arr[i][1], false);
			}
		}
		return s;
	}
}
class MoonData {
	constructor() {
		this.arr = [];
	}
	toString() {
		let s = '';
		this.arr.sort(rsCmp);
		for (let i = 0; i < this.arr.length; i++) {
			if (s) {
				s += ', ';
			}
			if (this.arr[i][1] != -86400) {
				s += rsType(this.arr[i][0]) + '=' + sec2hm(this.arr[i][1], false);
			}
		}
		return s + ' ... Fraction=' + this.frac + '%';
	}
}

function US3dates(d) {
	let arr = [USdate(new Date(d.getTime() - 86400 * 1000)), USdate(d), USdate(new Date(d.getTime() + 86400 * 1000))];
	for (let i = 0; i < arr.length; i++) {
		resRS[arr[i]] = {
			sun: new SunData(),
			moon: new MoonData()
		};
	}
}

function GetRiseSet() {
	US3dates(taTemp.now);
	let off = taTemp.tzOffset / 3600;
	let u;
	for (let i in resRS) {
		u = urlOneDay.replace('$date$', i).replace('$lat$', taTemp.lat.toString()).replace('$lon$', taTemp.lon.toString()).replace('$tz$', off.toString());
		AjaxGet(new AjaxObj(i, u, rsProc));
	}
}

function rsProc(data) {
	data = JSON.parse(data);
	let d = data.month.toString() + '/' + data.day.toString() + '/' + data.year.toString();
	let i, sec;
	let arr = resRS[d].sun.arr;
	for (i = 0; i < data.sundata.length; i++) {
		sec = hm2sec(data.sundata[i].time);
		if (sec != -86400) {
			arr[arr.length] = [rsPhen(data.sundata[i].phen), sec];
		}
	}
	arr = resRS[d].moon.arr;
	for (i = 0; i < data.moondata.length; i++) {
		sec = hm2sec(data.moondata[i].time);
		if (sec != -86400) {
			arr[arr.length] = [rsPhen(data.moondata[i].phen), sec];
		}
	}
	try {
		let f = parseFloat(data.fracillum);
		if (f == 100) {
			f = 99.9;
		} else if (f == 0) {
			f = 0.1;
		}
		if (data.curphase.toLowerCase().indexOf('waxing') < 0)
			f = -f;
		resRS[d].moon.frac = f;
	} catch (e) {
		resRS[d].moon.frac = rsPhase[data.closestphase.phase.toLowerCase()];
	}
}