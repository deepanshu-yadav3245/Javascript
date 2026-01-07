const accountId = 1414556;
let accountEmail = "rahul@gmail.com"
var accountPassword = "123456"
accountCity = "lucknow"
let accountState;

// accountId = 45 not allowed

accountEmail = "deepanshu@234gmail.com"
accountPassword = "2121234"
accountCity = "Jaipur";

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])



/*
Prefer not to use var
Because of issue in block scope and functional scoped
*/