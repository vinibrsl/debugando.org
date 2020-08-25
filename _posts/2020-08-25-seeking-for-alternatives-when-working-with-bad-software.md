---
layout: post
title: "Seeking for alternatives when working with bad software"
tags:
  - day-to-day
  - soft-skills
hero: "https://i.imgur.com/bvqlimB.jpg"
overlay: red
published: true
---

Inevitably, we'll someday come across legacy software, inconsistent databases, or integration modules that simply don't work. It might sound wise to fix this software, especially if they're crucial to the business. The problem that refactoring costs development and validation time, and the business does not always have this time to invest, but at the same time needs the fix. How can we both deliver the business requirements in time and still not break everything?

<!–-break-–>

In the past weeks, I've been dealing with integration problems that led to an inconsistent database. This database is queried weekly to pay our drivers (I work for a delivery orchestration company). With the discrepant dataset, the output of the report was also inaccurate. I couldn't fix all the integration problems we had to the next weekly payout, so I tried a different approach.

I had to pause my iterative way of working. That works for most of the cases and still works for my team. But we have to be questioners to our modus operandi and not just go with the flow. Some problems will need a special take. I had to break the loop of:

1. Finding the bug
2. Fixing the bug
3. Updating database retroactive data with the fixed bug
4. Creating another bug by accident
5. Loop

To gain time, what I did was to create a script that connects to all databases and all external services to generate this report. Instead of fixing the database inconsistency, the script fetched the data it needed to the report from all related services and processes it all in memory. It's not that processing data in memory is a bad practice, it just depends on the problem you have. Question your modus operandi.

The script, written in Elixir, is querying 3 different databases, performing joins in memory, grouping in memory, and getting missing data from 2 external services via HTTP. All of this running concurrently using Elixir streams with [`Task.async_stream/3`](https://hexdocs.pm/elixir/Task.html#async_stream/3), outputting a CSV file. I ran it first on my MacBook, but putting it on GKE (Kubernetes) made it even faster, as most of our infrastructure is on Google Cloud Platform.

The weekly report is solved, but still, we have integration and database inconsistency issues. That's planned to be solved in our iterative workflow, where it should be. Use the right tools, at the right time, in the right process. Change if needed. Loop.
