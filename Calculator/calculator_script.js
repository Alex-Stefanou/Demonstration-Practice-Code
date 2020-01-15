/* Function to handle button pressing:
Enters respective characters into the input bar */
function buttonPress( input, id ) {
    switch( id ) {
        case "$del":    return input.slice(0,-1);   break;
        case "$plus":   return input + "+";         break;
        case "$minus":  return input + "-";         break;
        case "$times":  return input + "*";         break;
        case "$divide": return input + "/";         break;

        case "$dot":return input + "."; break;
        case "$0":  return input + "0"; break;
        case "$1":  return input + "1"; break;
        case "$2":  return input + "2"; break;
        case "$3":  return input + "3"; break;
        case "$4":  return input + "4"; break;
        case "$5":  return input + "5"; break;
        case "$6":  return input + "6"; break;
        case "$7":  return input + "7"; break;
        case "$8":  return input + "8"; break;
        case "$9":  return input + "9"; break;

        default: return "error"; break; //Default should never be reached
        }
    }
}

/* Function to resolve input string into computable chunks for compute() */
function parseEqn (input) {
    var equation = {operation: null, LHS: null, RHS: null, result: null, errorCode: 0};

    //Remove whitespace and unify decimal separaters
    input = input.replace( /\s/g , "" )
    input = input.replace( /\,/g , "." )

    //Identify and count operators
    let opPlus =    (input.match(/\+/g)||[]).length; 
    let opMinus =   (input.match(/\-/g)||[]).length;
    let opTimes =   (input.match(/\*/g)||[]).length;
    let opDivide =  (input.match(/\//g)||[]).length;

    let opTotal = opPlus + opMinus + opTimes + opDivide;

    //Handle irregular numbers of operators
    if ( opTotal == 0 ) {
        //For 0 operators: error check and return input
        let decimalsInput = (input.match(/\./g) || []).length;
        let digitsInput =   (input.match(/\d/g) || []).length;
        
        if ( digitsInput + decimalsInput != input.length ) equation.errorCode = 2;
        else if ( decimalsInput > 1) equation.errorCode = 3;
        
        equation.operation = "none";
        equation.result = input;
        return equation;
    }
    if ( opTotal > 1) {
        equation.errorCode = 1;
        return equation;
    }

    //Define operation type and split terms into equation object
    if ( opPlus == 1) {
        equation.operation = "addition";
        equation.LHS = input.split( "+" )[0];
        equation.RHS = input.split( "+" )[1];
    }
    else if ( opMinus == 1) {
        equation.operation = "subtraction";
        equation.LHS = input.split( "-" )[0];
        equation.RHS = input.split( "-" )[1];
    }
    else if ( opTimes == 1) {
        equation.operation = "multiplication";
        equation.LHS = input.split( "*" )[0];
        equation.RHS = input.split( "*" )[1];
    }
    else if ( opDivide == 1) {
        equation.operation = "division";
        equation.LHS = input.split( "/" )[0];
        equation.RHS = input.split( "/" )[1];
    }

    //Check terms have legal number of decimals and no illegal characters
    let decimalsLHS = (equation.LHS.match(/\./g) || []).length;
    let decimalsRHS = (equation.RHS.match(/\./g) || []).length;
    let digitsLHS =   (equation.LHS.match(/\d/g) || []).length;
    let digitsRHS =   (equation.RHS.match(/\d/g) || []).length;    
    
    if ( digitsLHS + decimalsLHS != equation.LHS.length
       ||digitsRHS + decimalsRHS != equation.RHS.length) {
        equation.errorCode = 2;
        return equation;
    }
    if ( decimalsLHS > 1 || decimalsRHS > 1) {
        equation.errorCode = 3;
        return equation;
    }
    
    //Check there are two terms
    if ( equation.LHS.length == 0 || equation.RHS.length == 0) {
        equation.errorCode = 4;
        return equation;
    }

    //Check for division by zero
    if ( equation.operation == "division" && equation.RHS == 0) {
        equation.errorCode = 5;
        return equation;
    }

    //Equation is now 'clean' and ready for computation
    return equation;
}

/* Function that describes error codes for output to user */
function errorID (id) {
    switch ( id ) {
        case 1: return "Error: Too many operators";         break;
        case 2: return "Error: Non-digit character";        break;
        case 3: return "Error: Too many decimal separators";break;
        case 4: return "Error: Missing term";               break;
        case 5: return "Error: Division by zero";           break;
        default: return "An unknown error has occured";
    }
}

/* Function to compute equation */
function compute (input) {
    //Parse input
    var equation = parseEqn(input);
    let result = 0

    //Handle any returned errors
    if ( equation.errorCode != 0) return errorID(equation.errorCode);
    if ( equation.operation == "none") return equation.result;
    
    //Convert strings to numbers
    let LHS = parseFloat(equation.LHS);
    let RHS = parseFloat(equation.RHS);

    //Compute result
    if      ( equation.operation == "addition")       result = LHS + RHS;
    else if ( equation.operation == "subtraction")    result = LHS - RHS;
    else if ( equation.operation == "multiplication") result = LHS * RHS;
    else if ( equation.operation == "division")       result = LHS / RHS;
    
    equation.result = result.toString();
    return equation.result;
}

/* Core application: */
var vm = new Vue({
    el: '#calculator',
    data: {
        equation: "",
        answer: "0"
    },
    methods: {
        pushEqn: function(e) {
            this.equation = buttonPress(this.equation, e.toElement.id)
        },
        clearEqn: function() {
            this.equation = "";
            this.answer = "0"
        },
        resolveEqn: function() {
            this.answer = compute(this.equation);
        }
    }
});