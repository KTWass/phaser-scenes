import { TextButtonObject } from '../objects/TextButtonObject';
import DraggableImage from '../objects/DraggableImage';
import ImageButtonObject from '../objects/ImageButtonObject';

export default class LevelScene extends Phaser.Scene {
    levelNumber!: number;

    private importantImage!: DraggableImage;
    private startX!: number;
    private  startY!: number;

    constructor() {
        super({ key: 'LevelScene' });
    }

    init(data: {lastX:number, lastY:number, levelNumber: number}) {
        this.levelNumber = data.levelNumber;
        this.startX = data.lastX;
        this.startY = data.lastY;
        console.log("in level " + this.levelNumber);
    }

    create() {
         // creates the draggable image object
        this.importantImage = new DraggableImage(this, this.startX, this.startY, "level" + this.levelNumber);
         // adds it to this scene
        this.add.existing(this.importantImage);
        
        // creates the text button to move to a different level & adds to scene 
        this.add.existing(new TextButtonObject(this, this.scale.height * 2 / 3, "Level " + this.levelNumber, () => {
            let next:number = this.levelNumber + 1;    
            let data = this.getLastXY();      
            if (next > 3) {               
                this.scene.start("GameOver",data);
            } else {
                data['levelNumber'] = next;
                this.scene.start("LevelScene", data);
            }
        }))

        // creates the text button to pasue & adds to scene 
        this.add.existing(new TextButtonObject(this, this.scale.height * 3 / 4, "Pause", () => {
            this.scene.launch("PauseScene", { previousScene: this.scene.key });
            this.scene.switch("PauseScene");
        }));

         // add an image button to go to tutorial the game when clicked
         this.add.existing(new ImageButtonObject(this, 50, 50, "start", () => {
            this.scene.start("TutorialScene",this.getLastXY())
        }));

        // add an image button to end the game when clicked
        this.add.existing(new ImageButtonObject(this, 650, 50, "end", () => {
            this.scene.start("GameOver",this.getLastXY())
        }));
    }

    update() {
    }

    getLastXY(): {lastX:number, lastY:number,levelNumber:number}{
      return { lastX: this.importantImage.x, lastY: this.importantImage.y, levelNumber:0};
      
}
}