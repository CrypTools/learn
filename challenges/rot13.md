# ROT13

A stupidly simple reversible substitution cipher.

> ROT13 was in use in the net.jokes newsgroup by the early 1980s. It is used to hide potentially offensive jokes, or to obscure an answer to a puzzle or other spoiler. - Wikipedia

# How it works

## Encoding

The ROT13 cipher will substitute each letter by the letter coming 13 places after it in the alphabet. According to this logic, N should map to the 27th character of the alphabet, but we only have 26 characters, so we loop the alphabet around. We now have the formula `ROT13(c) = (c + 13) % 26`, where c is the position in the alphabet of a given character.

Therefore, `A => N, B => O, ..., M => Z, N => A`

When encoding a string, we replace uppercase characters with their uppercase mirror, lowercase character with their lowercase mirror, and leave all other characters untouched.

To help us with the encoding process, we create a lookup table like this:

<table>
	<thead>
		<tr>
			<th>A</th>
			<th>B</th>
			<th>C</th>
			<th>D</th>
			<th>E</th>
			<th>F</th>
			<th>G</th>
			<th>H</th>
			<th>I</th>
			<th>J</th>
			<th>K</th>
			<th>L</th>
			<th>M</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>N</td>
			<td>O</td>
			<td>P</td>
			<td>Q</td>
			<td>R</td>
			<td>S</td>
			<td>T</td>
			<td>U</td>
			<td>V</td>
			<td>W</td>
			<td>X</td>
			<td>Y</td>
			<td>Z</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<td>N</td>
			<td>O</td>
			<td>P</td>
			<td>Q</td>
			<td>R</td>
			<td>S</td>
			<td>T</td>
			<td>U</td>
			<td>V</td>
			<td>W</td>
			<td>X</td>
			<td>Y</td>
			<td>Z</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>A</th>
			<th>B</th>
			<th>C</th>
			<th>D</th>
			<th>E</th>
			<th>F</th>
			<th>G</th>
			<th>H</th>
			<th>I</th>
			<th>J</th>
			<th>K</th>
			<th>L</th>
			<th>M</th>
		</tr>
	</tbody>
</table>
Example:

Let's encode the string `Hello World!`. We need to lookup each character in our table, and then write down its image.

```
H => U
e => r
l => y
...
_ => _ # space maps to space.
W => J
...
! => !
```

Our final encoded string is `Urryb Jbeyq!`.

## Decoding

As you might have noticed from the lookup table, `ROT13(ROT13(c)) = c`. This cipher is therefore reversible, and to decode, we just need to go through the whole encoding process once more.

Example:

Our encoded output was `Urryb Jbeyq!`. We need to lookup each character in our table, and then write down its image.

```
U => H
r => e
y => l
...
_ => _ # space maps to space.
J => W
...
! => !
```

Our final decoded string is `Hello World!`.


# What you need to do:
**Using this explanation, recreate a function that encrypts a word such as `Hello`**

## Requirements:
- Your program should be case insensitive, and return only upper cased letters.
- Your program should use this template:

```javascript
String.prototype.encrypt = function() {
    // to get the String you need to encrypt, use 'this'
}
```
