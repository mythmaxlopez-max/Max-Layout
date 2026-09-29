// hide elements
$(".DEATH, h3, .poop, .startupVeil").hide();
    
$(".critter1, .critter2, .critter3, .critter4, .critter5, .critter6, .critter7, .critter8, .critter9, .critter10, .critter11, .critter12, .critter13, .critter14, .critter15").hide();

$(".box1, .box2, .box3, .box4, .box5, .box6, .box7, .box8, .box9, .box10, .box11, .box12, .box13, .box14, .box15, .box16").hide();

// outer scopes of the startPooping function, now accessible everywhere
let poopInterval = null;
// initializing rate of poop spawning (milliseconds)
let shitSpeed = 3000;
//per box division value, for ramping up shitSpeed you must make shitSpeed a smaller number (shitSpeed / quickerShit)
let quickerShit = 1.4;
// intitializing of maximum number of poops
// spawnPoop fuction will stop once maxPoops is met
let maxPoops = 200; 
// count for poop
let count = 0;


  // code below is for random function
  //Get the available width and height of the browser window
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;           
  //Subtract the image's dimensions so it doesn't bleed off the bottom/right edges
      const maxLeft = windowWidth - 230;
      const maxTop = windowHeight - 322;
  //Generate random positions
      const randomLeft = Math.floor(Math.random() * maxLeft);
      const randomTop = Math.floor(Math.random() * maxTop);


// start sequence
    $(".startButton").on("click", function(){
    //plays yay audio on button click
        var audioYay = new Audio('images/yay.mp3');
        audioYay.play();
        //assigning random Left and Top a new random value
            const randomLeft = Math.floor(Math.random() * maxLeft);
            const randomTop = Math.floor(Math.random() * maxTop);
        //applying new random value to named elements
            $(".box1, .critter1, .floorFire1").css({
            top: randomTop,
            left: randomLeft
            });
    //Title and Start button dissapear
         $(".startButton, .titleCard, h2").fadeOut(function(){
        });
        $("h3").delay(120*10);
         $("h3").fadeIn(function(){
        });
         $("h3").delay(120*20);
         $("h3").fadeOut(function(){
        });
    //box waits to reveal itself
         $(".box1").delay(120*40);
         $(".box1").fadeIn("slow",function(){
        });
    });

    $(".box1").on("click", function(){
    var audioYay = new Audio('images/yay.mp3');
    audioYay.play();
        const randomLeft = Math.floor(Math.random() * maxLeft);
        const randomTop = Math.floor(Math.random() * maxTop);
        $(".box2, .critter2").css({
        top: randomTop,
        left: randomLeft
        });
    $(".box1").fadeOut(function(){
    });
    $(".box1").delay(120*10);

    $(".critter1").fadeIn("slow",function(){
    });
    
    $(".box2").delay(120*10);
    $(".box2").fadeIn("slow",function(){
    });
    
        startPooping(); // start shit sequence
    });

