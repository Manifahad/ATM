#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let mypin = 1234;
let pinanswer = await inquirer.prompt([
    {
        name: "q1",
        message: "what is your pin number",
        type: "number",
    }
]);
if (pinanswer.q1 === mypin) {
    console.log("correct pin code");
    let atmchoice = await inquirer.prompt([{
            name: "operation",
            message: "please choose any one below list",
            type: "list",
            choices: ["with draw", "balance"]
        }
    ]); // 2nd inquirer close bracets
    console.log(atmchoice);
    if (atmchoice.operation === "with draw") {
        let amountwithdraw = await inquirer.prompt([{
                name: "amount",
                message: "please choose from  list",
                type: "list",
                choices: ["5000", "10000", "15000", "20000", "anyother amount",]
            }
        ]);
        console.log(amountwithdraw);
        if (amountwithdraw.amount === "anyother amount") {
            let otheramount = await inquirer.prompt([{
                    name: "anyamount",
                    message: "enter the amount",
                    type: "number"
                }
            ]);
            myBalance = myBalance - otheramount.anyamount;
        }
        else {
            myBalance = myBalance - amountwithdraw.amount;
        }
        console.log("please take your card");
        console.log("please collect your cash");
        if (myBalance > 0) {
            console.log(`your remaining balance is ${myBalance}`);
        }
        else
            console.log("your balance is in sufficient ");
    }
    else if (atmchoice === "balance") {
        console.log(`your balance is ${myBalance}`);
    }
} // first if close balance 
else { // first if else statment 
    console.log("wrong passward");
    console.log(`your balance is ${myBalance}`);
}
