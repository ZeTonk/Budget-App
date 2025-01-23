// global variables
let totalIncome=0;
let yearlyIncome=0;
let rentExpense=0;
let utilitiesExpense=0;
let groceriesExpense=0;
let transportExpense=0;
let totalHousingExpense=0;
let entertainmentExpense=0;
let livingExpenses=0;


function addSalary(){
    let salaryInput = document.getElementById('salaryInput');
    let salary = Number(salaryInput.value);
    console.log(salary);
    console.log(salary +200);

    if (salary > 0)
    {
        totalIncome=salary;
        updateSummary();
        salaryInput.value='';
    }
}

function addRent(){
 let input = document.getElementById('rentInput');
 let amount = Number(input.value);
 if (amount > 0){
    rentExpense=amount;
    updateSummary();
    input.value='';

 }
}

// Add utlilities

function addUtilities(){
    let input = document.getElementById('utilitiesInput');
    let amount = Number(input.value);
    if(amount>0){
        utilitiesExpense=amount;
        updateSummary();
        input.value='';
    }
}

// Add Groceries
function addGroceries(){
    let input = document.getElementById('groceriesInput');
    let amount = Number(input.value);
    if(amount>0){
        groceriesExpense=amount;
        updateSummary();
        input.value='';
    }
}

// Add Transport
function addTransport(){
    let input = document.getElementById('transportInput');
    let amount = Number(input.value);
    if(amount>0){
        transportExpense=amount;
        updateSummary();
        input.value='';
    }
}
// Add Entertainment
function addEntertainment(){

}
// Add Miscelanious
function addMisc(){

}
//housing expense= rent + utilities
function calculateHousingExpenses(){
    return rentExpense + utilitiesExpense;
}
function calculateLivingExpense{
    livingExpenses = groceriesExpense + transportExpense;
    return livingExpenses;
}

// update summary and yearly projections
function updateSummary()
{
    //update monthly summary
document.getElementById('totalIncome').innerHTML=totalIncome;
// update monthly rent
document.getElementById('rentExpense').innerHTML=rentExpense;
// update gorceries
document.getElementById('groceriesExpense').innerHTML=groceriesExpense;
// update utilities
document.getElementById('utilitiesExpense').innerHTML=calculateHousingExpenses();
// total groceries
//document.getElementById('groceriesExpense').innerHTML=groceriesExpense;
//total Daily Living Expenses
document.getElementById('livingExpenses').innerHTML=calculateLivingExpense;

//update Yearly Projections
document.getElementById('yearlyIncome').innerHTML=yearlyIncome*12;
}