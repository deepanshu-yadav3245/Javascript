const getColor = () =>{
    // Hex-Code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.background = randomCode;
    document.getElementById("color-code").innerHTML = randomCode

    // copy hexa code
    navigator.clipboard.writeText(randomCode)
}
// event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

// initial call
getColor();