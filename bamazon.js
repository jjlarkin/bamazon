/**
 * Bamazon
 */
const mysql = require("mysql");
const inquirer = require("inquirer");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",


    password: "1111",
    database: "bamazon"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Success");

    start()

});
//User is prompted to select an item to purchase
let start = function() {
    displayInv();
    inquirer.prompt({
        name: "itemSelect",
        type: "list",
        message: "Select item to purchase",
        choices: ["cupcake", "icecreamcake", "tastyCake"]
    }).then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.itemSelect === "cupcake") {
connection.query("UPDATE products SET stock_quantity=stock_quantity-1 WHERE product_name =?",[answer.itemSelect])
            displayInv();
        } else if(answer.itemSelect === "icecreamcake") {

        }else if(answer.itemSelect === "tastycake"){

        }
    });
};

let displayInv = function(){
    connection.query("SELECT * FROM bamazon.products", function(error, results){
        for(let i=0; i<results.length; i++){
            console.log("ID:"+results[i].id);
            console.log("Product Name:"+ results[i].product_name);
            console.log("Department:"+results[i].department_name);
            console.log("Price:"+results[i].price);
            console.log("Quantity:"+results[i].stock_quantity);
            console.log("************************");
        }
    })

};


