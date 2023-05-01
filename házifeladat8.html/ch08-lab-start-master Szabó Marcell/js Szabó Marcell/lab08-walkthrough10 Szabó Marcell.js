/* code goes here */
var order = new Object();
order.product = "Self Portrait in a Straw Hat"
order.price = 15.0;
order.quantity = 2;
order.total = function() {
    return this.price *this.quantity;}
document.write("Product = " + order.product);

document.wirte("<br>Price=" + order.price);
document.wirte("<br>Quantity=" + order.quantity);
document.wirte("<br>Total=" + order.total());
document.wirte("<br>Total=" + order.total);

var order = {};

order["product"] = "Self Portrait in a Straw Hat";
order["price"] = 15.0;
order["quantity"] = 2;
order["total"] = function(){ return this.price * this.quantity;};

function order(product, price, quantity){
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    this.total = function(){
        return this.price * this.quantity;
    };
    this.total = function(){
        document.write("<p>Product=" + this.product);
        document.write("<br>Price=" + this.price);
        document.write("<br>Quantity=" + this.quantity);
        document.write("<br>Total=" + this.total());        
    }
}

var example1 = new order("Self Portrait in a Straw Hat", 15, 2);
var example2 = new order("Intitled #23", 10, 4);

document.write("<p>Product=" + example1.product);
document.write("<br>Price=" + example1.price);
document.write("<br>Quantity=" + example1.quantity);
document.write("<br>Total=" + example1.total());

document.write("<p>Product=" + example2.product);

example1.outpout();
example2.outpout();