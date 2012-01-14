var crypto = require("crypto");

var md5hash, result;
//Warning: MD5 collision is made easier and easier. Use SHA1 instead!
md5hash = crypto.createHash("md5");
md5hash.update("hello world!");
md5hash.update("hello nodejs!");
result = md5hash.digest("hex");
console.log(result); //7d962c953bb09058460f3f47650b1ab2