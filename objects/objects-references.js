let myAccount = {
    name :'TNSK HARISH',
    expenses: 0,
    income:  0
}
/*let account=myAccount
account.income=1000
account={}*/
let addExpense=function(account,amount){
   //useraccount={}
    account.expenses=account.expenses+amount
//console.log(useraccount)
}
//addIncome
//resetAccount
//getAccountSummary
//Account for andrew has $900. $1000 in income and $100 in expenses

let addIncome=function(account,amount){
    account.income=account.income+amount
}
let resetAccount=function(account){
    account.income=0
    account.expenses=0
}
let  getSummary=function(account){
    return `Account for ${account.name } has $${account.income-account.expenses}. $${account.income} in Income and $${account.expenses} in expenses.`


}
addIncome(myAccount,25000)
addExpense(myAccount,5000)
console.log(getSummary(myAccount))
resetAccount(myAccount)
console.log(myAccount)
