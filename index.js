let ball = document.getElementById('ball');
let court = document.getElementById('court');
document.addEventListener('DOMContentLoaded', courtAction);
court.addEventListener('click', courtAction);
function courtAction(event) {
    
    let courtCoords = document.getElementById('court').getBoundingClientRect();
    let ballCoords = {
        top: event.clientY - courtCoords.top,
        left: event.clientX - courtCoords.left
      };

    if (ballCoords.top < 0) {
        ballCoords.top = 0;
    }

    if (ballCoords.left < 0) {
        ballCoords.left = 0;
    }

    if (ballCoords.left + ball.clientWidth > court.clientWidth) {
        ballCoords.left = court.clientWidth - ball.clientWidth;
    }

    if (ballCoords.top + ball.clientHeight > court.clientHeight) {
        ballCoords.top = court.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';

    if (ballCoords.top > 140 && ballCoords.top < 180) {
        if(ballCoords.left > 20 && ballCoords.left < 50) {
            document.getElementById('storeB').innerHTML++;

            let teamB = document.getElementById('teamB');
            teamB.style.display = 'block';
            
            let close = function close() {
                teamB.style.display='none';
            }
            window.setTimeout( close, 3000 );
        }

        if(ballCoords.left > 550 && ballCoords.left < 580) {
            document.getElementById('storeA').innerHTML++;

            let teamA = document.getElementById('teamA');
            teamA.style.display = 'block';

            let close = function close() {
                teamA.style.display='none';
            }
            window.setTimeout( close, 3000 );
        }
    }
}