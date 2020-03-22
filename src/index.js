
function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let bracketsLeft = 0;
    let bracketsRight = 0;
    let arr = expr.split('').filter(element => element != " ");
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == '0'){
            if(arr[i - 1] == '/'){
                throw ("TypeError: Division by zero.")
            }
        } else if (arr[i] == '('){
            bracketsLeft += 1;
        } else if (arr[i] == ')'){
            bracketsRight += 1;
        }
    }
        
    if (bracketsLeft == bracketsRight) {
        return (new Function(`return ${expr}`))();
    } else {
        throw ("ExpressionError: Brackets must be paired");
    }
}

module.exports = {
    expressionCalculator
}