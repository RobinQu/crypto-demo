var crypto = require("crypto"),
    Buffer = require("buffer").Buffer;

var passphrase, salt;

passphrase = "my-wifi-passcode";
salt = "wifi-ssid";

crypto.pbkdf2(passphrase, salt, 4096, 256, function(err, key) {
  //key is in binary
  console.log("Encrypt wifi networkd data with key :", new Buffer(key, "binary").toString("hex"));
});