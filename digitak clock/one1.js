class employee{
 acc_id=101;
 name="abc";
 sal=45000;
 
 open_account() {
    console.log("created the account succesfully");
 }
 deposite_amount() {
    console.log("deposited the amount succesfully");
 }
 withdraw_amount() {
    console.log("sorry!! insuficient balance")
 }

}
let a1=new employee()
a1.open_account();
a1.deposite_amount();
a1.withdraw_amount();