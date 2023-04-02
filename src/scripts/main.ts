import Phaser from 'phaser'
import PreLoadScene from './scenes/PreLoadScene'
import MainMenu from './scenes/MainMenu'
import TutorialScene from './scenes/TutorialScene'
import LevelScene from './scenes/LevelScene'
import PauseScene from './scenes/PauseScene'
import GameOver from './scenes/GameOver'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: [PreLoadScene,TutorialScene,MainMenu,LevelScene,PauseScene,GameOver],
}

export default new Phaser.Game(config)
