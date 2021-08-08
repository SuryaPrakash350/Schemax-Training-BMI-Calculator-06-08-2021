let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let weight = document.getElementById("weightin").value;
    let height = document.getElementById("heightin").value;
    let bmi = (weight / (height * height) * 10000);
    let resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML =  bmi;
});
