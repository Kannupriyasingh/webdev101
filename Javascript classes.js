//console.log("hello world")
/*
//length function
let password = "abcd134"
if(password.length >= 8){
    console.log("password is valid")
}
else{
    console.log("password is not valid")
}*/

/*
//let the question is we dont want anyone to login who is use gmail.com email id

let mail = "imkannupriya@yahoo.com"
if(mail.includes("gmail.com"))
    console.log("sorry you cant use gmail id to login")
else
    console.log("welcome to this website")
*/

/*
//* Enter a password: [**********]
//* Confirm your password: [**********]


let password1 = "abcd1234"
let password2 = "abcd234"

if(password1 === password2)
    console.log("password matched")
else
    console.log("password not matched")
*/


/*
//sort string in alphabetical order
let alpha = ["A", "Z", "M", "K"]
alpha.sort()
alpha
*/

/*
//splits string into an array of substrings
//a separator describes how to split a given string
//example: count words in an essay

let essay = "this is an essay let's count the normal of words"
let no_of_words = essay.split(" ")
no_of_words.length*/


/*
//logical operations
//Rules: 
//1. both the passwords entered must match
//2. the password length should more than 8

//Function
//refactoring 
//change structure the code not to change the functionality
//purpose - code is easier to understand
*/
let passwordvalidationstatus = (password1, password2) => {

//let password1 = "abcd123" 
//let password2 = "abcd1234"
let matching = password1 === password2
let required = password1.length >= 8
if(matching && required){
    //console.log("valid password")
}
else
    {
        let reasons = []
        //console.log("not valid password")
       // return {status: "not success"}
    

if(!matching)
{
    //console.log("password is not matching")
    reasons.push("password is not matching")
}
if(!required)
    {
        //console.log("length of password is less than 8")
        reasons.push("length of password is less than 8")
    }
    return {status: "failed", reasons: reasons}
}
}

let pass1 = "abcd123" 
let pass2 = "abcd1234"
let returned = passwordvalidationstatus(pass1, pass2)

if(returned.status === "success")
console.log("this password is valid")
else
{
    console.log("this password is invalid")
    console.log(returned.reasons)
}

