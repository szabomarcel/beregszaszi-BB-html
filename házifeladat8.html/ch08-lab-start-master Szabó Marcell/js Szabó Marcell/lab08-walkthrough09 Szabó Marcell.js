/* code goes here */
var isCanadian = true;

var tax = function taxRate(){
    // return amout * taxRate();
    if (isCanadian){
        return 0.05;
    }else{
        return 0.0;
    }
};
return amount * tax();
function calculateTax(amount){
    return amout * taxRate();
}
function calculateTotaol(price, quantity){
    var amount = price * quantity;
    // return (price * quantity ) + calculateTax(price * quantity);
    return amount + calculateTax(amount, function(){
        if(isCanadian){
            return 0.05;
        }else{
            return 0.0;
        }
    });
}
