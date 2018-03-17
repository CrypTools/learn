# BitShift Cipher
> ⚠️ We strongly recommend you to know how to program in at least one programming language.

## How it works

### Encoding

The Bitshift Cipher works by (as the name suggests) shifting over the bits of the text's ASCII. We do this using the bitwise `<<` operator, which is used to shift the bits a certain number of places.

To encode the text, we loop through the text, and for each character `x`, we loop through the key array, and for each key character `i`:

```py
x = x + 1 << i % 8
```

We limit the maximum shift using modulo to avoid having a bit shifted by hundreds of places

Example:

Let's imagine we are currently working on the character `A`, and that our key is `YO`

```Python
A = 0b01000001 # ASCII for A
    0b01000010 # plus 1
    0b010000100 # Y is 89, 89 % 8 = 1, so we add 1 zero.
    # next charachter in key: O
    0b010000101 # plus 1
    0b0100001010000000 # O is 79, 79 % 8 = 7, so we add 7 zeros.
```

After each character is encoded, we add it to an array and reverse the key to make frequency analysis harder.

Let's say the next character in our string is `B`, our key now is `OY`, as it was reversed.

```Python
B = 0b01000010 # ASCII for B
    0b01000011 # plus 1
    0b010000110000000 # O is 79, 79 % 8 = 7, so we add 7 zeros.
    # next character in key: Y
    0b010000110000001 # plus 1
    0b0100001100000010 # Y is 89, 89 % 8 = 1, so we add 1 zero.
```

Our array now looks like this: `[0b0100001010000000, 0b0100001100000010]`, or in decimal: `[17024, 17154]`.

Finally, we encode the array in base64 to get the final encrypted string: `'WzE3MDI0LCAxNzE1NF0='`.

# What you need to do
- What would be, in a decimal array (basically you don't need to Base64 encode your output) the encrypted result of `CrypTools` with the key `learn`.

## Requirements
- Your array should begin with `[` and end with `]`.
- No space after or before `[` and `]`
- Separated with a comma and a space like: `, `.
- Integers should be in base 10.
- We'll use unsigned 32 bit integers method to represent numbers.
