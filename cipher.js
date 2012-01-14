var crypto = require("crypto");

var cipher, ciphered, decipher, deciphered, password;

password = "i'm the password";

cipher = crypto.createCipher("aes-256-ecb", password);
//important! Update cipher content in "utf8" encoding; To be transformed to a "hex" string!
ciphered = cipher.update("hello world!", "utf8", "hex");
ciphered += cipher.update("hello nodejs!", "utf8", "hex");
ciphered += cipher.final("hex");
console.log(ciphered);//6cc3c04d5fc076ba32b742e1f3439880adbe251e87fe0be9f42a16be4d69a4b8


decipher = crypto.createDecipher("aes-256-ecb", password);
//important! Update decipher content is "hex" string; To be transfromed to a "utf8" result!
deciphered = decipher.update(ciphered, "hex", "utf8");
deciphered += decipher.final("utf8");
console.log(deciphered);//hello world!hello nodejs!
