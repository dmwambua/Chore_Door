let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');


//Store source path of closed door

let botDoorPath = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUPeoF9ZBSVTTPuCGribxtKaNlw5X6EvDCZdov0rFPPoPDglUBPqaFCt7W_PptPFl1nZfXj6w&usqp=CAc";
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg"

let numClosedDoors = 3;

let openDoor1;
let openDoor2;
let openDoor3;

let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

let startButton = document.getElementById('start');

let currentlyPlaying = true;

//Check to see if door has a bot
const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    }
    else {
        return false;
    }
}

//Prevent door from being clicked twice
const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    }
    else {
        return true;
    }
}

//Reduce # of doors with each click
const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('Win');
    }
    else if (isBot(door)) {
        gameOver('lose');
    }
}

//Generate a random number for position of choreBot
const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }
    else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }
    else {
        openDoor3 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    }
}

doorImage1.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(door1);
    }
}

//Dictate what happens when a door is clicked
doorImage2.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(door2);
    }
}

doorImage3.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(door3);
    }
}

startRound = () => {
    numClosedDoors = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = "Good Luck Grace";
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}
//Restarting game
startButton.onclick = () => {
    if (!currentlyPlaying) {
        startRound();
    }
}

gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'Grace Won !!! Play again?';
    }
    else {
        startButton.innerHTML = 'Game Over Ms. Grace, Play again?';
    }
    currentlyPlaying = false;
}

startRound();