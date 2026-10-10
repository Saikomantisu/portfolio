---
title: "Yeet Your AI Slop Onto the Internet"
description: A skill that puts your vibecoded site live on Netlify in seconds.
date: 2026-10-10
---

#### Background

Making a website with AI is easy now. You can literally make one in a few minutes. I've made AI slop for every random idea I've had. Some of it is useful, and some of it belongs only on my PC.

Sometimes I just want a site live in seconds. One time I asked Claude for a checklist to go through before buying a used laptop, then turned it into a website. A friend was also looking for a used laptop, so I wanted to share it with them. That's how [yeet](https://github.com/Saikomantisu/skills/tree/main/yeet) started. I'm pretty sure similar skills already exist, but I like making my own because that's how I learn.

It sat on my todo list for a while, and I only recently got the time to build it.

#### What it does

You could drag the folder into Netlify Drop, but I don't want to leave my agent, and I don't fully trust it to pick the right folder.

- **Silly names.** If you don't pick a name, it makes up an alliterative one like `hungover-hyena` or `grumpy-goose`.
- **It won't leak your secrets.** If the folder has a `package.json`, `.env` files, keys, certificates or databases, it uploads nothing and lists what it found. An agent yeeting the wrong folder is the one mistake you can't take back.
- **Single-page apps supported.** It spots them and sends unknown paths to `index.html`, so refreshing `/about` doesn't 404.
- **Cleanup.** Ask your agent to list your sites or delete the ones you're done with. It shows you the names and waits for a yes before deleting anything.

#### Prerequisites

Before you do anything, you need:
- [Python 3](https://www.python.org/)
- [Netlify account](https://www.netlify.com/)

#### Setup

1. Install the skill

```bash
npx skills add Saikomantisu/skills --skill yeet -g
```

2. Create a Netlify token
   - Go to your Netlify account, open User settings, and under Applications create a [personal access token](https://app.netlify.com/user/applications#personal-access-tokens).

3. Save the token
   - Paste it into `~/.config/yeet/token`, or set it as the `NETLIFY_AUTH_TOKEN` environment variable.

#### Yeet it

Open your agent in the folder with your site and tell it to yeet it. If the project needs building, it builds it first. Then it uploads the output, checks that the URL loads, and gives you a link like [bored-bat.netlify.app](https://bored-bat.netlify.app). I yeeted that one while writing this, and all it does is tell you whether to go to bed. Spoiler, you never get a straight yes.

Your AI slop is now on the internet. To change something, tell it to yeet again with the same name. It asks before replacing the old site.
