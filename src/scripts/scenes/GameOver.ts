import DraggableImage from "../objects/DraggableImage";

export default class GameOver extends Phaser.Scene {
    private importantImage!: DraggableImage;
    private startX!: number;
    private startY!: number;
    constructor() {
        super({ key: 'GameOver' });
    }

    init(data: {lastX: number, lastY: number}) {
        this.startX = data.lastX;
        this.startY = data.lastY;
    }

    create() {
        // // creates the draggable image object 
        this.importantImage = new DraggableImage(this, this.startX, this.startY, "gameOver");
        this.add.existing(this.importantImage);

        this.add.text(this.scale.width / 2, this.scale.height * 2 / 3, "No more game!");
    }

    update() {
    }
}