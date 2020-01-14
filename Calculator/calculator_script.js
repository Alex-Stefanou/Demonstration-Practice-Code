/* Function to handle button pressing:
Enters respective characters into the input bar */
function buttonPress( input, id ) {
    console.log("Button press registered");
    switch( id ) {
        case "ac":      return "";                  break;
        case "del":     return input.slice(0,-1);   break;
        case "plus":    return input + "+";         break;
        case "minus":   return input + "-";         break;
        case "times":   return input + "*";         break;
        case "divide":  return input + "/";         break;
        
        case "dot": return input + "."; break;
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

        default: return "error";   break; //Default should never be reached
    }
}

/* Function to resolve input string into computable chunks for compute() */
function parseEqn (input) {
    var equation = {operation: null, LHS: null, RHS: null, errorCode: 0};
    console.log(`Input equation is ${input}`);
    input = input.replace( /,/g , "." )  //Replace all decimal commas with decimal points
    let opPlus =    (input.match(/\+/g)||[]).length;  //Counts number of operators (if null then 0)
    let opMinus =   (input.match(/\-/g)||[]).length;
    let opTimes =   (input.match(/\*/g)||[]).length;
    let opDivide =  (input.match(/\//g)||[]).length;

    let opTotal = opPlus + opMinus + opTimes + opDivide;
    console.log(`Operators = ${opTotal}`);

    if ( opTotal == 0 ) {       //No operator in input, return the input
        equation.operation = input;
        return equation;
    }
    else if ( opTotal > 1) {    //Too many operators, return error 1
        equation.errorCode = 1
        return equation;
    }
    return equation;
}

/* Function that describes error codes for output to user */
function errorID (id) {
    switch ( id ) {
        case 1: return "Error: Too many operators";   break;
        
        default: return "An unknown error has occured";
    }
}

/* Function to compute equation */
function compute (input) {
    //take input and verify
    var equation = parseEqn(input)
    if ( equation.errorCode != 0) return errorID(equation.errorCode);
    else if ( equation.operation == input) return input;

        //if illegal chars -> error Non-numerical values entered
    //find and classify operator
        //if no operator -> return input
        //if >1 op -> error only one operator accepted
    //split either side of operator into left and right
        //if left is empty -> error no left hand term
        //if right is empty -> error no right hand term
        //if left or right has >1 decimal point -> error incorrect decimal point usage
        //if right=0 && op=division -> error division by zero
    //convert left and right to numbers (and commas to dots)
    //calculate result
    //return result
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
            this.equation = buttonPress(this.equation, e.target.id)
        },
        resolveEqn: function() {
            console.log("Starting Computation");
            this.answer = compute(this.equation);
            console.log("Computation Complete")
        }
    }
});