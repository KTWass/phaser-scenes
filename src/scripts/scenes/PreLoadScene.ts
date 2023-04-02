export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
    console.log("in preload constructor");
  }

  preload() {

    this.load.image("main", "assets/ada.png");
    this.load.image("pause", "assets/potato.png");
    this.load.image("gameOver", "assets/soon.png");
    this.load.image("tutorial", "assets/whiteboard_corgi.png");
    this.load.image("level1", "assets/campus.png");
    this.load.image("level2", "assets/east_campus.png");
    this.load.image("level3", "assets/trabant.png");
    this.load.image("sky", "assets/sky.png");
    this.load.image("end", "assets/end.png");
    this.load.image("start", "assets/start.png");
  }

  create() {
    this.scene.start('MainMenu');
    console.log("done with preload");
  }
}