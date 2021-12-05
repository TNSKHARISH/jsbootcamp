const account={
    name : 'TNSK Harish',
    expenses :[],
    income :[],
    addExpense :function(descripvalue,amountvalue){
        this.expenses.push({
            description : descripvalue,
            amount : amountvalue
        })
    },
    addIncome :function(descripvalue,amountvalue){
        this.income.push({
            description : descripvalue,
            amount : amountvalue
        })
    },
    
    getAccountSummary : function(){
        let totalExpense=0
        let totalIncome=0
        let totalAmount=0
        this.expenses.forEach(function(expense) {
            totalExpense=totalExpense+expense.amount
        })
        this.income.forEach(function(inc){
            totalIncome=totalIncome+inc.amount
        })
        totalAmount=totalIncome-totalExpense
       /* for (i=0;i<this.expenses.length;i++){
            totalAmount+=this.expenses[i].amount
        }*/
        console.log(`${this.name} has a balance of $${totalAmount}.$${totalIncome} in income and $${totalExpense} in expenses`)

    }

}
// Expense -> description,amount
//add expense -> description,amount
//getAccountSummary-> total up all expenses -> harish has $1250 in expenses.
// add income array to account
// addIncome method-> description,amount
// Tweak getaccountsummary
//Harish has a balance of $ 10. $100 in income and $ 90 in expenses
account.addExpense('Rent',950)
account.addExpense('coffee',2)
account.addIncome('Job',1000)
account.getAccountSummary()