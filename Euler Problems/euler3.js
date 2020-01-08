var input,a,i,k,max_prime=0,factorised=false;

input = 600851475143
a = input

while(factorised==false){   //keep factorising until left with a prime
    k=1
    i=1
    while(k!=0){
        i++;
        k = a % i;   //find a prime factor starting with 2 so it doesn't divide by 1
    }
    
    if(i>max_prime){max_prime =i;}  //set factor as largest prime
    a = a / i;
    if(a==1){factorised = true;}    //When a=1 input is fully factorised, end process
}

console.log("The largest prime factor of "+ input +" is "+ max_prime);