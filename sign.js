var crypto = require("crypto"),
    fs = require("fs");

var signer, sign, verifier, privateKey, publicKey, result;

privateKey = fs.readFileSync("mykey.pem", "utf8");
publicKey = fs.readFileSync("mypub.pem", "utf8");

signer = crypto.createSign("RSA-SHA256");
signer.update("hello world!");
signer.update("hello node!");
sign = signer.sign(privateKey, "hex");
console.log(sign);//82071cf4bf80e8c0445351102444ce144017054c25e4832cc050a580aa13035526d432d74a33ebc8aee81376d51e0372a75bc796ece3cadea16bff58b15eccc4e7399c21e0391353c7855391e19cf48aefa148aeb73d1ad4e4e2af156d14da2a84bbf616d18353b0bb4d3570f513056c2edb20af9dfcba71695221f16f4ef182

verifier = crypto.createVerify("RSA-SHA256");
verifier.update("hello world!");
verifier.update("hello node!");
result = verifier.verify(publicKey, sign, "hex");
console.log(result);//true