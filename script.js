let input=document.getElementById("ip");
let startBtn=document.getElementById("btn");
let output=document.getElementById("output");


function firstTransformation(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            output.textContent=`Result: ${input.value}`;
            resolve(input.value);
            // console.log(input.value)

        },2000)
    })
}

function secondTransformation(valueToBeDoubled){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        let doubledValue=2*valueToBeDoubled
        output.textContent=`Result: ${doubledValue}`;
        // console.log(doubledValue);
        resolve(doubledValue)
        

       },2000)
    })
}

function thirdTransformation(valueToBeSubtract){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let subtractValue=valueToBeSubtract-3;
            output.textContent=`Result: ${subtractValue}`;
            // console.log(valueToBeSubtract);
            resolve(subtractValue)
        },1000)

    })
}

function fourthTransformation(valueToBeDivide){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let divideValue=valueToBeDivide/2;
            output.textContent=`Result: ${divideValue}`;
            // console.log(doubledValue)
            resolve(divideValue);
          
        },1000)
    })
}
function fifthTransformation(valueToBeAdded){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let addValue=valueToBeAdded+10;
            output.textContent=`Final Result: ${addValue}`;
            // console.log(addValue)
            resolve(addValue);
           

        },1000)
    })
}

async function displayValues(){
    try{
        let initialValue=await firstTransformation();
        let doubledValue=await secondTransformation(initialValue);
        let subtractValue=await thirdTransformation(doubledValue);
        let divideValue=await fourthTransformation(subtractValue);
        let addValue=await fifthTransformation(divideValue);
    }
    catch(error){
        console.log("error",error)
    }
}
startBtn.addEventListener("click",()=>{
    displayValues();
    console.log("hiii")
})