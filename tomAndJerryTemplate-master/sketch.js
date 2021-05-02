var BackgroundImg;
var cat , CATimg1 ,CATimg2,CATimg3,CATimg4;
var mouse, MOUSEimg1,MOUSEimg2 ,MOUSEimg3 ,MOUSEimg4 ;


function preload() {
    //load the images here
    BackgroundImg=loadImage("garden.png")
        
    CATimg1=loadImage("cat1.png")
    CATimg2=loadImage("cat2.png")
    CATimg3=loadImage("cat3.png")
    CATimg4=loadImage("cat4.png")
    CATmoving=loadAnimation("cat2.png","cat3.png")

    MOUSEimg1=loadImage("mouse1.png")
    MOUSEimg2=loadImage("mouse2.png")
    MOUSEimg3=loadImage("mouse3.png")
    MOUSEimg4=loadImage("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(700,700);
    cat.addImage(CATimg1);
    cat.scale=0.2;
    mouse=createSprite(150,700);
    mouse.addImage(MOUSEimg1);
    mouse.scale=0.2;

}

function draw() {

    background(BackgroundImg);
    //Write condition here to evalute if tom and jerry collide
    
    if (keyDown(LEFT_ARROW)){
    mouse.addImage(MOUSEimg3);
    cat.addImage(CATimg3);
    cat.velocityX=-1;
    }

if (cat.x-mouse.x < cat.width/2-mouse.width/2){
    cat.velocityX=0;
    cat.addImage(CATimg4);
    mouse.addImage(MOUSEimg2);
}

        

    
    drawSprites();
}



