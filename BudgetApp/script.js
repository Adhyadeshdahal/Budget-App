const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var i=0;
var e=0;
 var incomeValue = 0;
var expenseValue = 0;
var getDate = new Date();
console.log (months[getDate.getMonth()] , getDate.getFullYear());
var setDate = months[getDate.getMonth()] +','+ getDate.getFullYear();
document.querySelector('.budget__title--month').textContent = setDate;
document.querySelector('.budget__value').textContent= '+0.00';
document.querySelector('.budget__income--value').textContent= '+0.00';
document.querySelector('.budget__expenses--value').textContent= '-0.00';
document.querySelector('.budget__expenses--percentage').textContent= '-0%';
function commonCode1(){
    var type = document.querySelector('.add__type').value;
   var description = document.querySelector('.add__description').value;
   var value = Number(document.querySelector('.add__value').value);
    if (type === 'income'){
       forIncome(description,value);
      
    } else{
       forExpense(description,value);
    };
    
};

document.querySelector('.ion-ios-checkmark-outline').addEventListener('click',function(){
  commonCode1();

});

document.addEventListener('keypress',function(event){
    if (event.keyCode === 13 || event.which=== 13){
        commonCode1();
    }
});

function forIncome(incomeDescription,value){
    incomeValue = incomeValue+value;
     document.querySelector('.budget__income--value').textContent= 'Rs.'+incomeValue +'.00';
    netValue = (incomeValue - expenseValue);
    document.querySelector('.budget__value').textContent=  netValue  +'.00';
    listAdder("income",incomeDescription,value,0);
    i=i+1;
    
};

function forExpense(expenseDescription,value){
         expenseValue = expenseValue+value;
   if (incomeValue > 0) {
        var expensePercentage = Math.round((value/netValue)*100);
        document.querySelector('.budget__expenses--percentage').textContent='-'+expensePercentage +'%';
       
    }else{
        var expensePercentage = 0;
    };
    document.querySelector('.budget__expenses--value').textContent='Rs.'+('-'+expenseValue+'.00');
    netValue = (incomeValue - expenseValue);
    document.querySelector('.budget__value').textContent=  netValue  +'.00';
    listAdder("expenses",expenseDescription,value,expensePercentage);
    e=e+1;
};

function listAdder(types,itemDescription,value,expensePercentage){
    console.log(i);
    if(types === 'income'){
    var code =  (`<div class="item clearfix" id="`+types+"-"+i+`">`+
                            `<div class="item__description">`+ itemDescription + `</div>
                            <div class="right clearfix">
                                <div class="item__value">`+"+"+ value +`</div>
                                <div class="item__delete">
                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div> ` );
    }
    else{
        var code =  (`<div class="item clearfix" id="`+types+"-"+i+`">`+
                            `<div class="item__description">`+ itemDescription + `</div>
                            <div class="right clearfix">
                                <div class="item__value">`+"+"+ value +`</div>
                                <div class="item__percentage">`+"-"+expensePercentage+`</div>
                                <div class="item__delete">
                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div> ` );
        
    }
    
    document.querySelector('.'+types).innerHTML += code;  

};

console.log(document.querySelector('.top'));

































































































