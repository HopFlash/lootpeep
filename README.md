# lootpeep

## General Informations
This is a Chrome Extension to enhance the experience with the Overlay functionality of Loots.com. The main purpose was to get the alert peep before the loot appears on screen to react properly as a streamer. It starts as an research project to get to know Chrome Extensions. While reading the Chrome Extension API I stumble over the easy TTS-feature and added it so that the viewer loot message can be read out loud.

## Features
- Peep-sound when loot appears in overlay
- TTS (Text-to-Speech) the loot message in different languages (configurable)
- optional readout of username who send the loots message in some languages (german, english, spanish, french, italian, dutch, polish, portuguese and russian)
- volume control on peep and tts

## Installation (sorry, no Chrome Store entry yet)
- Download Zip from GitHub
- Unzip it into a clean directory
- Open Chrome Browser
- Open extensions (e.g. "URL": chrome://extensions )
- Activate "Developer mode" (upper right corner) and be aware of it because it can be a security hole for other extensions
- Click "Load unpacked extensions..."
- Go to the directory where you unpacked the zip and into the subfolder "extension" and press "ok"

Now it should be active in your chrome instance and you can deactive "Developer mode" again.

## Update
Do like "Installation" (but delete the content of the unzipped directory) but then you can click the refresh button on the Extensions-Page by "Loots Peep" tile.

## Use
- Open your personal Loots page with tab "Live" and choose "Overlays". 
- Scroll down and click on the icon called "GENERIC" or the dropdown box "Select your software to get the overlay URL …" and choose "Other/Generic" overlay option.

![Use image 1](/images_readme/use1.jpg)
- Click the appearing link and let this open in your Chrome Browser – the screen will appear green. DO NOT CLOSE THIS WINDOWS

![Use image 2](/images_readme/use2.jpg)
- In your Chrome Browser bar there appears a Loots Peep button where you can configure some options. (only when you are on a Loots page)

![Use image 3](/images_readme/use3.jpg)

Tip: You should go on the Loots "tips" page and slide the Tipjar sound volume slider (under "Status" headline) full to the left to mute this sound if you want to have "condensed view" oder "live view" open (to see the user messages).

## Addition Voices
(!!! not tested yet !!!)
(please be aware of that I don't know if the following infos really helps you to get new voices in this extensions!)
- try out the informations on https://support.office.com/en-us/article/How-to-download-Text-to-Speech-languages-for-Windows-10-d5a6b612-b3ae-423f-afa5-4f6caf1ec5d3
- try to install voices from third-party-sites like e.g. https://www.clarosoftware.com/support/voices/

## Future features
- language recognition of the loot message to choose an fitting speaker (using chrome.i18n detectLanguage)
- nice "Loot peep"-Icon
- code documentation
- error handling
- adding special voices or voice services like Amazon Polly or Googles Cloud Speech-to-Text

## Loots ToS
I checked with Loots-Support that they are aware of this extension and it's fine to use (as long as there is no commercial use of this extension).
So it doesn't break their Terms of Services.
