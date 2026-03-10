

//Average
let sample=[4.2 ,5.1 ,3.8, 4.7, 5.3 ]; //array

let sum=0; //array
for (let i = 0; i < sample.length; i++) {  //loop and function to sum up array
    sum += sample [i];
}

let average =sum /sample.length; //divide the sum by the number values
console.log("Average:" , average); //4.62


//round

let mean= 4.62;
 Math.round(mean);
 console.log("The rounded number is :" ,Math.round(mean));


let values=[4.2 ,5.1 ,3.8, 4.7, 5.3 ];
 
function calculateMean(values){
    var sum=0;
    for( var i=0; i < values.length; i++){
        sum+=values[i];
    }
    
    return sum /values.length;
  
}

var mean = calculateMean(values);
var roundedMean =Math.round(mean  ); // math.round(mean *100) /100 if you want to round up two decimal places
var resultMessage ="Mean:" + roundedMean;
console.log(resultMessage);


