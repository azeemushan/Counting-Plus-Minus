'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let m=0;
    let p=0;
    let z=0;
    let l=arr.length;
   
    for(let i=0; i<l; i++){

        
        if(arr[i]==0){
            z++;
        }
        if(arr[i]<0){
            m++;
        }
        if(arr[i]>0){
            p++;
        }

  
    }
    p=p/l;
    m=m/l;
    z=z/l;
    console.log(p);
    console.log(m);
    console.log(z);


    return 0;
     

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
