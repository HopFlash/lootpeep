document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

document.getElementById('peepVolumeRange').addEventListener('input', changePeepVol);
document.getElementById('ttsVolumeRange').addEventListener('input', changeTtsVol);

// Saves options to chrome.storage
function save_options() {
	let peepActive = document.getElementById('peepActive').checked;
	let ttsActive = document.getElementById('ttsActive').checked;
	let peepVolume = document.getElementById('peepVolumeRange').value;
	let ttsVolume = document.getElementById('ttsVolumeRange').value;

	chrome.storage.sync.set({
		isPeepActive: peepActive,
		isTtsActive: ttsActive,
		peepVolume: peepVolume,
		ttsVolume: ttsVolume
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
	peepVolume: 50,
	ttsVolume: 50
  }, function(items) {
    document.getElementById('peepActive').checked = items.isPeepActive;
    document.getElementById('ttsActive').checked = items.isTtsActive;
	document.getElementById('peepVolumeRange').value = items.peepVolume;
	document.getElementById('peepVolValue').textContent = items.peepVolume;
	document.getElementById('ttsVolumeRange').value = items.ttsVolume;
	document.getElementById('ttsVolValue').textContent = items.ttsVolume;
  });
}

function changePeepVol() {
	document.getElementById('peepVolValue').textContent = this.value;
}
function changeTtsVol() {
	document.getElementById('ttsVolValue').textContent = this.value;
}
