## Introduction
This is the first challenge of this platform. It's pretty easy, but don't worry, it will get harder in
the next challenges.

### Tutorial:
- On this section, you'll always see the 'course' and the challenge that you need to do
- On the upper right corner, there is the code editor. This is where you'll write your answer (in JavaScript of course).
- On the lower right corner, you'll see the console. This is where you'll know if you failed or not.
> **ProTips 💡:**
- Press `Ctrl+Enter` (or `Cmd + Enter` on macOS) to execute your code right from the editor.
- Press `Shift+Enter` to enter full screen mode. (Press `Esc` to exit)

# Emoji cipher

The Emoji cipher is a very basic cipher.

Basically, we convert letters to emojis to encode a message, and we do the opposite operation to decode this encrypted message.

Here is the table:
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
			<td>😄</td>
			<td>😃</td>
			<td>😀</td>
			<td>😊</td>
			<td>😅</td>
			<td>😉</td>
			<td>😍</td>
			<td>😘</td>
			<td>😚</td>
			<td>😗</td>
			<td>😙</td>
			<td>😜</td>
			<td>😝</td>
			<td>😛</td>
			<td>😳</td>
			<td>😁</td>
			<td>😔</td>
			<td>😌</td>
			<td>😒</td>
			<td>😞</td>
			<td>😣</td>
			<td>😢</td>
			<td>😂</td>
			<td>😭</td>
			<td>😎</td>
			<td>😈</td>
		</tr>
	</tbody>
</table>

# What you need to do

**Using this explanation, recreate a function that encrypts a word such as `Hello` using any key**

## Requirements:

- Your program should be case insensitive.
- Your program should use this template:

```javascript
String.prototype.encrypt = function() {
    // to get the String you need to encrypt, use 'this'
}
```
