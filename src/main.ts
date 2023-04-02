import Phaser from 'phaser'
import PreLoadScene from './scripts/scenes/PreLoadScene'
import MainMenu from './scripts/scenes/MainMenu'
import TutorialScene from './scripts/scenes/TutorialScene'
import LevelScene from './scripts/scenes/LevelScene'
import PauseScene from './scripts/scenes/PauseScene'
import GameOver from './scripts/scenes/GameOver'

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
