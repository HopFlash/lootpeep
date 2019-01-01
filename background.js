chrome.runtime.onInstalled.addListener(function() {
	console.log("Loot Peeps installed!");
});

function speak(msg) {
	chrome.tts.speak(msg);
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		speak(request.message);
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
