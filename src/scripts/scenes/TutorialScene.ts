import  {TextButtonObject} from '../objects/TextButtonObject';
import DraggableImage from '../objects/DraggableImage';


export default class TutorialScene extends Phaser.Scene {
    private importantImage!: DraggableImage;
    private startX!: number;
    private startY!: number;

    constructor() {
        super({ key: 'TutorialScene' });
        console.log("in tutorial scene constructor");
    }

    init(data: {lastX:number, lastY:number, levelNumber:number}) {
        this.startX = data.lastX;
        this.startY = data.lastY;
    }

    create() {
        // creates the draggable image object
       this.importantImage = new DraggableImage(this, this.startX, this.startY, "corgi");
        // adds it to this scene    
        this.add.existing(this.importantImage);

        this.add.text(0, this.scale.height, "The image is draggable.\nThe position is remembered between scenes.").setOrigin(0, 1);

        // creates the text button to move to a different level & adds to scene 
        this.add.existing(new TextButtonObject(this, this.scale.height / 2, "Begin Level 1", () => {
            let data = this.getLastXY();
            data["levelNumber"] = 1;
            this.scene.start("LevelScene", data);
        }))

        
    }

    update() {
    }

    getLastXY() {
        return { lastX: this.importantImage.x, lastY: this.importantImage.y, levelNumber: 0 };
    }
}
