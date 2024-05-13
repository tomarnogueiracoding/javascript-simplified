const userExport = require('./user.js')
const me = userExport.me
const sally = userExport.sally
const printUser = userExport.printUser

printUser(me)
printUser(sally)
