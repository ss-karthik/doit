//pomodoro timer
let duration = 1500; //seconds
let clock = duration;

let timeController = document.getElementById("timeButts");
timeController.addEventListener("click", function (e) {
    if (e.target.className === "pomodoro") {
        duration = 1500;
        clock = duration;
        stop();
    }
    else if (e.target.className === "shortbr") {
        duration = 300;
        clock = duration;
        document.querySelector(".clock").innerHTML = "05:00";
        stop();
    }
    else if (e.target.className === "longbr") {
        duration = 900;
        clock = duration;
        document.querySelector(".clock").innerHTML = "15:00";
        stop();
    }
})


let minutes, seconds, timer;
let display = document.querySelector(".clock");
let pause = false;
let started = false;


function timecalc() {
    minutes = Math.floor(clock / 60);
    seconds = clock % 60;

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    clock--;

    display.innerHTML = minutes + ":" + seconds;

    if (clock < 0) {
        stop();
        alert("Time to take a break!");
    }
}



function stst () {
    let btn = document.getElementById("stst");
    let psbtn = document.getElementById("pp");

    if (started == false) {
        started = true;
        btn.innerHTML = `<i class="bi bi-stop-fill"></i>`;
        psbtn.classList.remove("hidden");
        start();
    }
    else if (started == true) {
        started = false;
        btn.innerHTML = `<i class="bi bi-play-fill"></i>`;
        psbtn.classList.add("hidden");
        stop();
    }
}


function start () {
    timer = setInterval(timecalc, 1000);
}

function stop () {
    clearInterval(timer);
    clock = duration;
    timecalc();

    let psbtn = document.getElementById("pp");
    let btn = document.getElementById("stst");
    btn.innerHTML = `<i class="bi bi-play-fill"></i>`;
    psbtn.classList.add("hidden");
}



function pp () {
    let btn = document.getElementById("pp");
    if (pause == false) {
        pause = true;
        btn.innerHTML = `<i class="bi bi-play-fill"></i>`;
        clearInterval(timer);
    }
    else if (pause == true) {
        pause = false;
        btn.innerHTML = `<i class="bi bi-pause-fill"></i>`;
        timer = setInterval(timecalc, 1000);
    }

}





// todo list
let listbox = document.getElementById("todo");


function newnote() {
    //creating the note
    let li = document.createElement('li');
    let p = document.createElement('p');

    let input = document.querySelector("#newnote").value;
    let text = document.createTextNode(input);



    if (input == "") {
        alert("Cannot create an empty note!");
    }
    else {
        p.appendChild(text);
        li.appendChild(p);
        document.querySelector("#todo").appendChild(li);
    }

    document.querySelector("#newnote").value = "";

    //creating the delete button
    let span =  document.createElement("span");
    input = "Delete";
    text = document.createTextNode(input);
    span.appendChild(text);
    li.appendChild(span);

    save();
}

listbox.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        save();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        save();
    }
})

function save () {
    localStorage.setItem("todos", listbox.innerHTML);
}

function load () {
    listbox.innerHTML = localStorage.getItem("todos");
}

load();



// audio player
let playing = false;

let audiobtn = document.querySelector(".audiobtn");
let audio = new Audio();

audio.loop = true;

audiobtn.addEventListener('click', function() {

    let index = document.getElementById("audiosel").selectedIndex;
    
    if (index == 1) {
        audio.src = 'sounds/birds.ogg';
    }

    else if (index == 2) {
        audio.src = 'sounds/boat.ogg';
    }

    else if (index == 3) {
        audio.src = 'sounds/city.ogg';
    }

    else if (index == 4) {
        audio.src = 'sounds/coffee-shop.ogg';
    }

    else if (index == 5) {
        audio.src = 'sounds/fireplace.ogg';
    }

    else if (index == 6) {
        audio.src = 'sounds/pink-noise.ogg';
    }
    else if (index == 7) {
        audio.src = 'sounds/rain.ogg';
    }

    else if (index == 8) {
        audio.src = 'sounds/storm.ogg';
    }

    else if (index == 9) {
        audio.src = 'sounds/stream.ogg';
    }

    else if (index == 10) {
        audio.src = 'sounds/summer-night.ogg';
    }

    else if (index == 11) {
        audio.src = 'sounds/train.ogg';
    }

    else if (index == 12) {
        audio.src = 'sounds/waves.ogg';
    }

    else if (index == 13) {
        audio.src = 'sounds/white-noise.ogg';
    }

    else if (index == 14) {
        audio.src = 'sounds/wind.ogg';
    }

     if (!playing) {
            audio.play();
            playing = true;
            audiobtn.innerHTML = `<i class="bi bi-stop-circle-fill"></i>`;
        }
        else {
            audio.pause();
            playing = false;
            audiobtn.innerHTML = `<i class="bi bi-play-circle-fill"></i>`;
        }
});

function changevol(currentvol) {
    audio.volume = currentvol;
}
