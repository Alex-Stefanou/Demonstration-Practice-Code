var size, max=0, palindrome=0;
var a,b,i,j,k;

size = 3;   //number of digits

for(i=0; i<size; i++){max += 9 * (10**i);}  //Create largest [size]-digit number

for(i=0; i<=max; i++){
    for(j=0; j<=max; j++){  //multiply all [size]-digit numbers for palindromes
        k = i * j;
        if(isPalindromic(k)==true){
            if(k>palindrome){
                palindrome = k; //if new largest palindrome found, remember it
                a = i;
                b = j;
            }   
        }
    }
}

console.log("The largest palindromic product of two "+ size +"-digit numbers is "+ palindrome 
            +", the product of "+ a +" and "+ b);

function isPalindromic(p){  //Boolian function to verify if a number is Palindromic
    var q = String(p).split("").reverse().join("");
    if(p==Number(q)){return true;}
    else {return false;}
}
