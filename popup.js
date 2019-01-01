document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

// Saves options to chrome.storage
function save_options() {
	let peepActive = document.getElementById('peepActive').checked;
	let ttsActive = document.getElementById('ttsActive').checked;

	chrome.storage.sync.set({
		isPeepActive: peepActive,
		isTtsActive: ttsActive
	}, function() {
		// Update status to let user know options were saved.
		var status = document.getElementById('status');
		status.textContent = 'Options saved.';
		setTimeout(function() {
			status.textContent = '';
		}, 750);
	});
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    isPeepActive: true,
    isTtsActive: true
  }, function(items) {
    document.getElementById('peepActive').checked = items.isPeepActive;
    document.getElementById('ttsActive').checked = items.isTtsActive;
  });
}
