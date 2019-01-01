//var myElement = document.getElementsByClassName("js-overlays--overlay-container")[0];
var myElement = document.getElementsByTagName("body")[0];

var isActive = false;

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
					isTtsActive: true
				}, function(items) {
					if (items.isPeepActive) {
						var sound = new Howl({
							src: ["/audio/new-tip.mp3"]
						}).play();
					}
					if (items.isTtsActive) {
						var msgParentElement = myElement.getElementsByClassName("lts-potsdamer-platz--message")[0];
						var msgElement = msgParentElement.getElementsByTagName("span")[0];
						var msg = msgElement.textContent.trim();
						console.log("Message: " + msg);
						chrome.runtime.sendMessage( {message: msg} );
					}
				})
			}
			else {
				isActive = false;
			}
		}
	}
};

console.log("Init MutationObserver ...");
var observer = new MutationObserver(callback);
console.log("Starting observing ...");
observer.observe(myElement, config);
