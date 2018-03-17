# HashShift

## How it works?

> We'll use the Swift implementation to describe what we're doing

First, let's take a seed for our generator:

```swift
var seed = 12
```

Then let's hash his `String` representation:

```swift
let hash = String(seed).sha256
```

Now, we'll take the `10` first characters of the outputed hex digest:

```swift
let first = hash.prefix(10)
```

Now we have a `hex` representation of a number in a `String`, let's parse it:

```swift
let n = Int(first, radix: 16)
```

Then, we rotate `n` like:

```swift
let r = (n! >> 13 * seed) % 99371 // for non-swift developers, 'n!' doesn't mean n factorial but the unwrapped value of n
```

And we change the `seed`:

```swift
seed = (r ^ n! << 2 + n!) % 70937
```

Finally we output the absolute value as `Float` of `r` divided by `99371` to have a number between `0` and `1`:

```swift
return Float(abs(r)) / 99371
```

# What you need to do:

**Using this explanation, create a HashShift PRNG generator.**

## Requirements:
- Your program should use this template:

```javascript
String.prototype.sha256=function(){let r=this;const n=8,t=0;function e(r,n){const t=(65535&r)+(65535&n);return(r>>16)+(n>>16)+(t>>16)<<16|65535&t}function o(r,n){return r>>>n|r<<32-n}function u(r,n){return r>>>n}function c(r,n,t){return r&n^~r&t}function f(r,n,t){return r&n^r&t^n&t}function i(r){return o(r,2)^o(r,13)^o(r,22)}function a(r){return o(r,6)^o(r,11)^o(r,25)}function h(r){return o(r,7)^o(r,18)^u(r,3)}return function(r){const n=t?"0123456789ABCDEF":"0123456789abcdef";let e="";for(let t=0;t<4*r.length;t++)e+=n.charAt(r[t>>2]>>8*(3-t%4)+4&15)+n.charAt(r[t>>2]>>8*(3-t%4)&15);return e}(function(r,n){const t=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),C=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),g=new Array(64);let l,d,A,s,S,m,y,p,v,w;r[n>>5]|=128<<24-n%32,r[15+(n+64>>9<<4)]=n;for(var b=0;b<r.length;b+=16){l=C[0],d=C[1],A=C[2],s=C[3],S=C[4],m=C[5],y=C[6],p=C[7];for(var B=0;B<64;B++)g[B]=B<16?r[B+b]:e(e(e(o(D=g[B-2],17)^o(D,19)^u(D,10),g[B-7]),h(g[B-15])),g[B-16]),v=e(e(e(e(p,a(S)),c(S,m,y)),t[B]),g[B]),w=e(i(l),f(l,d,A)),p=y,y=m,m=S,S=e(s,v),s=A,A=d,d=l,l=e(v,w);C[0]=e(l,C[0]),C[1]=e(d,C[1]),C[2]=e(A,C[2]),C[3]=e(s,C[3]),C[4]=e(S,C[4]),C[5]=e(m,C[5]),C[6]=e(y,C[6]),C[7]=e(p,C[7])}var D;return C}(function(r){const t=Array(),e=(1<<n)-1;for(let o=0;o<r.length*n;o+=n)t[o>>5]|=(r.charCodeAt(o/n)&e)<<24-o%32;return t}(r=function(r){r=r.replace(/\r\n/g,"\n");let n="";for(let t=0;t<r.length;t++){const e=r.charCodeAt(t);e<128?n+=String.fromCharCode(e):e>127&&e<2048?(n+=String.fromCharCode(e>>6|192),n+=String.fromCharCode(63&e|128)):(n+=String.fromCharCode(e>>12|224),n+=String.fromCharCode(e>>6&63|128),n+=String.fromCharCode(63&e|128))}return n}(r)),r.length*n))};

// To use SHA256, do something like: "some text".sha256()

function* rand(seed) {
	while (true) {
		yield out // out is the outtputed number.
	}
}
```
