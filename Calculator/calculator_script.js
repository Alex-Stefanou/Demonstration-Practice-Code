var result="0";
var mem=0;
var error =
    ["Error: Non-numerical values entered",
     "Error: Calculator can only accept one operator",
     "Error: Division by 0 is undefined"];

/*
function parseEquation(input){
    result = input;
}*/

function add_char(str){
    result += str;
    return null;
}

var calculator = new Vue({
    el: '#calculator',
    data: {
        answer: result
    },
    methods: {
        zero:   function(zero){add_char("0")} 
    },
})


/*
var buttons = new Vue2({
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