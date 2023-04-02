import { TextButtonObject } from '../objects/TextButtonObject';
import DraggableImage from '../objects/DraggableImage';

export default class PauseScene extends Phaser.Scene {
    private previousScene!: string;
    private importantImage!: DraggableImage;
    private startX!: number;
    private startY!: number;

    constructor() {
        super({ key: 'PauseScene' });
    }

    init(data:{lastX:number, lastY:number, previousScene:string}) {
        this.previousScene = data.previousScene;
        this.startX = data.lastX;
        this.startY = data.lastY;
    }

    create() {
         // creates the draggable image object
        this.importantImage = new DraggableImage(this, this.startX, this.startY, "pause");
         // adds it to this scene
        this.add.existing(this.importantImage);

        this.add.text(0, this.scale.height, "The pause screen's image is not saved!").setOrigin(0, 1);
        console.log("in pause");
    }

    update() {
         // creates the transition button object to resume to last scene
        this.add.existing(new TextButtonObject(this, this.scale.height * 3 / 4, "Resume", () => {
            this.scene.stop();
            this.scene.wake(this.previousScene);
        }));
        
    }

    getLastXY() {
        return { lastX: this.importantImage.x, lastY: this.importantImage.y };
    }
}