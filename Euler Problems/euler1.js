var a,b,c=0,sum=0,limit,i;

a = 3;
b = 5;
limit = 1000;

for(i=1; i<limit; i++){ //cycle through numbers looking for factor
    
    c = i % a;  //check if i is a multiple of a
    
    if(c==0){sum += i;}    //if i is a multiple of a add to running total else repeat with b
    else {
        c = i % b;
        if(c==0){sum += i;}
    }
}

console.log("The sum of multiples of "+ a +" and "+ b +" to "+ limit +" is "+ sum);