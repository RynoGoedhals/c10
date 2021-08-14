var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["aad56141-ff07-432d-ae07-e33cc81a0007","f0a46b2d-9ab3-4773-b196-bf03700d52e5"],"propsByKey":{"aad56141-ff07-432d-ae07-e33cc81a0007":{"name":"car_red_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"f0a46b2d-9ab3-4773-b196-bf03700d52e5":{"name":"corgi_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ThFwZTeCRzx1pD6mg0VhDboKPBXixvrN/category_animals/corgi.png","frameSize":{"x":542,"y":500},"frameCount":1,"looping":true,"frameDelay":2,"version":"ThFwZTeCRzx1pD6mg0VhDboKPBXixvrN","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":542,"y":500},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ThFwZTeCRzx1pD6mg0VhDboKPBXixvrN/category_animals/corgi.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 5;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("corgi_1");
  sam.scale = 0.05;
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.setAnimation("car_red_1");
  car1.scale = 0.2;
  
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.setAnimation("car_red_1");
  car2.scale = 0.2;
  
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car3.setAnimation("car_red_1");
  car3.scale = 0.2;
  
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.setAnimation("car_red_1");
  car4.scale = 0.2;
  
  car1.velocityY = 8;
  car2.velocityY = 8;
  car3.velocityY = -8;
  car4.velocityY = -8;
 
//add the velocity to make the car move.

function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries

//createEdgeSprites();
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);

car2.bounceOff(boundary1);
car2.bounceOff(boundary2);

car3.bounceOff(boundary1);
car3.bounceOff(boundary2);

car4.bounceOff(boundary1);
car4.bounceOff(boundary2);

//Add the condition to make the sam move left and right

if(keyDown(RIGHT_ARROW)){
  sam.x = sam.x+2;
  // sam.velocityX = 2;
  // sam.velocityY = 0;
} else {
  sam.velocityX = 0;
  sam.velocityY = 0;
}
if(keyDown(LEFT_ARROW)){
  sam.x = sam.x-2;
  // sam.velocityX = -2;
  // sam.velocityY = 0;
}

//Add the condition to reduce the life of sam if it touches the car.
  
  if(sam.isTouching(car1) || sam.isTouching(car2) || sam.isTouching(car3) || sam.isTouching(car4)){
    
    sam.x = 20;
    sam.y = 190;
    //life = life-1;
    life-=1;
  }
  
  if(life==0){
    fill("red");
    textSize(25);
    text("Game Over!",130,200);
    
    sam.x = 20;
    sam.y = 190;
  
  }
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
