let colorPicker;
let slider;
let radio;
let radioVal;
let slideVal;

function setup() {
  createCanvas(windowWidth, windowHeight);
    
    radio = createRadio();
    radio.option('HAPPY');
    radio.option('SAD');
    radio.option('ANGRY');
    radio.option('LAZY');
    radio.option('WHAT');
    radio.position(windowWidth/2-165, windowHeight/6);
    textAlign(CENTER);
    
    colorPicker = createColorPicker("#FFFFFF");
    colorPicker.position(windowWidth/2-100, windowHeight/2);
    colorPicker.size(200, 50);
    
    slider = createSlider(0, 75, 75);
    slider.position(windowWidth/2-62.5, windowHeight*.75);
    
}

function draw() {
background(colorPicker.color());
angleMode(DEGREES);
    
    let radioVal = radio.value();
    let slideVal = slider.value();
    
    textSize(40);
    text("How are you feeling?", windowWidth/2, windowHeight/6 - 30);
    text("Pick a color that best describes your mood", windowWidth/2, windowHeight/2-30);
    text("Here's the slider to emphasize the magnitude of your mood", windowWidth/2, windowHeight*.75-30);
    
    push();
    
    translate(windowWidth/2, windowHeight/3-20);
    textSize(slideVal);
    if (radioVal === 'HAPPY'){
        
        push();
        translate(-15, 0);
        rotate(90);
        text(":)", 0, 0);
        pop();
        
        
    } else if (radioVal === 'SAD'){
        
        push();
        translate(-15, 0);
        rotate(90);
        text(":(", 0, 0);
        pop();
        
    } else if (radioVal === 'ANGRY') {
        
        push();
        translate(-15, 0);
        rotate(90);
        text(">:(", 0, 0);
        pop();
        
    } else if (radioVal === 'LAZY') {
        
        push();
        translate(-15, 0);
        rotate(90);
        text(":P", 0, 0);
        pop();  
        
    } else if (radioVal === 'WHAT'){
        
        push();
        translate(30, 0);
        rotate(270);
        text("D:", 0, 0);
        pop();
        
    }
    pop();
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    radio.position(windowWidth/2-100, windowHeight/6);
    colorPicker.position(windowWidth/2-100, windowHeight/2);
    slider.position(windowWidth/2-62.5, windowHeight*.75);
}