document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

document.getElementById('peepVolumeRange').addEventListener('input', changePeepVol);
document.getElementById('ttsVolumeRange').addEventListener('input', changeTtsVol);

// filling voices dropdown
let voices = chrome.tts.getVoices(
	function(voices) {
		for (var i = 0; i < voices.length; i++) {
			var newOption = document.createElement("option");
			//newOption.value = voices[i].voiceName + "_" + voices[i].lang;
			newOption.value = voices[i].voiceName;
			newOption.text = voices[i].voiceName + " (" + voices[i].lang + ")";
			newOption.lang = voices[i].lang;
			document.getElementById('dropdownVoices').options.add(newOption);
		}
	}
);

// Saves options to chrome.storage
function save_options() {
	let peepActive = document.getElementById('peepActive').checked;
	let ttsActive = document.getElementById('ttsActive').checked;
	let peepVolume = document.getElementById('peepVolumeRange').value;
	let ttsVolume = document.getElementById('ttsVolumeRange').value;
	var dropDownVoices = document.getElementById('dropdownVoices');
	let ttsVoice = dropDownVoices.options[dropDownVoices.selectedIndex].value;
	let ttsVoiceLang = dropDownVoices.options[dropDownVoices.selectedIndex].lang;
	let ttsWithUsername = document.getElementById('ttsWithUsername').checked;

	chrome.storage.sync.set({
		isPeepActive: peepActive,
		isTtsActive: ttsActive,
		peepVolume: peepVolume,
		ttsVolume: ttsVolume,
		ttsVoice: ttsVoice,
		ttsVoiceLang: ttsVoiceLang,
		isTtsWithUsername: ttsWithUsername
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
	ttsVolume: 50,
	ttsVoice: "default",
	ttsVoiceLang: "",
	isTtsWithUsername: false
  }, function(items) {
    document.getElementById('peepActive').checked = items.isPeepActive;
    document.getElementById('ttsActive').checked = items.isTtsActive;
	document.getElementById('peepVolumeRange').value = items.peepVolume;
	document.getElementById('peepVolValue').textContent = items.peepVolume;
	document.getElementById('ttsVolumeRange').value = items.ttsVolume;
	document.getElementById('ttsVolValue').textContent = items.ttsVolume;
    document.getElementById('ttsWithUsername').checked = items.isTtsWithUsername;
	chooseFittingVoiceInDrowdown(items.ttsVoice);
  });
}

function chooseFittingVoiceInDrowdown(voiceId) {
	var dropDownVoices = document.getElementById('dropdownVoices');
	for (var i = 0; i < dropDownVoices.length; i++) {
		if (dropDownVoices[i].value == voiceId) {
			dropDownVoices.selectedIndex = i;
		}
	}
}

function changePeepVol() {
	document.getElementById('peepVolValue').textContent = this.value;
}
function changeTtsVol() {
	document.getElementById('ttsVolValue').textContent = this.value;
}
