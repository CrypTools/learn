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
			<td>
				<g-emoji class="g-emoji" alias="smile" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png">😄</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="smiley" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png">😃</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="grinning" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f600.png">😀</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="blush" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f60a.png">😊</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="relaxed" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/263a.png">☺️</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="wink" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f609.png">😉</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="heart_eyes" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f60d.png">😍</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="kissing_heart" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f618.png">😘</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="kissing_closed_eyes" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f61a.png">😚</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="kissing" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f617.png">😗</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="kissing_smiling_eyes" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f619.png">😙</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="stuck_out_tongue_winking_eye" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f61c.png">😜</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="stuck_out_tongue_closed_eyes" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f61d.png">😝</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="stuck_out_tongue" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f61b.png">😛</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="flushed" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f633.png">😳</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="grin" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f601.png">😁</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="pensive" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f614.png">😔</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="relieved" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f60c.png">😌</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="unamused" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f612.png">😒</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="disappointed" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f61e.png">😞</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="persevere" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f623.png">😣</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="cry" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f622.png">😢</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="joy" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f602.png">😂</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="sob" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f62d.png">😭</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="sunglasses" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f60e.png">😎</g-emoji>
			</td>
			<td>
				<g-emoji class="g-emoji" alias="smiling_imp" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f608.png">😈</g-emoji>
			</td>
		</tr>
	</tbody>
</table>

# What you need to do

**Using this explanation, recreate a function that encrypts a word such as `Hello` using any key**

## Requirements:

- You're program should be case insensitive.
- You're program should use this template:

```javascript
String.prototype.encrypt = function() {
    // to get the String you need to encrypt, use 'this'
}
```
