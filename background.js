chrome.runtime.onInstalled.addListener(function() {
	console.log("Loot Peeps installed!");
});

function speak(msg, vol) {
	let volume = vol * 0.01;
	chrome.tts.speak(msg, {volume: volume});
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		speak(request.message, request.volume);
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
