# Concept of Hash
A cryptographic hash function is a special class of hash function that has certain properties which make it suitable for use in cryptography.

It is a mathematical algorithm that maps data of arbitrary size to a bit string of a fixed size (a hash) and is designed to be a one-way function, that is, a function which is infeasible to invert.

The only way to recreate the input data from an ideal cryptographic hash function's output is to attempt a brute-force search of possible inputs to see if they produce a match, or use a rainbow table of matched hashes.

Bruce Schneier has called one-way hash functions "the workhorses of modern cryptography". The input data is often called the message, and the output (the hash value or hash) is often called the message digest or simply the digest.

The ideal cryptographic hash function has five main properties:

- it is deterministic so the same message always results in the same hash
- it is quick to compute the hash value for any given message
- it is infeasible to generate a message from its hash value except by trying all possible messages
- a small change to a message should change the hash value so extensively that the new hash value appears - uncorrelated with the old hash value
- it is infeasible to find two different messages with the same hash value

# Problem
At CrypTools, one of our admin forgot his password, but GitHub was able to obtain and give us a `SHA256` hash of his password:
```
88d4266fd4e6338d13b845fcf289579d209c897823b9217da3e161936f031589
```
Hopefully, he remember that his password is only 4 letters long and that his password was made of lower cased letters.

# What you need to do?
Using the hash function `SHA256` that we provide, create a function that will brute force the hash and will output the password.
## Requirements:
- Your program should use this template:

```javascript
String.prototype.sha256=function(){let r=this;const n=8,t=0;function e(r,n){const t=(65535&r)+(65535&n);return(r>>16)+(n>>16)+(t>>16)<<16|65535&t}function o(r,n){return r>>>n|r<<32-n}function u(r,n){return r>>>n}function c(r,n,t){return r&n^~r&t}function f(r,n,t){return r&n^r&t^n&t}function i(r){return o(r,2)^o(r,13)^o(r,22)}function a(r){return o(r,6)^o(r,11)^o(r,25)}function h(r){return o(r,7)^o(r,18)^u(r,3)}return function(r){const n=t?"0123456789ABCDEF":"0123456789abcdef";let e="";for(let t=0;t<4*r.length;t++)e+=n.charAt(r[t>>2]>>8*(3-t%4)+4&15)+n.charAt(r[t>>2]>>8*(3-t%4)&15);return e}(function(r,n){const t=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),C=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),g=new Array(64);let l,d,A,s,S,m,y,p,v,w;r[n>>5]|=128<<24-n%32,r[15+(n+64>>9<<4)]=n;for(var b=0;b<r.length;b+=16){l=C[0],d=C[1],A=C[2],s=C[3],S=C[4],m=C[5],y=C[6],p=C[7];for(var B=0;B<64;B++)g[B]=B<16?r[B+b]:e(e(e(o(D=g[B-2],17)^o(D,19)^u(D,10),g[B-7]),h(g[B-15])),g[B-16]),v=e(e(e(e(p,a(S)),c(S,m,y)),t[B]),g[B]),w=e(i(l),f(l,d,A)),p=y,y=m,m=S,S=e(s,v),s=A,A=d,d=l,l=e(v,w);C[0]=e(l,C[0]),C[1]=e(d,C[1]),C[2]=e(A,C[2]),C[3]=e(s,C[3]),C[4]=e(S,C[4]),C[5]=e(m,C[5]),C[6]=e(y,C[6]),C[7]=e(p,C[7])}var D;return C}(function(r){const t=Array(),e=(1<<n)-1;for(let o=0;o<r.length*n;o+=n)t[o>>5]|=(r.charCodeAt(o/n)&e)<<24-o%32;return t}(r=function(r){r=r.replace(/\r\n/g,"\n");let n="";for(let t=0;t<r.length;t++){const e=r.charCodeAt(t);e<128?n+=String.fromCharCode(e):e>127&&e<2048?(n+=String.fromCharCode(e>>6|192),n+=String.fromCharCode(63&e|128)):(n+=String.fromCharCode(e>>12|224),n+=String.fromCharCode(e>>6&63|128),n+=String.fromCharCode(63&e|128))}return n}(r)),r.length*n))};

// To use SHA256, do something like: "some text".sha256()
function bruteforce() {
	const hash = "88d4266fd4e6338d13b845fcf289579d209c897823b9217da3e161936f031589"
}
```