//poop cleaner
    $(document).on("click", ".poop", function(){
        //sound on click
        var audioSquish = new Audio('images/Squish.mp3');
        audioSquish.play();
        //poop element click will fade out than be removed from DOM
        $(this).fadeOut(150, function(){
            $(this).remove(); 
        });
        shitSpeed = shitSpeed / 1.02;
        count = count -1;
    });

                        // box and critter reveal cycle

                        $(".box2").on("click", function(){
                            var audioYay = new Audio('images/yay.mp3');
                            audioYay.play();
                                const randomLeft = Math.floor(Math.random() * maxLeft);
                                const randomTop = Math.floor(Math.random() * maxTop);
                                $(".box3, .critter3").css({
                                top: randomTop,
                                left: randomLeft
                                });
                            $(".box2").fadeOut(function(){
                            });
                            $(".box2").delay(120*10);
                            
                            $(".critter2").fadeIn("slow",function(){
                            });
                            $(".box3").delay(120*10);
                            $(".box3").fadeIn("slow",function(){
                            });
                            shitSpeed = shitSpeed / quickerShit;
                            });

                        $(".box3").on("click", function(){
                            var audioYay = new Audio('images/yay.mp3');
                            audioYay.play();
                                const randomLeft = Math.floor(Math.random() * maxLeft);
                                const randomTop = Math.floor(Math.random() * maxTop);
                                $(".box4, .critter4").css({
                                top: randomTop,
                                left: randomLeft
                                });
                            $(".box3").fadeOut(function(){
                            });
                            $(".box3").delay(120*10);
                            
                            $(".critter3").fadeIn("slow",function(){
                            });
                            $(".box4").delay(120*10);
                            $(".box4").fadeIn("slow",function(){
                            });
                            shitSpeed = shitSpeed -100;
                            });
                            
                        $(".box4").on("click", function(){
                            var audioYay = new Audio('images/yay.mp3');
                            audioYay.play();
                                const randomLeft = Math.floor(Math.random() * maxLeft);
                                const randomTop = Math.floor(Math.random() * maxTop);
                                $(".box5, .critter5").css({
                                top: randomTop,
                                left: randomLeft
                                });
                            $(".box4").fadeOut(function(){
                            });
                            $(".box4").delay(120*10);
                            
                            $(".critter4").fadeIn("slow",function(){
                            });
                            $(".box5").delay(120*10);
                            $(".box5").fadeIn("slow",function(){
                            });
                            shitSpeed = shitSpeed / quickerShit;
                            });

                        $(".box5").on("click", function(){
                            var audioYay = new Audio('images/yay.mp3');
                            audioYay.play();
                                const randomLeft = Math.floor(Math.random() * maxLeft);
                                const randomTop = Math.floor(Math.random() * maxTop);
                                $(".box6, .critter6").css({
                                top: randomTop,
                                left: randomLeft
                                });
                            $(".box5").fadeOut(function(){
                            });
                            $(".box5").delay(120*10);
                            
                            $(".critter5").fadeIn("slow",function(){
                            });
                            $(".box6").delay(120*10);
                            $(".box6").fadeIn("slow",function(){
                            });
                            shitSpeed = shitSpeed / quickerShit;
                            });

                        $(".box6").on("click", function(){
                            var audioYay = new Audio('images/yay.mp3');
                            audioYay.play();
                                const randomLeft = Math.floor(Math.random() * maxLeft);
                                const randomTop = Math.floor(Math.random() * maxTop);
                                $(".box7, .critter7").css({
                                top: randomTop,
                                left: randomLeft
                                });
                            $(".box6").fadeOut(function(){
                            });
                            $(".box6").delay(120*10);
                            
                            $(".critter6").fadeIn("slow",function(){
                            });
                            $(".box7").delay(120*10);
                            $(".box7").fadeIn("slow",function(){
                            });
                            shitSpeed = shitSpeed / quickerShit;
                            });

                        $(".box7").on("click", function(){
                            var audioYay = new Audio('images/yay.mp3');
                            audioYay.play();
                                const randomLeft = Math.floor(Math.random() * maxLeft);
                                const randomTop = Math.floor(Math.random() * maxTop);
                                $(".box8, .critter8").css({
                                top: randomTop,
                                left: randomLeft
                                });
                            $(".box7").fadeOut(function(){
                            });
                            $(".box7").delay(120*10);
                            
                            $(".critter7").fadeIn("slow",function(){
                            });
                            $(".box8").delay(120*10);
                            $(".box8").fadeIn("slow",function(){
                            });
                            shitSpeed = shitSpeed / quickerShit;
                            });

                        $(".box8").on("click", function(){
                            var audioYay = new Audio('images/yay.mp3');
                            audioYay.play();
                                const randomLeft = Math.floor(Math.random() * maxLeft);
                                const randomTop = Math.floor(Math.random() * maxTop);
                                $(".box9, .critter9").css({
                                top: randomTop,
                                left: randomLeft
                                });
                            $(".box8").fadeOut(function(){
                            });
                            $(".box8").delay(120*10);
                            
                            $(".critter8").fadeIn("slow",function(){
                            });
                            $(".box9").delay(120*10);
                            $(".box9").fadeIn("slow",function(){
                            });
                            shitSpeed = shitSpeed / quickerShit;
                            });

                        $(".box9").on("click", function(){
                            var audioYay = new Audio('images/yay.mp3');
                            audioYay.play();
                                const randomLeft = Math.floor(Math.random() * maxLeft);
                                const randomTop = Math.floor(Math.random() * maxTop);
                                $(".box10, .critter10").css({
                                top: randomTop,
                                left: randomLeft
                                });
                            $(".box9").fadeOut(function(){
                            });
                            $(".box9").delay(120*10);
                            
                            $(".critter9").fadeIn("slow",function(){
                            });
                            $(".box10").delay(120*10);
                            $(".box10").fadeIn("slow",function(){
                            });
                            shitSpeed = shitSpeed / quickerShit;
                            });

                        $(".box10").on("click", function(){
                            var audioYay = new Audio('images/yay.mp3');
                            audioYay.play();
                                const randomLeft = Math.floor(Math.random() * maxLeft);
                                const randomTop = Math.floor(Math.random() * maxTop);
                                $(".box11, .critter11").css({
                                top: randomTop,
                                left: randomLeft
                                });
                            $(".box10").fadeOut(function(){
                            });
                            $(".box10").delay(120*10);
                            
                            $(".critter10").fadeIn("slow",function(){
                            });
                            $(".box11").delay(120*10);
                            $(".box11").fadeIn("slow",function(){
                            });
                            shitSpeed = shitSpeed / quickerShit;
                            });

                        $(".box11").on("click", function(){
                            var audioYay = new Audio('images/yay.mp3');
                            audioYay.play();
                                const randomLeft = Math.floor(Math.random() * maxLeft);
                                const randomTop = Math.floor(Math.random() * maxTop);
                                $(".box12, .critter12").css({
                                top: randomTop,
                                left: randomLeft
                                });
                            $(".box11").fadeOut(function(){
                            });
                            $(".box11").delay(120*10);
                            
                            $(".critter11").fadeIn("slow",function(){
                            });
                            $(".box12").delay(120*10);
                            $(".box12").fadeIn("slow",function(){
                            });
                        shitSpeed = shitSpeed / quickerShit;
                            });

                        $(".box12").on("click", function(){
                            var audioYay = new Audio('images/yay.mp3');
                            audioYay.play();
                                const randomLeft = Math.floor(Math.random() * maxLeft);
                                const randomTop = Math.floor(Math.random() * maxTop);
                                $(".box13, .critter13").css({
                                top: randomTop,
                                left: randomLeft
                                });
                            $(".box12").fadeOut(function(){
                            });
                            $(".box12").delay(120*10);
                            
                            $(".critter12").fadeIn("slow",function(){
                            });
                            $(".box13").delay(120*10);
                            $(".box13").fadeIn("slow",function(){
                            });
                            shitSpeed = shitSpeed / quickerShit;
                            });

                        $(".box13").on("click", function(){
                            var audioYay = new Audio('images/yay.mp3');
                            audioYay.play();
                                const randomLeft = Math.floor(Math.random() * maxLeft);
                                const randomTop = Math.floor(Math.random() * maxTop);
                                $(".box14, .critter14").css({
                                top: randomTop,
                                left: randomLeft
                                });
                            $(".box13").fadeOut(function(){
                            });
                            $(".box13").delay(120*10);
                            
                            $(".critter13").fadeIn("slow",function(){
                            });
                            $(".box14").delay(120*10);
                            $(".box14").fadeIn("slow",function(){
                            });
                            shitSpeed = shitSpeed / quickerShit;
                            });

                        $(".box14").on("click", function(){
                            var audioYay = new Audio('images/yay.mp3');
                            audioYay.play();
                                const randomLeft = Math.floor(Math.random() * maxLeft);
                                const randomTop = Math.floor(Math.random() * maxTop);
                                $(".box15, .critter15").css({
                                top: randomTop,
                                left: randomLeft
                                });
                            $(".box14").fadeOut(function(){
                            });
                            $(".box14").delay(120*10);
                            
                            $(".critter14").fadeIn("slow",function(){
                            });
                            $(".box15").delay(120*10);
                            $(".box15").fadeIn("slow",function(){
                            });
                            shitSpeed = shitSpeed / quickerShit;
                            });

                        $(".box15").on("click", function(){
                            var audioYay = new Audio('images/yay.mp3');
                            audioYay.play();
                                const randomLeft = Math.floor(Math.random() * maxLeft);
                                const randomTop = Math.floor(Math.random() * maxTop);
                                $(".box16, .critter16").css({
                                top: randomTop,
                                left: randomLeft
                                });
                            $(".box15").fadeOut(function(){
                            });
                            $(".box15").delay(120*10);
                            
                            $(".critter15").fadeIn("slow",function(){
                            });

                            end();
                            /*$(".box16").delay(120*10);
                            $(".box16").fadeIn("slow",function(){
                            });
                            $(".endButton").delay(120*10);
                            $(".endButton").fadeIn("slow",function(){
                            });
                            shitSpeed = shitSpeed / quickerShit; */
                            });

