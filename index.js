#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.cyanBright("\t\t\t Welcome to My Adeventure Quiz App"));
console.log(chalk.green.bold("==========================================================================================="));
console.log(chalk.red.bold("\t\tYou are required to gain maximum 4 points for the window"));
let points = 0;
let question1 = await inquirer.prompt([{
        name: "Question1",
        message: "typescript is a superset off??",
        type: "list",
        choices: ["javascript", "typescript", "python", "java"]
    }]);
let question2 = await inquirer.prompt([{
        name: "Question2",
        message: "Who is the founder of javascript??",
        type: "list",
        choices: ["Brendan Eich", "Bill Gates", "Mark Zuckerberg", "Guido van Rossum"]
    }]);
let question3 = await inquirer.prompt([{
        name: "Question3",
        message: "capital of pakistan??",
        type: "list",
        choices: ["Islamabad", "Karachi", "Lahore", "Quetta"]
    }]);
let question4 = await inquirer.prompt([{
        name: "Question4",
        message: "Who is the governer of sindh??",
        type: "list",
        choices: ["Kamran Tessori", "Shahid Afridi", "Muhammad Iqbal", "Muhammad Nawaz"]
    }]);
let question5 = await inquirer.prompt([{
        name: "Question5",
        message: "Which of the following companies did Elon Musk co-found?",
        type: "list",
        choices: ["Amazon", "Tesla", " Microsoft", "Google"]
    }]);
if (question1 = "javascript") {
    console.log("Correct Answer");
    points++;
}
else {
    console.log("Wrong Answer");
}
if (question2.question2 = "Guido van Rossum") {
    console.log("Correct Answer");
    points++;
}
else {
    console.log("Wrong Answer");
}
if (question3.question3 = "Islamabad") {
    console.log("Correct Answer");
    points++;
}
else {
    console.log("Wrong Answer");
}
if (question4.question4 = "Kamran Tessori") {
    console.log("Correct Answer");
    points++;
}
else {
    console.log("Wrong Answer");
}
if (question5.Question5 = "Tesla") {
    console.log("Correct Answer");
    points++;
}
else {
    console.log("Wrong Answer");
}
//output conditions
if (points >= 4) {
    console.log(chalk.whiteBright.bold("==========================================================================================="));
    console.log(chalk.green.bold("\t\t\t\t Congratulations!! You Won"));
    console.log("Your Points is ", chalk.cyanBright.bold(points));
}
else {
    console.log("You Lose!, Try again Next time");
    console.log("Your Points is ", chalk.redBright.bold(points));
}
