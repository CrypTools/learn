# XORCipher
A simple adaptive cipher based on the logical XOR operation.

## How it works

### Encoding

The XOR cipher will encrypt a message by using the Boolean XOR (exclusive or) operation. A XOR B returns 1 if and only if A and B are different.

<table>
	<thead>
		<tr>
			<th>A</th>
			<th>B</th>
			<th>A XOR B</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>0</td>
			<td>0</td>
			<td>0</td>
		</tr>
		<tr>
			<td>0</td>
			<td>1</td>
			<td>1</td>
		</tr>
		<tr>
			<td>1</td>
			<td>0</td>
			<td>1</td>
		</tr>
		<tr>
			<td>1</td>
			<td>1</td>
			<td>0</td>
		</tr>
	</tbody>
</table>

To encrypt a message with a given key, we first convert the string into their ASCII equivalent, and we then XOR every character with the key. For example, if we want to encrypt XOR with 134 as a key, we would do:

```txt
    X        O        R
01011000 01001111 01010010    # String in ASCII
10000110 10000110 10000110    # Repeating key 134
--------------------------
11011110 11001001 11010100    # XOR result
    Þ        É        Ô       # Result converted back into plain text
```

When implemented in JavaScript, we get `char ^ key`.

As you might have noticed, in this cipher, a given character is always replaced by the same character. This makes frequency analysis easier. To avoid that, we can use a non-repeating key eg. `29, 62, 134`, where we loop through the keys to encode each character.

```txt
 X  O  R
88  79  82
29  62 134
----------
69 113 212
 E  q   Ô
```

# What you need to do:

**Using this explanation, recreate a function that encrypts a word such as `Hello` using any key**

## Requirements:

- Your program should be case insensitive, and return only upper cased letters.
- Your program should use this template:

```javascript
String.prototype.encrypt = function(key) { // key is a number or an array
    // to get the String you need to encrypt, use 'this'
}
```
