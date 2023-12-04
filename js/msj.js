import { getMsgs } from './database.js';
let allMessages = [];
let currentMsg = -1;
getMessages();

function nextMsg () {
	currentMsg = (currentMsg + 1) % allMessages.length;
	setMessage(currentMsg);
	setTimeout(() => {
		nextMsg();
	}, 8000);
};
function animMsg () {
	console.log('animMsg');
	window.idMsj.classList.toggle('AnimacionSalidaMensaje');
	setTimeout(() => {
		animMsg();
	}, 4000);
};

function getMessages () {
	getMsgs().then((res) => {
		allMessages = res;
		if (currentMsg < 0) {
			animMsg();
			nextMsg();
		}
	});
	setTimeout(() => {
		getMessages();
	}, 24000);
};
function setMessage (id) {
	if (id < 0) return;
	setTimeout(() => {
		window.idUsername.innerHTML = allMessages[id].name;
		window.idCity.innerHTML = allMessages[id].city;
		window.idText.innerHTML = allMessages[id].message;
	}, 1000);
}
