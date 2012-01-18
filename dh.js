// ===============================================================================================
// = Code will not work; Only for demonstration. Look for a real working sample in dh_simple.js  =
// ===============================================================================================

var crypto = require("crypto"),
    Buffer = require("buffer").Buffer;

//implementing the demostration given by http://en.wikipedia.org/wiki/Diffie–Hellman_key_exchange
var alice, bob, p, g, A, B, a, b, s1, s2;
p = 23;
g = 5;

a = 6;
b = 15;

// alice = crypto.createDiffieHellman(p, "hex");
// bob = crypto.createDiffieHellman(p, "hex");


// console.log("Default generator(primitive root) in node: ", parseInt(alice.getGenerator("hex"), 10)); // node always uses 2 as generator (g=2)

//using dh.generateKeys("hex") can generate private integer and public key, but we cannot choose our own primitive root. So we manually set private key to carry out the what has been done in wiki.
console.log(p.toString(16)); 

alice = crypto.createDiffieHellman(p.toString(16), "hex");

// alice = crypto.createDiffieHellman(new Buffer(p.toString(16), "hex"));
A = Math.pow(g, a) % p;
alice.setPrivateKey(a.toString(16), "hex");
alice.setPublicKey(A.toString(16), "hex");
// A = alice.generateKeys("hex"); 
// a = alice.getPrivateKey("hex");

console.log("Prime in Alice", parseInt(alice.getPrime("hex"), 16));
console.log(A, a); 

console.log(p); 

bob = crypto.createDiffieHellman(p.toString(16), "hex");
// bob = crypto.createDiffieHellman(new Buffer(p.toString(16), "hex"));
B = Math.pow(g, b) % p;
bob.setPrivateKey(b.toString(16), "hex");
bob.setPublicKey(B.toString(16), "hex");
// B = bob.generateKeys("hex");
// b = bob.getPrivateKey("hex");
console.log("Secret Prime in Bob", parseInt(bob.getPrime("hex"), 16));
console.log(B, b); 
// 
s1 = alice.computeSecret(B, "hex", "hex");
s2 = bob.computeSecret(A, "hex", "hex");
// console.log(s1, s2); 

console.log(s1 == s2); 