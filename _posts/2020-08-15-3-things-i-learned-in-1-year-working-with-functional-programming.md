---
layout: post
title: "One year working with functional programming: what have I learned?"
tags:
  - functional-programming
  - elixir
  - software-engineering
hero: "https://i.imgur.com/ddkHpzj.jpg"
overlay: red
published: true
---

Just like the great majority of programming-related courses, I was introduced to programming with the object-oriented paradigm (OOP). Even though many languages are multi-paradigm, like Python, C++, JavaScript and Ruby, we still have OOP as the norm.

Last year I was challenged to work with an Elixir stack at a new job. It was a new experience for me as I had never worked with functional programming before. Learning a new programming paradigm was one of the biggest steps in my career, and I'm about to share my learnings from the last year in the next few lines.

<!–-break-–>

## 1. Learning Functional Programming Requires a Reboot
As an object-oriented programmer, when learning a new language, you already know the concepts, and you might just have to learn the syntax, how to declare variables, classes, public and private methods, and maybe some language-specific features.

You know how to drive a car. It's not that hard to drive a different kind of car. But functional programming is not just a different car, but a boat. You can't use all your car driving experience to sail. Some things apply, others don't.

![A boat's wheel](https://dev-to-uploads.s3.amazonaws.com/i/b5dr6nbnz4o7oxujbsry.png)

If you want to learn functional programming, you have to learn it all again. No shared state, purity, separation of concerns, functions being the primary manipulation unit.

In my first month on functional programming, I was frustrated because I was trying to solve the day-to-day problems the OOP way, or... the only way I knew.

Rebooting is the key.

## 2. Side Effects Are The Root of All Evil
Mutability is necessary. There's no point in making software that doesn't change anything. The thing is how you handle these changes.

![Butterfly image](https://dev-to-uploads.s3.amazonaws.com/i/njde17a3g8os7ma4nyyv.jpg)

The more state you have, the more complex is to maintain, understand and debug the software. Although it's impossible to make a completely pure program (purity in FP means the lack of side effects) that is useful, you can isolate the impure part of your software (database, external API calls, IO, etc).

> Mutation is a source of bugs. Therefore avoiding mutation will reduce the number of bugs that you introduce. Whenever you change a variable, there is always the possibility that you have broken some other piece of code that relied upon it. Avoiding mutation makes certain types of bugs impossible to introduce. - Tom Dalling [(source)](https://www.rubypigeon.com/posts/avoid-mutation-functional-style-in-ruby/)

By not having a shared state, you completely isolate the memory, which makes concurrent software easier to develop and to maintain.

> In the functional paradigm, due to immutability as a default construct, concurrent programming guarantees deterministic execution, even in the case of a shared state. On the other hand, imperative and OOP use mutable states, which are hard to manage in a multithreaded environment, leading to non-deterministic programs. - Manning [(source)](https://freecontent.manning.com/the-foundations-of-functional-concurrency/)

Not only avoiding and isolating side effects but also mutability in your code. You don't need a functional programming language to apply functional concepts to your code. Check this Ruby snippet:

```ruby
# Functional-style Ruby
def calculate_clothing_total(items)
  items
    .select(&:clothing?)
    .map(&:amount)
    .reduce(0, :+)
end


# Non-functional Ruby
def calculate_clothing_total(items)
  total = 0
  expenses.each do |e|
    total += e.amount if e.clothing?
  end
  total
end
```

This simple example only mutates the `total` variable, but it can be worse. In Ruby, pretend values are immutable and use non-destructive methods. Try not to reassign method arguments, as this can lead to unexpected behaviors. Instead, return a new value.

If you're a Ruby developer, I'd recommend reading this awesome article from RubyPigeon: [Avoid Mutation – Functional Style In Ruby](https://www.rubypigeon.com/posts/avoid-mutation-functional-style-in-ruby/).

## 3. Separation of Concerns = ❤️
![Containers separated by color](https://dev-to-uploads.s3.amazonaws.com/i/bxsv6o7kn9tsuch3svt2.jpg)

Some say FP software is easier to debug, have fewer bugs, and it's easier to maintain once you properly learn functional programming. That is true because separating functionality is almost enforced in some FP languages. You don't want impure code to be with pure code implicitly.

That is a concept that you can bring to your non-functional software as well. As everything is well isolated, it's easier to test, refactor and debug. Even the database changes are pure, when you separate the persistence and the schema changes, as Ecto does with changesets, a pure approach for working with data changes.

```elixir
attributes = %{amount_due: 3000, due_date: "2019-04-30", scheduled_send_date: "2019-04-25", closed_at: "2019-05-01"}
changeset = Invoice.changeset(%Invoice{}, attributes)
#=> #Ecto.Changeset<
#     action: nil,
#     changes: %{amount_due: 3000, due_date: ~D[2019-04-30], scheduled_send_date: ~D[2019-04-25]},
#     errors: [],
#     data: #Invoice<>,
#     valid?: true
#   >

changeset.changes
#=> %{amount_due: 3000, due_date: ~D[2019-04-30], scheduled_send_date: ~D[2019-04-25]}
```

---

If you want to learn functional programming, I'd suggest you cover the paradigm basics before jumping into Elixir, which is my FP language of choice for general software, like APIs and stuff.

If you already know the basics, [start here with Elixir](https://elixir-lang.org/getting-started/introduction.html), and rock on! 🚀

Last but not least, if you don't plan using a functional programming language, I'd suggest you apply minimal concepts of isolation, immutability and other functional perks to your day-to-day code. There are plenty of libraries that can help you with this, like [Immutable.js for JavaScript](https://immutable-js.github.io/immutable-js/).

---

<span>Photo by <a href="https://unsplash.com/@alexkondratiev?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Alex Kondratiev</a> on <a href="https://unsplash.com/s/photos/chemical?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
