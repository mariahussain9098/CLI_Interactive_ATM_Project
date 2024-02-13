import inquirer from "inquirer";

interface ansType{
    userId: string,
    userPin: number,
    accountType: string,
    transactionType: string,
    amount: number
}
const answers:ansType = await inquirer.prompt([ 
    {
        type: "input",
        name: "userId",
        message: "Plaes enter your Id"
    },
    {
        type: "number",
        name: "userPin",
        message: "Please enter your Pin"
    },
    {
        type:"list",
        name: "accountType",
        choices: ["current", "saving"],
        message: "select your account type"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Widthdraw Amount"],
        message: "Please select tracnsaction type"
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 5000, 10000],
        message: "Please select your amount",
        when(answers){
            return answers.transactionType == "Fast Cash"
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Please enter your amount",
        when(answers){
            return answers.transactionType == "Widthdraw Amount"
        }
    }
    
])
if(answers.userId && answers.userPin){
    const balance = Math.floor(Math.random()*100000);
    console.log(balance);
    const EnterAmount = answers.amount;
    if(balance >= EnterAmount){
        const remainingBal = balance - EnterAmount
        console.log("your remaining balance is ", remainingBal);
    }else{
        console.log("Insuficient balance");
    }
}