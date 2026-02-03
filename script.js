function dontClickMe(){
        alert("I told you not to click me!");
}
document.querySelector("body").addEventListener("click", dontClickMe);