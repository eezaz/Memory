var boxes=["red","green","blue","purple"]

var gameColor=[];
var userColor=[];
var level=0;
var gameStart=false;
document.addEventListener("keypress",function() {
    if(!gameStart){
    gameStart=true;
    // console.log(gameColor);
    level++;
    $("h1").text("Level : "+level);
    levelUp();
}
})

$(".btn").click(function (event) {
    // $(this).attr("id");
    var clickon=event.target.id;
    // console.log(clickon);
    userColor.push(clickon);

    animation(clickon);

    cheack(userColor.length-1);
})

function cheack(cheakingIndex){

    if(gameColor[cheakingIndex]===userColor[cheakingIndex])
    {
        if(gameColor.length===userColor.length)
        {
            level++;
            $("h1").text("Level : "+level);
            setTimeout(function () {
            levelUp();
        }, 1000);
        }
    }
    else{
        $("h1").text(" Game Over Press any Key to Restar");
        var sound = new Audio("sound/wrong.mp3");
        sound.play();
        $("body").addClass("game-over");
        level=0;
        gameStart=false;
        gamePattern = [];
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 100);
    }

}

function levelUp(){
    userColor=[];
    var chooseBox=Math.floor(Math.random()*4);
    var color=boxes[chooseBox];
    gameColor.push(color);
    animation(color);
}




function animation(color){
    $("."+color).fadeOut(100).fadeIn(100);
    var audio=new Audio("sound/" + color + ".mp3")
    audio.play();
}
