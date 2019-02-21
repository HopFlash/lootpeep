chrome.runtime.onInstalled.addListener(function() {
	console.log("Loot Peeps installed!");
});

function speak(msg, vol, voice) {
	let volume = vol * 0.01;
	var voiceName = voice;
	if (voice == 'default') { voiceName = ''; };
	if (voice == 'autodetect') { voiceName = ''; };
	chrome.tts.speak(msg, {volume: volume, voiceName: voiceName});
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		speak(request.message, request.volume, request.voiceId);
	}
);

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
	chrome.declarativeContent.onPageChanged.addRules([{
		conditions: [new chrome.declarativeContent.PageStateMatcher({
			pageUrl: {hostEquals: 'loots.com'},
		})],
		actions: [new chrome.declarativeContent.ShowPageAction()]
	}]);
});
