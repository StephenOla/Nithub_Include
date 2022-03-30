var scoreNum = 20;
var rand = Math.floor(Math.random() * 20 + 1);
document.getElementById("check").onclick = function() {
    var x = document.getElementById("guessfield").value;
    if (x == rand) {
        document.getElementById("textt").innerHTML = "You're correct!";
        document.body.style.backgroundColor = 'green';
        var highScoreNum = scoreNum;
        document.getElementById("highscore").innerHTML = `Highscore: ${highScoreNum}`;

    } else if (x > rand) {
        document.getElementById("textt").innerHTML = "Too high";
        scoreNum--;
        document.getElementById("score").innerHTML = `Score: ${scoreNum}`;
    } else {
        document.getElementById("textt").innerHTML = "Too low";
        scoreNum--;
        document.getElementById("score").innerHTML = `Score: ${scoreNum}`;
    }
    if (scoreNum == 0) {
        document.getElementById("textt").innerHTML = 'Game over!!';
        document.body.style.backgroundColor = 'red';
    }
}

var fun = function func() {
    window.location.reload();
    return false;
}