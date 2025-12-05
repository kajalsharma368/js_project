const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"

/*
prefer not to use var 
because of issue in block scopr and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])
