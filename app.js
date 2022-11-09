var billAmount=document.querySelector("#bill-amount");
var cashGiven=document.querySelector("#cash-given");
var cashLabel=document.querySelector("#cash-label");
var checkButton=document.querySelector("#check-button");
var nextButton=document.querySelector("#next-button");
var displayMessage=document.querySelector("#display-message");
var notes= document.querySelectorAll(".notes");



var noteList = [2000,500,100,20,10,5,1];
checkButton.style.display="none";
cashGiven.style.display="none";
cashLabel.style.display="none";
nextButton.addEventListener("click",function visible() {
    displayMessage.style.display="none";
    console.log(Number(billAmount.value));
    if(Number(billAmount.value)<1)
    {
        displayMessageFn("Please enter valid bill amount");
    }
    else {
    checkButton.style.display="block",
    cashGiven.style.display="block",
    cashLabel.style.display="block"
    }
    
})


checkButton.addEventListener("click", function computeChange() 
{
    displayMessage.style.display="none";
    console.log("clicked");
    if(Number(billAmount.value)>0)
    {
        
    if(Number(cashGiven.value)>Number(billAmount.value))
    {
        var finalAmount= Number(cashGiven.value) - Number(billAmount.value);
        calculateChange(finalAmount);
    }
    else {
        displayMessageFn("Cash amount should be higher than bill amount for valid change");
    }
}
    else {
        displayMessageFn("Please enter a positive Number");
    }
}
)

function calculateChange(amount) {
        for(let i=0; i<noteList.length;i++)
        {   
            console.log("Workinggg");
            var finalNote= Math.trunc(amount/Number(noteList[i]));
            amount%=Number(noteList[i]);
            notes[i].innerText=finalNote;
        }

}



function displayMessageFn(text)
{
    displayMessage.style.display="block";
    displayMessage.innerText=text
}





