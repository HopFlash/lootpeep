var myElement = document.getElementsByTagName("body")[0];

var isActive = false;
var isFlipped = false;

var config = { attributes: true, childList: false, subtree: true, attributeFilter: ["class"] };

var callback = function(mutationsList, observer) {
	for(var mutation of mutationsList) {
		if (mutation.type == 'attributes') {
//			console.log("CHANGES: " + mutation.attributeName);
			var attrValue = mutation.target.getAttribute(mutation.attributeName);
//			console.log("Content: " + attrValue);
			if (!isActive && attrValue.includes("is-active")) {
//				console.log("IS ACTIVE");
				isActive = true;
				
				chrome.storage.sync.get({
					isPeepActive: true,
					peepVolume: 50
				}, function(items) {
//					console.log("Peepvolume:" + items.peepVolume);
					if (items.isPeepActive) {
						var sound = new Howl({
							src: ["/audio/new-tip.mp3"],
							volume: items.peepVolume * 0.01
						}).play();
					}
				})
			}
			else {
				isActive = false;
			}
			if (!isFlipped && attrValue.includes("is-flipped")) {
				isFlipped = true;
				
				chrome.storage.sync.get({
					isTtsActive: true,
					ttsVolume: 50,
					ttsVoice: 'default',
					ttsVoiceLang: '',
					isTtsWithUsername: false
				}, function(items) {
					if (items.isTtsActive) {
						var msgParentElement = myElement.getElementsByClassName("lts-potsdamer-platz--message")[0];
						var msgElement = msgParentElement.getElementsByTagName("span")[0];
						var usernameElement = msgParentElement.getElementsByTagName("span")[1];
						var msg = msgElement.textContent.trim();
						if ( (items.isTtsWithUsername) && (typeof(usernameElement) != 'undefined') ) {
							var username = usernameElement.textContent.replace("From:", "").trim();
							//console.log("Username: " + username);
							//console.log("Voice Lang: " + items.ttsVoiceLang);
							var shortLang = items.ttsVoiceLang.substr(0, items.ttsVoiceLang.indexOf("-") );
							//console.log("Voice Lang short: " + shortLang);
							var usernameMsgPart = "";
							switch(shortLang) {
								case "de":
									usernameMsgPart = ", Nachricht von " + username;
									break;
								case "en":
									usernameMsgPart = ", Message from " + username;
									break;
								case "es":
									usernameMsgPart = ", Mensaje de " + username;
									break;
								case "fr":
									usernameMsgPart = ", Message de " + username;
									break;
								case "it":
									usernameMsgPart = ", Messaggio da " + username;
									break;
								case "nl":
									usernameMsgPart = ", Bericht van " + username;
									break;
								case "pl":
									usernameMsgPart = ", wiadomośc od " + username;
									break;
								case "pt":
									usernameMsgPart = ", Mensagem de " + username;
									break;
								case "ru":
									usernameMsgPart = ", сообщение от " + username;
									break;
							}
							msg += usernameMsgPart;
						}
//						console.log("Message: " + msg);
//						console.log("TtsVolume: " + items.ttsVolume);
						chrome.runtime.sendMessage( {message: msg, volume: items.ttsVolume, voiceId: items.ttsVoice} );
					}
				})
			}
			else {
				isFlipped = false;
			}
		}
	}
};

console.log("Init MutationObserver ...");
var observer = new MutationObserver(callback);
console.log("Starting observing ...");
observer.observe(myElement, config);
