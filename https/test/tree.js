'use strict';

const jName = 'ctag.json';
const jUrl = '/json/' + jName;
const textarea = document.getElementById('textarea');
const message = document.getElementById('message');
let ctag = null;


async function loadJson() {
	let res = null;
	try {
		res = await fetch(jUrl);
		ctag = await res.json();
		message.innerHTML = res.status;
	}
	catch(err) {
		message.innerHTML = err.message + ' ... ' + res.status;
	}
	// console.log(ctag);
	textarea.value = JSON.stringify(ctag, null, '\t');
}

async function saveJson() {
	let res = null;
	try {
		ctag = JSON.parse(textarea.value);
		res = await fetch(jUrl, {
			method:'PUT',
			headers:{ 'Content-Type':'application/json' },
			body:JSON.stringify(ctag)
		});
		message.innerHTML = res.status;
	}
	catch(err) {
		message.innerHTML = err.message;
	}
}

document.getElementById('load').onclick = loadJson;
document.getElementById('save').onclick = saveJson;
