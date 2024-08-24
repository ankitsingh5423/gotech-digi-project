const countDownEl = document.getElementById('countdown-timer');
const futureDate = "24 August 2024"


function countDown() {
    const nextDate = new Date(futureDate);
    const currentDate = new Date();

    const totalSecond = (nextDate - currentDate) / 1000;
    const day = Math.floor(totalSecond / 3600 / 24);
    const hours = Math.floor((totalSecond / 3600) % 24);
    const minute = Math.floor((totalSecond / 60) % 60);
    const second = Math.floor(totalSecond % 60);

    countDownEl.innerHTML = `${timeFormat(day)}:${timeFormat(hours)}:${timeFormat(minute)}:${timeFormat(second)}`;

}

function timeFormat(t) {
    if (t < 10) {
        return "0" + t;
    }
    else {
        return t;
    }
}





countDown();
setInterval(countDown, 1000)

const playBtnEl = document.getElementById('play-btn');
const videoPlayerEl = document.getElementById('video-player');

playBtnEl.addEventListener('click', function (e) {
    videoPlayerEl.play();
    playBtnEl.style.display = 'none'

    videoPlayerEl.setAttribute('controls', true)
})

videoPlayerEl.addEventListener('ended', function () {
    playBtnEl.style.display = 'grid';
    videoPlayerEl.removeAttribute('controls')
})
videoPlayerEl.addEventListener('pause', function () {
    playBtnEl.style.display = 'grid';
    videoPlayerEl.removeAttribute('controls')
})


/* ----------------------------- form-validation ---------------------------- */

// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
// Defining a function to validate form 
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("contact").value;

    var nameErr = emailErr = contactErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (mobile == "") {
        printError("contactErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("contactErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("contactErr", "");
            contactErr = false;
        }
    }

    // Prevent the form from being submitted if there are any errors
    if ((nameErr || emailErr || contactErr) == true) {
        return false;
    } else {
        sendToWhatsapp();
    }
};

function sendToWhatsapp() {
    let number = "+917055548936";

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("contact").value;
    var query = document.getElementById("query").value;

    var url = "https://wa.me/" + number + "?text="
        + "name : " + name + "%0a"
        + "email : " + email + "%0a"
        + "mobile : " + mobile + "%0a"
        + "query : " + query + "%0a%0a";

    window.open(url, '_blank').focus();
}




