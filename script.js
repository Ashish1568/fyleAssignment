let grossIncome=0,extraIncome=0,totalDeductions=0;
let ageGrp;
function isValidInput(value) {
    // Regular expression to check if the value is a valid float or integer
    return /^[+-]?\d+(\.\d+)?$/.test(value);
}

function grossAnnualIncome(){
    const grInc = document.querySelector('#gross-annual-income-input');
    let errorIcon = document.querySelector('#gross-annual-income-error');
    // grossIncome=parseFloat(grInc.value);
    // console.log(grossIncome);
   
    if (!isValidInput(grInc.value)) {
        // If error icon doesn't exist, create it
        if (!errorIcon) {
            errorIcon = document.createElement('i');
            errorIcon.className = 'fas fa-exclamation-circle error-icon';
            errorIcon.setAttribute('id', 'gross-annual-income-error');
            const inputContainer = document.querySelector('.annual-income');
            inputContainer.appendChild(errorIcon);
        }
        errorIcon.style.display = 'inline';
    } else {
        if (errorIcon) {
            errorIcon.style.display = 'none';
        }
        grossIncome = parseFloat(grInc.value);
    }
    
    
    

}

function extraAnnualIncome(){
    const exInc = document.querySelector('#extra-annual-income-input');
    let errorIcon = document.querySelector('#extra-annual-income-error');
    // grossIncome=parseFloat(grInc.value);
    // console.log(grossIncome);
   
    if (!isValidInput(exInc.value)) {
        // If error icon doesn't exist, create it
        if (!errorIcon) {
            errorIcon = document.createElement('i');
            errorIcon.className = 'fas fa-exclamation-circle error-icon';
            errorIcon.setAttribute('id', 'extra-annual-income-error');
            const inputContainer = document.querySelector('.extra-income');
            inputContainer.appendChild(errorIcon);
        }
        errorIcon.style.display = 'inline';
    }
     else {
        if (errorIcon) {
            errorIcon.style.display = 'none';
        }
        extraIncome = parseFloat(exInc.value);
    }
    
  
}

function ageGroup()
{
    const ageGr=document.querySelector('#age-group');
    ageGrp=ageGr.value;
    console.log(ageGrp);
}

function totalApplicableDeductions(){
    const totDed= document.querySelector('#total-applicable-deductions');
    let errorIcon = document.querySelector('#total-applicable-deduction-error');
    // grossIncome=parseFloat(grInc.value);
    // console.log(grossIncome);
   
    if (!isValidInput(totDed.value)) {
        // If error icon doesn't exist, create it
        if (!errorIcon) {
            errorIcon = document.createElement('i');
            errorIcon.className = 'fas fa-exclamation-circle error-icon';
            errorIcon.setAttribute('id', 'total-applicable-deduction-error');
            const inputContainer = document.querySelector('.total-applicable-deductions');
            inputContainer.appendChild(errorIcon);
        }
        errorIcon.style.display = 'inline';
    }
     else {
        if (errorIcon) {
            errorIcon.style.display = 'none';
        }
        totalDeductions = parseFloat(totDed.value);
    }
    
    
}

function submit()
{
    let ans=0;
    const overallIncome= ((grossIncome+extraIncome)-totalDeductions);
    if((overallIncome)<=800000)
    {
        console.log("hiii")
       ans=overallIncome;
    }

    if(overallIncome>8*1e5)
    {
        if(ageGrp=="young")
        {
           const tax=.3*(overallIncome-800000);
           ans=overallIncome-tax;    
        }

        else if(ageGrp=="semi")
        {
           const tax=.4*(overallIncome-800000);
           ans=overallIncome-tax;    
        }

        else if(ageGrp=="old")
        {
           const tax=.1*(overallIncome-800000);
           ans=overallIncome-tax;    
        }

       
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = "Your overall Income after tax deductions will be: " + ans;
    showResult();




   
    console.log(ans);
}

function showResult() {
    const resultBox = document.getElementById("result-box");
    resultBox.style.display = "block";
}

function closeResult() {
    const resultBox = document.getElementById("result-box");
    resultBox.style.display = "none";
}