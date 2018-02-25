# Railfence Cipher

A transposition cipher also called the zigzag cipher.

## How it works

### Encoding

The Rail Fence Cipher places the letters in a zigzag pattern before reading them again, from top to bottom, right to left, ignoring the zigzag.

Example:

Let's imagine that we are encoding `Hello World!` on 3 rails. we draw out our three rails and place the lettres in the zigzag pattern like this:

```txt
H - - - o - - - r - - -
- e - l -   - o - l - !
- - l - - - w - - - d -
```

When this is read top to bottom, left to right, we get `Horel ol!lwd`

## Requirements:

- Your program should be case **sensitive** and should support any Unicode symbols
- Your program should use this template:

```javascript
String.prototype.encrypt = function(key) { // key is the number of rails
    // to get the String you need to encrypt, use 'this'
}
```
