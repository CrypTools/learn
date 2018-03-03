# HashShift

> ⚠️ We strongly recommend you to know how to program in at least one programming language

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

# What you need to do?
**Using this explanation, determine what would be the second number outputted using `seed = 12` by the HashShift PRNG**

## Requirements
- Your answer is composed of the `10` first digits.
- We write numbers in the english way, like `3.1415926535` or `0.57721566`.
