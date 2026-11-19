const openbutton1 = document.querySelector("#openButton1");
const openbutton2 = document.querySelector("#openButton2");
const openbutton3 = document.querySelector("#openButton3");

const dialogBox = document.querySelector("#dialogBox");
const dialogBoxText = document.querySelector("#dialogBox div");
const closeButton = document.querySelector("#closeButton");


openbutton1.addEventListener("click", () =>{
    dialogBoxText.innerHTML="An Apple has 95 calories"
    dialogBox.showModal();
})
openbutton2.addEventListener("click", () =>{
    dialogBoxText.innerHTML="An Orange has 45 calories"
    dialogBox.showModal();
})
openbutton3.addEventListener("click", () =>{
    dialogBoxText.innerHTML="An Banana has 105 calories"
    dialogBox.showModal();
})

closeButton.addEventListener("click", () =>{
    dialogBox.close();
})