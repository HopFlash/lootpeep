# lootpeep

## General Informations
This is a Chrome Extension to enhance the experience with the Overlay functionality of Loots.com. The main propose was to get the alert peep of loot-apperance before the loot appears on screen to react properly as a streamer. It starts as an research project to to know Chrome Extensions. While reading the Chrome Extension API I stumble over the easy TTS-feature and added it so that the viewer loot message can be read out loud.

## Features
- Peep-sound when loot appears in overlay
- TTS (Text-to-Speech) the loot message in different languages (configurable)
- volume control on peep and tts

## Installation (sorry, no Chrome Store entry yet)
- Download Zip from GitHub
- Unzip it into a clean directory
- Open Chrome Browser
- Open extensions (e.g. "URL": chrome://extensions )
- Activate "Developer mode" (upper right corner) and be aware of it because it can be a security hole for other extensions
- Click "Load unpacked extensions..."
- Go to the directory where you unpacked the zip and press "ok"

Now it should be active in your chrome instance and you can deactive "Developer mode" again.

## Update
Do like "Installation" (but delete the content of the unzipped directory) but then you can click the refresh button on the Extensions-Page by "Loots Peep" tile.

## Use
- Open your personal Loots page with tab "Live" and choose "Overlays". 
- Scroll down and click on the "GENERIC" overlay option.
- Click the appearing link and let this browser tab open will you want to use this extension.
- In your Chrome Browser bar there appears a Loots Peep button where you can configure some options. (only when you are on a Loots page)

Tip: You should go on the Loots "tips" page and slide the Tipjar sound volume slider (under "Status" headline) full to the left to mute this sound if you want to have "condensed view" oder "live view" open (to see the user messages).

## Future features
- language recognition of the loot message to choose an fitting speaker (using chrome.i18n detectLanguage)
- nice "Loot peep"-Icon
- code documentation
- error handling

## Loots ToS
I checked with Loots-Support that they are aware of this extension and it's fine to use (as long as there is no commercial use of this extension).
So it doesn't break their Terms of Services.
