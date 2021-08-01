const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box")

function compareValue(sum, luckyNumber){
    if(sum%luckyNumber===0){
        console.log("Your birthday is lucky!!");
    }
    else{
        console.log("Your birthday is NOT lucky!!");

    }
}

function checkBirthdateIsLucky(){
    var date = dateOfBirth.value;
    var sum = calculateSum(dob);
    compareValue(sum, luckyNumber.value)
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = "0";
    for(let index=0; index < dob.length; index++){
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

checkNumberButton.addEventListener('click', calculateSum);