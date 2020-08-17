---
layout: post
title: "The state of developing on Windows 2019: Impressive!"
tags:
  - windows
  - tooling
hero: "https://cdn-images-1.medium.com/max/1600/0*QkmT8yHsbxcYIwdp.png"
overlay: red
published: true
---

For many years Windows has been considered "bad for programming" if you don't develop in a Microsoft stack, like .NET. The main alternatives are Linux and macOS. The thing is not every developer can adapt easily to Linux, or can afford a Mac. Sometimes you just want all your software to run without a dual boot, VMs or compatibility layers (like Wine for Linux). And that's where Windows enters in.

<!–-break-–>

![](https://cdn-images-1.medium.com/max/1600/0*QkmT8yHsbxcYIwdp.png)

Windows has lots of hardware drives that can be easily found, has countless software made for it, and of course, games. But still, some say it is really bad to develop on Windows for a couple of reasons:

- There is no reliable *package manager* (like APT or Homebrew), which makes harder to install your programming language of choice, for instance.

- The native *command line shell* is not as good as the good old Unix shell.

To maintain the best of both worlds - Unix and Windows - people usually use Windows with a Linux VM, which can cost lots of CPU and memory. How to keep the best of both worlds without virtual machines or dual boot?

# The solution: Windows Subsystem for Linux (WSL)

![](https://cdn-images-1.medium.com/max/1500/0*YZSaxzVuX91kG-mk.png)

The Windows Subsystem for Linux is a compatibility layer for running Linux binaries natively on Windows. In other words, you can run Linux distributions on Windows without virtual machines or dual boot. That means you can easily install packages (such as rbenv, node, git), run a web server inside WSL and still write code in your Windows environment with your code editor.

This Windows 10 feature is still evolving, and being improved each update. Of course, it doesn't replace a full Linux setup, but it fulfills most of the developers need.

I've been mainly using Windows Subsystem for Linux (WSL) Debian distribution to develop Ruby on Rails and NodeJS applications. I code on Visual Studio Code inside Windows and run the server on WSL. If I wanted to, I could even run my editor inside the Linux environment.

![](https://cdn-images-1.medium.com/max/1600/0*NbZFWltqSEbPKyHq.png)

# WSL Isn't Perfect (Yet)

Even though WSL is good, it is not perfect yet. There are some performance issues, especially with I/O. To solve these problems, you'll probably have to spend some time searching and tweaking settings for your use. Once you have configured your environment, you should have a *smooth, convenient and stable hybrid (Windows + Linux) development environment*.

As I mentioned before, WSL is getting better and better each Windows update, and I/O has been being a major WSL concern, shown by the last patches.

# Windows Isn't Bad Anymore

Yes, Windows was bad for programming before. But that is definitely false in 2019. Microsoft has been making up the lost ground for non-Windows developers.

If you want to give WSL a try, follow [this Microsoft guide](https://docs.microsoft.com/en-us/windows/wsl/install-win10). It should be up and running in a couple of minutes. To obtain the maximum performance, disable Windows Defender while using it.
