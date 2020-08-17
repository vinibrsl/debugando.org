---
layout: post
title: "The best RSpec extension for Visual Studio Code"
tags:
  - ruby
  - tooling
hero: "https://github.com/connorshea/vscode-ruby-test-adapter/raw/master/img/screenshot.png"
overlay: blue
published: true
---

Some months ago I used VSCode to write Go code and specs. The default Go extension for VSCode ships with a neat text explorer feature. Unfortunately, at that time, I searched for something similar for Ruby, but I couldn't find anything.

<!–-break-–>

Many thanks to [Connor Shea](https://github.com/connorshea), VSCode now has a similar extension working with RSpec and Minitest.

![](https://github.com/connorshea/vscode-ruby-test-adapter/raw/master/img/screenshot.png)

It's built on top of the [Test Explorer UI extension](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer), by [Holger Benl](https://github.com/hbenl). This extension provides an interface for running and visualizing your test suite directly from the editor. There are plenty of adapters for JavaScript, C, C++, Python and now Ruby.

I have been using the Ruby adapter for some time now, and it's really improving my workflow. For me, it required a little bit of tweaking to make it work, but it was rewarding.

---

You can install this extension [here](https://marketplace.visualstudio.com/items?itemName=connorshea.vscode-ruby-test-adapter). And to save you some time, here's my configuration for RSpec:

```
{
    "rubyTestExplorer.logpanel": true,
    "rubyTestExplorer.testFramework": "rspec",
}
```