// End Sequence

    // After the last box is opened, the end button will apear
/*$(".box16").on("click", function(){
    var audioYay = new Audio('images/yay.mp3');
    audioYay.play();
    $(".box16").fadeOut(function(){
    });
    $(".box16").delay(120*10);
    
    $(".endButton").delay(120*10);
    $(".endButton").fadeIn("slow",function(){
    });
    });*/

    // End Sequence begins after endButton is clicked
function end(){

    setTimeout(() => {
    maxPoops = 400;
    shitSpeed = 5;
    }, 1000);
    setTimeout(() => {
    $(".DEATH").fadeIn(function(){
    });
    }, 6000);

    setTimeout(() => {
    location.reload(); //game reloads itself
    }, 12000);
    }

//poop functions
function startPooping(){

        // Function to create and place a random image
        function spawnPoop() {
            if (count >= maxPoops) {
                end();
            }

            const img = document.createElement("img");
            img.src = 'images/dogfancy.gif';

                // unique src forces its own independent animation timeline
                img.src = 'images/dogfancy.gif?spawn=' + Date.now() + '-' +count;
            //adds the next poop as an image element 
            img.classList.add("poop");
            img.draggable = false;

            //Initialize and play poop noise
            var audioPoop = new Audio('images/poop.mp3');
            audioPoop.play();

            // Get random X and Y coordinates within the window size
            const maxX = window.innerWidth - 60;
            const maxY = window.innerHeight - 60;
            
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            // Apply random positions
            img.style.left = randomX + "px";
            img.style.top = randomY + "px";

            // Add the image to the webpage
            document.body.appendChild(img);
            count++;

        // Run the function every milliseconds (asigned by shitSpeed)
        poopInterval = setTimeout(spawnPoop, shitSpeed);
        }
        spawnPoop(); // kick off the chain again immediately
}
function poopExplosion() {
    maxPoops = 1000000;
    shitSpeed = 1;
}