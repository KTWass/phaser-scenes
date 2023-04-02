import DraggableImage from "../objects/DraggableImage";
import ImageButtonObject from "../objects/ImageButtonTransition";
import {TextButtonObject} from "../objects/TextButtonObject";

export default class MainMenu extends Phaser.Scene {
    private importantImage!: DraggableImage;
    private startX!: number;
    private startY!: number;

    constructor() {
        super({ key: 'MainMenu' });
        this.startX = 250;
        this.startY = 250;
        console.log("in main - constructor");
    }

    
    create() {
        console.log("in main - create");
        // creates the draggable image object
        this.importantImage = new DraggableImage(this, this.startX, this.startY, "main");
        // adds it to this scene
        this.add.existing(this.importantImage);

        // creates the transition button object to start tutorial & adds to scene 
        this.add.existing(new TextButtonObject(this, this.scale.height / 2, 
        "Start Tutorial", () => {
            // starts up the tutorial scene when clicked
            this.scene.start('TutorialScene', this.getLastXY());
        }))       

         // add an image button to go to tutorial the game when clicked
         this.add.existing(new ImageButtonObject(this, 50, 50, "start", () => {
            this.scene.start("TutorialScene",{lastX:this.startX, lastY:this.startY})
        }));

        // add an image button to end the game when clicked
        this.add.existing(new ImageButtonObject(this, 650, 50, "end", () => {
            this.scene.start("GameOver",{lastX:this.startX, lastY:this.startY})
        }));

        console.log("in main - done");
    }

    getLastXY() {
        return { lastX: this.importantImage.x, lastY: this.importantImage.y };
    }

    update() {
    }
}