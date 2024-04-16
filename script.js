let grossIncome=0,extraIncome=0,totalDeductions=0;
let ageGrp;

function grossAnnualIncome(){
    const grInc = document.querySelector('#gross-annual-income-input');
    grossIncome=parseFloat(grInc.value);
    console.log(grossIncome);
}

function extraAnnualIncome(){
    const exInc = document.querySelector('#extra-annual-income-input');
    extraIncome=parseFloat(exInc.value);
    console.log(extraIncome);
}

function ageGroup()
{
    const ageGr=document.querySelector('#age-group');
    ageGrp=ageGr.value;
    console.log(ageGrp);
}

function totalApplicableDeductions(){
    const totDed= document.querySelector('#total-applicable-deductions');
     totalDeductions=parseFloat(totDed.value);
    console.log(totalDeductions);
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
    resultElement.textContent = "Final Income: " + ans;
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