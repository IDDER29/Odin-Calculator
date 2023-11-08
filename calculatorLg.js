const DisplayInput = document.querySelector('.input-display');


function sum(...arg){
    let sumN = arg.reduce((firstNum,secondNum) => firstNum + secondNum );
    return sumN;
}

function subtract(...arg){
    let subtractN = arg.reduce((firstNum,secondNum) => firstNum - secondNum );
    return subtractN ;
}

function multiply(...arg){
    let multiplyN = arg.reduce((firstNum,secondNum) => firstNum * secondNum );
    return multiplyN ;
}

function divide(...arg){
    let divideN = arg.reduce((firstNum,secondNum) => firstNum / secondNum )
    return divideN ;
}

function changeSign(num) {
    return num * -1;
}

let firstNum ;
let operator ;
let secondNum ;

function operate(firstNum, operator, secondNum){

    if(operator == "plus"){
        return sum(firstNum,secondNum);
       
    }else if(operator == 'minus'){
        return subtract(firstNum, secondNum);
    }else if(operator == 'multiple'){
        return multiply(firstNum, secondNum);
    }else if(operator == 'division'){
        if(secondNum == 0){
             alert("Hey there, math wizard! Ever tried dividing by zero? It's like trying to fit an elephant into a phone booth. It might be a fun idea, but in reality, it's just not gonna happen. ");
        }else{

            return divide(firstNum, secondNum)

        }
        
    }
}



let inputNum = [];

let calculatorNums = [];
function DisplayInputFun(){
    DisplayInput.textContent = inputNum.join('');
}
function numStoring(num){
    let buttonNumValue = num.target.value;
    if(buttonNumValue == '.' && inputNum.includes('.') || inputNum.length >= 20){

    }else if(buttonNumValue == '.' && inputNum.length == 0){
        inputNum.push(0);
        inputNum.push(buttonNumValue);
    }else if(operator == 'equal'){
        calculatorNums = [];
        
        inputNum.push(buttonNumValue);
    }else{
       
        inputNum.push(buttonNumValue);
    }
  
    
    DisplayInputFun();
}

function backAndRemove(){
    inputNum.pop();
    DisplayInputFun();

}


function inputOp(Op){
   
    
    
    if(inputNum.length >= 1){
        firstNum =Number(inputNum.join(''))
        calculatorNums.push(firstNum);
       
    }
    

   

       
        
        
        if(calculatorNums.length == 2 ){

            let firstNum = Number(calculatorNums[0]);
            let secondNum = Number(calculatorNums[1]);
            if(operator == 'division' && secondNum ==0){
               alert("Hey there, math wizard! Ever tried dividing by zero? It's like trying to fit an elephant into a phone booth. It might be a fun idea, but in reality, it's just not gonna happen. ");

               

            }else{
                let result = operate(firstNum, operator, secondNum);
                
                if(typeof result == "number"){
                    result = result.toFixed(3);
                    result = Number(result);
                    DisplayInput.textContent = result;
                    calculatorNums = [];
                    calculatorNums.push(result);   
                }else{
                    calculatorNums = [];
                }
            }
            

            
            

            
        }
         // this clean the inputNum array
   
    
    operator = Op.target.value; 
    if(operator == 'percent'){
        let perNum = firstNum / 100 ;

        DisplayInput.textContent = perNum;
        
        calculatorNums = [];
        calculatorNums.push(perNum);
       
    }else if(operator == 'change-sign'){
        let num = DisplayInput.textContent ;
        num = Number(num);
        result = changeSign(num) ;
        DisplayInput.textContent = result;
        calculatorNums = [];
        calculatorNums.push(result);
        

    }else if(operator == 'AC'){
        calculatorNums = [];
       
        DisplayInput.textContent = '';
        // clear the display values in the scren
    }
    
    
    
    inputNum = [];
   
    
    
    
    return operator;
}



const ButtonNum = document.querySelectorAll('.number');
const ButtonOp = document.querySelectorAll('.operator');
const BackButton = document.querySelector('.back-remove');


ButtonNum.forEach(button => button.addEventListener('click', (e) => numStoring(e)));


ButtonOp.forEach(button => button.addEventListener('click', (e) => inputOp(e)));

BackButton.addEventListener('click', (e) => {
    backAndRemove();
})


document.addEventListener('keydown', function(event) {
    console.log(event.key)
    for(let i = 0; i < ButtonNum.length; i++){
        if(ButtonNum[i].value == event.key){
            ButtonNum[i].click();
            break;
        }else{
            continue;
        }
    }
    

    for(let i = 0; i < ButtonOp.length; i++){
        if(ButtonOp[i].dataset.op == event.key){
           
            ButtonOp[i].click();
            break;
        }else if('Enter' == event.key){
            ButtonOp[7].click();
            break;
        }
    }
    if ( event.key == 'Backspace' ){
        
        backAndRemove();
        
    }
   
});
   


