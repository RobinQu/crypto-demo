var crypto = require("crypto"),
    Buffer = require("buffer").Buffer;
    
var alice, bob, A, a, B, b, p, s1, s2;

alice = crypto.createDiffieHellman(8);//using a 8 bits length prime
A = alice.generateKeys("hex");
a = alice.getPrivateKey("hex");//this is secret
p = alice.getPrime("hex");
console.log("Public Key of alcie: ", alice.getPublicKey("hex"), A);
console.log("Private Key of alice: ", a);
console.log("Prime: ", p); 


//sending p and A to Bob
bob = crypto.createDiffieHellman(p, "hex");//Bob should use the same prime
B = bob.generateKeys("hex");
b = bob.getPrivateKey("hex");
console.log("Public Key of bob", bob.getPublicKey("hex"), B);
console.log("Private Key of bob: ", b);
s2 = bob.computeSecret(A, "hex", "hex");

//sending B to Alice
s1 = alice.computeSecret(B, "hex", "hex");

console.log("Shared Secret:", s1, s2);
