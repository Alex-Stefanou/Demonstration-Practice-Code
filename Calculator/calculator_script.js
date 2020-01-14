var result="0";
var error =
    ["Error: Non-numerical values entered",
     "Error: Calculator can only accept one operator",
     "Error: Division by 0 is undefined"];

/* Function to handle button pressing:
Enters respective characters into the input bar */
function buttonPress(input, id){
    console.log("Button press registered");
    switch(id){
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

function compute(input){

}

/* Core application: */
var vm = new Vue({
    el: '#calculator',
    data: {
        equation: "",
        answer: result
    },
    methods: {
        pushEqn: function(e) {
            this.equation = buttonPress(this.equation, e.target.id)
        }
    }/*,
    computed: {
        output: function() {
            return compute(this.input)
        }
    }*/
});


/*
var buttons = new Vue({
    add_character: add_char(x) {
        temp_result += x,
        result = temp_result,
    }


    methods:{
        zero:   add_char("0"),
        one:    add_char("1"),
        two:    add_char("2"),
        three:  add_char("3"),
        four:   add_char("4"),
        five:   add_char("5"),
        six:    add_char("6"),
        seven:  add_char("7"),
        eight:  add_char("8"),
        nine:   add_char("9"),
        plus:   add_char("+"),
        minus:  add_char("-"),
        times:  add_char("*"),
        divide: add_char("/"),
        dot:    add_char("."),
        pi:     "pi",
        ans:    "ans",

        del:    remove_char(),
        clear:  remove_all(),
    },
})
*/