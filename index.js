
const character = {
    numbers: "0123456789",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    symbols: "~`!@#$%^&*()_-+={[}],|:;<>.?/"
}
let passStr = ""


const pass1 = document.getElementById("password1"),
    pass2 = document.getElementById("password2"),
    passSLength = document.getElementById("length-input"),
    lengthEl = document.getElementById("length-select"),
    options = document.querySelectorAll(".option input")
    let passLength = passSLength.value;
    //console.log(options)





//getting values from the slide bar
let updateSlider = () => {
    lengthEl.textContent = passSLength.value
    passLength = passSLength.value
}

//Adding an event listener
passSLength.addEventListener("input", updateSlider)

//A function to create a random string



function generator() {
    function randomPass() {
        let newPass = ""
        for (let i = 0; i < passLength; i++) {
            newPass += passStr[Math.floor(Math.random() * passStr.length)]
        }
        return newPass
    }

    options.forEach(one => {
        if (one.checked) {
            passStr += character[one.id]
        }
    })
    console.log(passStr)
    pass1.textContent = randomPass()
    pass2.textContent = randomPass()
    console.log(randomPass())
}
