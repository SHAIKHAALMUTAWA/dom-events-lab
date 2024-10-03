/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');

const calculator = document.querySelector('.calculator');

const clear = document.querySelector('.clean');

const screen = document.querySelector('.screen')

/*-------------------------------- Variables --------------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
     let value = event.target.buttons.number;
     screen.value += value;
        console.log(event.target.innerText);
    });
  });

   calculator.forEach((calculator) => {
    calculator.addEventListener('click', (event) => {
     let value = event.target.buttons.number;
     screen.value += value;
        console.log(event.target.innerText);
    });
  });

  
/*------------------------ Cached Element References ------------------------*/
calculator.addEventListener('click',(event) => {
    console.log(event.target.innerText);
    if (event.target.classList.contains('first number')) {
        currentInput += event.target.innerText;
        updatDisplay(currentInput);
      }
    if (event.target.innerText === '*') {
        currentInput += event.target.innerText;
        updatDisplay(currentInput);
      }
    });
/*----------------------------- Event Listeners -----------------------------*/
clear.forEach((clear) => {
    clear.addEventListener('click', (event) => {
     let value = event.target.buttons.number;
     screen.value += value;
        console.log(event.target.innerText);
    });
  });

screen.forEach((screen) => {
    screen.addEventListener('click', (event) => {
     let value = event.target.buttons.number;
     screen.value += value;
        console.log(event.target.innerText);
    });
  });
/*-------------------------------- Functions --------------------------------*/
function bottun (input){
    eval(display.value);  display.value += input;
    };
 function clear (){
        display.value = "";
        };
function calculator (){
     display.value = eval(display.value);
                };
                
                
                
                       
            
            
            
            
        
        
        
        
    
    
    
    