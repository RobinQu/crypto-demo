var crypto = require("crypto");

var hmac, result;
hmac = crypto.createHmac("sha1", "i'm a secret!");

hmac.update("hello world!");
hmac.update("hello nodejs!");
result = hmac.digest("hex");
console.log(result); //9e7b9239f03d2e03cb041a8518977ac84ab4c9b9
