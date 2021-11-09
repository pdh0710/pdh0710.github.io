"use strict";

function lz2(n) {
	return ('000' + n).slice(-2);
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

function lng2dms(lng) {
	let p = '';
	switch (Math.sign(lng)) {
		case 1:
			p = 'E';
			break;
		case -1:
			p = 'W';
			break;
	}
	return deg2dms(Math.abs(lng)) + p;
}

function StrLatLng(latlng) {
	return 'Latitude : ' + lat2dms(latlng.lat) + ' (' + latlng.lat + ') ... Longitude : ' + lng2dms(latlng.lng) + ' (' + latlng.lng + ')';
}


function Msg(str, add = false) {
	let s = 'msg0';
	if (add) {
		document.getElementById(s).innerHTML += str;
	} else {
		document.getElementById(s).innerHTML = str;
	}
}

let curr = {lat:37.5, lng:127.0};
let marker = null;
let mymap;

function SetMarker(latlng) {
	if (marker) {
		marker.setMap(null);;
	}
	curr = latlng;
	marker = new google.maps.Marker({
		position: latlng,
		map: mymap
	});
}

function OnMapClick(e) {
	curr.lat = e.latLng.lat();
	curr.lng = e.latLng.lng();
	SetMarker(curr);
	Msg(StrLatLng(curr));
}

function SetMap() {
	mymap.panTo(curr);
	Msg(StrLatLng(curr));
}

function GetGeoLoc() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(ProcLoc, LocError);
	} else {
		Msg("Geolocation is not supported by this browser.");
	}
}

function ProcLoc(loc) {
	curr.lat = loc.coords.latitude;
	curr.lng = loc.coords.longitude;
	Msg(StrLatLng(curr));
	SetMarker(curr);
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
}

function Init() {
	mymap = new google.maps.Map(document.getElementById('mapid'), {
		zoom: 16,
		center: curr,
		mapTypeId: google.maps.MapTypeId.HYBRID
	});
	google.maps.event.addListener(mymap, "click", OnMapClick);
	SetMarker(curr);
	GetGeoLoc();
}


function AddScript(url, onload) {
	var script = document.createElement('script');

	script.setAttribute('src', url);
	script.setAttribute('type', 'text/javascript');
	script.onload = onload;
	document.body.appendChild(script);
}


const mapUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAnXsknTjFrg1btUCE9598StxN4tpyO5rY'
document.getElementById('msg0').innerHTML = '';
AddScript(mapUrl, Init);
