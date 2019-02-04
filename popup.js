document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

document.getElementById('peepvolumeRange').addEventListener('input', changePeepVol);

// Saves options to chrome.storage
function save_options() {
	let peepActive = document.getElementById('peepActive').checked;
	let ttsActive = document.getElementById('ttsActive').checked;
	let peepVolume = document.getElementById('peepvolumeRange').value;

	chrome.storage.sync.set({
		isPeepActive: peepActive,
		isTtsActive: ttsActive,
		peepVolume: peepVolume
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
  chrome.storage.sync.get({
    isPeepActive: true,
    isTtsActive: true,
	peepVolume: 50
  }, function(items) {
    document.getElementById('peepActive').checked = items.isPeepActive;
    document.getElementById('ttsActive').checked = items.isTtsActive;
	document.getElementById('peepvolumeRange').value = items.peepVolume;
	document.getElementById('peepVolValue').textContent = items.peepVolume;
  });
}

function changePeepVol() {
	document.getElementById('peepVolValue').textContent = this.value;
}
