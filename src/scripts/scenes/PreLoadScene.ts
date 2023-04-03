export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
    console.log("in preload constructor");
  }

  preload() {
    // loads all the images for the project
    this.load.image("ada", "assets/images/ada.png");
    this.load.image("potato", "assets/images/potato.png");
    this.load.image("cat", "assets/images/soon.png");
    this.load.image("corgi", "assets/images/whiteboard_corgi.png");
    this.load.image("level1", "assets/images/campus.png");
    this.load.image("level2", "assets/images/east_campus.png");
    this.load.image("level3", "assets/images/trabant.png");
    this.load.image("end", "assets/images/end.png");
    this.load.image("start", "assets/images/start.png");
  }

  create() {
    //starts with the main menu scene
    this.scene.start('MainMenu');
    console.log("done with preload");
  }
}