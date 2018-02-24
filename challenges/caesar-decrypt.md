# Caesar Cipher

## History and usage

The _Caesar Cipher_ was named after Julius Caesar (100 B.C. – 44 B.C). He would use the cipher for secret communication (protect messages of military significance). The Caesar Cipher is a **substitution cipher**. Originally, Julius Caesar would use a shift of three to encrypt/decrypt a message. The Caesar Cipher encrypts a message using an affine function : f(x) = 1x + b.

## Detailed Explanations : How it works?

1. Firstly, each character of the initial text (message to encrypt) is converted in a number from 0 to 25, corresponding to its position in the Latin alphabet which contains 26 letters --> (a = 0, b = 1 ... z = 25 ).

2. Then, each number obtained is transformed by an affine function (f(x) = 1x + b). "x" is representing the number while "b" is defined during the encryption. "b" is the key used to decrypt the final message.

3. If we take all the images and put them in a list, we obtain n numbers corresponding to n characters of the initial text. The next step consists in finding the values of modulo 26 of each number. (**Modulo means remainder**)

> Example : Modulo 4 of 19 is **3** because `19 = 4 * 4 + 3` In the other hand, modulo 26 of 26 is **0** because `26 = 26 * 1 + 0`

1. Therefore, we obtain a new list with n element, each between 0 and 25 both included. All these numbers are converted in letters of the Latin Alphabet using the tables below.

2. We finally create the final message by putting all the letters side by side.

Steps 1 and 4 can be done with these tables :

<table class="table table-striped table-bordered">
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
			<th>N</th>
			<th>O</th>
			<th>P</th>
			<th>Q</th>
			<th>R</th>
			<th>S</th>
			<th>T</th>
			<th>U</th>
			<th>V</th>
			<th>W</th>
			<th>X</th>
			<th>Y</th>
			<th>Z</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>0</td>
			<td>1</td>
			<td>2</td>
			<td>3</td>
			<td>4</td>
			<td>5</td>
			<td>6</td>
			<td>7</td>
			<td>8</td>
			<td>9</td>
			<td>10</td>
			<td>11</td>
			<td>12</td>
			<td>13</td>
			<td>14</td>
			<td>15</td>
			<td>16</td>
			<td>17</td>
			<td>18</td>
			<td>19</td>
			<td>20</td>
			<td>21</td>
			<td>22</td>
			<td>23</td>
			<td>24</td>
			<td>25</td>
		</tr>
	</tbody>
</table>

# What you need to do:

**Using this explanation, recreate a function that decrypts a word previously encrypted such as `LIPPS` using any key**

## Requirements:

- You're program should be case insensitive, and return only upper cased letters.
- You're program should use this template:

```javascript
String.prototype.decrypt = function(key) {
    // to get the String you need to encrypt, use 'this'
}
```
