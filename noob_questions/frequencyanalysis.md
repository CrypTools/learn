# Frequency Analysis with Caesar Cipher
Remember the [Caesar Cipher](https://cryptools.github.io/learn/noob#caesar-encrypt) challenge?

> The Caesar Cipher, also known as a shift cipher, is one of the oldest and simplest forms of encrypting a message. It is a type of substitution cipher where each letter in the original message (which in cryptography is called the plaintext) is replaced with a letter corresponding to a certain number of letters shifted up or down in the alphabet.

So for example, if our letter is `A` and our shift is `4`, we get `E`.

# Get the key:
With a given encrypted text, we can get the key by analyzing the letters frequency. For example, in English `E` is the most used letter.

### Example
If you have `pixxiv`, we see that there are 2 `i` and 2 `x`. We'll start with `i`, and we'll suppose that it's an `e`.
```js
i - e = 4 // We aren't substracting letters but their position in the alphabet
```
Let's try to decode `pixxiv` with `4`.

And we get `letter`, which is an English word, so the key was `4`.

# What you need to do?
Try to get the key of the following phrase:
```
aol xbpjr iyvdu mve qbtwz vcly aol shgf kvn
```
