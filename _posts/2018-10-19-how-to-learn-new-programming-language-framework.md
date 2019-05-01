---
layout: post
title: How To Learn a New Programming Language or Framework
---

New programming languages are born every day. Dart, Go, Kotlin, Elixir and more! Beating the learning curve can be difficult, but there's some tips that will help you to get through.

There are some steps you want to take to accelerate the learning process and increase your fluency in the programming language or framework you are learning.

# Master the language. Then learn frameworks.
Some people tend to learn frameworks, like Ruby on Rails, without getting to know the language, in this case, Ruby. That's a huge problem, specially when talking about Rails, that plays with Ruby as a DSL (domain-specific language).

# Solve coding challenges.
There are a lot of websites like LeetCode, HackerRank and Project Euler that can help you to reach fluency. You'll learn more about the syntax, libraries and logic. That's a great way to prepare yourself to an interview too.

# Use StackOverflow and Code Review as much as you want.
When you start solving coding challenges, you'll find problems. To solve them, you can use StackOverflow, a website that needs no introduction.

The ace in the hole is on Code Review, a StackExchange community, the same network from StackOverflow. The whole point about Code Review is to get a review of your code from experts in the language you are learning. Take a look at the [beginners section](https://codereview.stackexchange.com/questions/tagged/beginner) and join this awesome community!

Recently I asked for a code review there, [click here if you want to see it](https://codereview.stackexchange.com/questions/180567/checking-for-balanced-brackets-in-python).

# Read a lot of code.
GitHub is essential to beat the learning curve. There you'll find production code in the language you are learning. If you are confident to contribute, that's even better.

# Install a linting tool.
Linters are code-analyzer tools that flags bugs, idiomatic offenses, stylistic errors and more. A linting tool will flag the error for you to fix, and that's when you learn. For Ruby, I use RuboCop as a linter.

# Code idiomatically.
When I was learning Python, I transferred my C# knowledge to Python. That’s a great way to learn a new programming language, but it’s not enough to reach fluency, because you can’t learn the idiomatic way of programming in that language.

To illustrate, take a look at this Python code:

```python
def matrix_of_floats(matrix_of_anything):
    n = len(matrix_of_anything)
    n_i = len(matrix_of_anything[0])
    new_matrix_of_floats = []
    for i in xrange(0, n):
        row = []
        for j in xrange(0, n_i):
            row.append(float(matrix_of_anything[i][j]))
        new_matrix_of_floats.append(row)
    return new_matrix_of_floats
```

versus the Pythonic way (idiomatic Python):

```python
def matrix_of_floats(matrix_of_anything):
    return [[float(a_ij) for a_ij in a_i]
            for a_i in matrix_of_anything]
```

To learn how to code idiomatically, you have to read a lot of code written by the pros.

# Build something!
This one is the best. The main purpose of learning a programming language is to build something with it. When I was learning Ruby, I used Rails framework to build a blog, a todo app, a Wikipedia clone and a Rotten Tomatoes like website.

Building something will evolve every aspect of your learning.

# Don't give up.
Beating learning curves can be really hard. You need time and focus to get there. Don't give up because you may be closer than you think. If you are stuck, ask for help. There's a lot of resources out there.


# Jedi tip: `while(true) => study()`
I know a programmer studies C# for more than 20 years. He still discovering new things about C# and .NET every day. This guy is [Antonio Maniero, the most influent member of StackOverflow in Portuguese](https://pt.stackoverflow.com/users/101/maniero).

The fact is: we'll never learn everything about a language, and that's what will keep us learning more and more every day.

You can be good at something, become a reference in it, but there will always be more to be learned.

![](https://thepracticaldev.s3.amazonaws.com/i/pmtw0yce1znjsksxkwmc.jpeg)

May the force be with you! Leave a comment sharing what else helps you to learn a new programming language.
