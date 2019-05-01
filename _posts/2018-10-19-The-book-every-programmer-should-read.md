---
layout: post
title: The Book Every Programmer Should Read
---

Writing code that any programmer who read can understand is a must-have skill for software developers. The fact is: only 20% of the programmers have the ability.

> “Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” — Martin Fowler

When I started caring about code readability I noticed that my code started to be:

* easier to maintain
* easier to refactor
* reusable
* consistent

# The book

![](https://thepracticaldev.s3.amazonaws.com/i/vgzbh2qt0bs7rbp1kfak.jpeg)

Robert "Uncle Bob" Martin's "Clean Code: A Handbook of Agile Software Craftsmanship" is the clean coder programmer bible. This book talks about code, behaviour, automated tests and so on.

# Let's get practical! Writing meaningful names.
One of Clean Code chapters talks about meaningful naming. In this story, you are going to be the code reader. Take a look at this function:

```ruby
def calc(n1, n2)
  return n1 / n2
end
```

Do you think `calc` is a good name for this function? Uncle Bob would say: no! Why?

1. `calc` is an abbreviation: don't!
2. Functions do something. It must be named with a verb.
3. Even I rename `calc` to `calculate`, it still be vague. We need to improve the semantics by giving the function name more meaning.

This function divides two numbers. `divide` is a good name for it.

```ruby
def divide(n1, n2)
  return n1 / n2
end

result = divide(1, 2)
```

We still have problems with it. "n1" and "n2", the parameters, are not semantic. What if we call them "dividend" and "divisor"? The same thing to the "result" variable. It should be called something like "quotient".

```ruby
def divide(dividend, divisor)
  return dividend / divisor
end

quotient = divide(1, 2)
```

Much more semantic!

If you are not convinced to read this book yet, take a look in this picture and buy this must-read book!

![](https://thepracticaldev.s3.amazonaws.com/i/ba8o8e3ozciunrsdlj88.png)

