var a,b,c,k,sum=0,limit;

a = 1;
b = 1;
limit = 4e6;

while(a<limit && b<limit){  //Sum terms while below limit
    c = a + b;
    k = c % 2;

    if(k==0){sum += c;}    //If a term is even add to running total

    if(a<b){a = c;} //Update the lower number
    else{b = c;}
}

console.log("The sum of even Fibonacci terms less than "+ limit +" is "+ sum);