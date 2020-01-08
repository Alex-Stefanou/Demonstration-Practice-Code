var limit, i=0, j, a=0,k;

limit = 20;

while(a==0){
    i += limit; //answer must be a multiple of highest number
    for(j=1; j<=limit; j++){ //Divide by consecutive numbers checking for remainder
        k = i % j;
        if(k!=0){break;}    //if i is not divisible by j, stop and increment i
    }
    if(j>=limit){a=i;}  //If for loop completed then i is the answer
}

console.log("Smallest number evenly divisible by 1 to "+ limit +" is " + a);