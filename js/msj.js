import { getMsgs } from './database.js';
const totalTime = 12000;
let allMessages = [];
let currentMsg = -1;

getMessages();

function animMsg () {
	window.idMsj.classList.toggle('AnimacionEntradaMensaje');
	setTimeout(() => {
		window.idMsj.classList.toggle('AnimacionEntradaMensaje');
		window.idMsj.classList.toggle('AnimacionSalidaMensaje');
		nextMsg();
	}, totalTime - 1000);
	setTimeout(() => {
		window.idMsj.classList.toggle('AnimacionSalidaMensaje');
		animMsg();
	}, totalTime);
	window.idMsj.hidden = false;
};

function nextMsg () {
	currentMsg = (currentMsg + 1) % allMessages.length;
	setMessage(currentMsg);
};

function getMessages () {
	getMsgs().then((res) => {
		allMessages = res;
		if (currentMsg < 0) {
			nextMsg();
			setTimeout(() => animMsg(), 1000);
		}
	});
	setTimeout(() => getMessages(), 4 * totalTime);
};

function setMessage (id) {
	if (id < 0) return;
	setTimeout(() => {
		window.idUsername.innerHTML = allMessages[id].name;
		window.idCity.innerHTML = allMessages[id].city;
		window.idTextMsj.innerHTML = allMessages[id].message;
	}, 1000);
}
