# OpenPUBG API

DEPRECATED - PUBG corp offered an official API available [here](https://developer.playbattlegrounds.com/)


Once set up provides an easy web interface for you to look up PUBG stats.
Also easily extensible and usable for other projects.

Installation
1. Have Steam installed and logged in to an account with a PlayerUnknown's Battlegrounds license.
2. Clone this repository and run 'npm i' in its directory.
3. Build [Greenworks](https://github.com/greenheartgames/greenworks) for your platform in ./greenworks
3. run 'npm run bundle' and once it finishes 'npm run start' 
4. open localhost:3000 on a browser and explore the UI.

The pubg-socket communication is derived from a class written by [Hormold](https://github.com/Hormold/pubg) 
