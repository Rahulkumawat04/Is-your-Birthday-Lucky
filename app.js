var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkNumberButton = document.querySelector("#check-number");
var outputBox = document.querySelector("#output-box")

function compareValue(sum, luckyNumber){
    if(sum%luckyNumber === 0){
        outputBox.innerHTML = "🎈Yayy!!! Your birthday is lucky!!🎉🥳";
    }
    else{
        outputBox.innerHTML = "Oops!! Sorry,looks like your birthday is not that lucky!!😟😪";

    }
}

function checkBirthdateIsLucky(){
    var dob = dateOfBirth.value;
    var sum = calculateSum(dob);
    compareValue(sum, luckyNumber.value);
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let index=0; index < dob.length; index++){
        sum = sum + Number(dob.charAt(index));
    }   
    return sum;
}

checkNumberButton.addEventListener('click', checkBirthdateIsLucky);