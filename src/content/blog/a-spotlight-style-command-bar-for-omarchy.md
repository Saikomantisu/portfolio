---
title: "I made a Spotlight style command bar for Omarchy"
description: "Open apps, switch windows, convert currencies and quit processes from one input box."
date: 2026-11-05
---

Omarchy already has a calculator, an emoji picker and an agent picker. They all have their own shortcuts. I wanted one key for those, and then I wanted currency conversion and window switching in there too. So I made [Command Bar](https://github.com/Saikomantisu/omarchy-commandbar).

It's a Spotlight style launcher. Super + Period opens it, and results show up as you type. Press Enter to use the selected result. Omarchy's menu stays on Super + Space.

![Command Bar demonstrating file search, conversions, window switching and other commands](/images/blog/omarchy-commandbar/demo.gif)

You can install it with this. Everything it needs comes with Omarchy.

```bash
omarchy plugin add https://github.com/Saikomantisu/omarchy-commandbar --enable
```

Finding an app is easy enough. Finding the window I already had open is what I wanted to make easier. Type `firefox` and you get the app and its open windows. With `w github`, you get windows with GitHub in the title, whichever app they belong to. A bare `w ` lists everything, most recent first.

For currency, you can type `100 usd to eur`, or just `$50` to convert to your home currency. Rates refresh at most once a day. Units work offline. `5 km to mi` gives you `3.1069 mi`.

I don't remember all the queries. Type `?` to see what's available, including calculations, dates and time zones.

![Command Bar showing its help topics](/images/blog/omarchy-commandbar/preview.png)

The help examples show their answers, and pressing Enter on one tries it in the bar.

Emoji search types the result into the app you were using before opening the bar. Search `:fire`, pick the emoji and press Enter.

If Brave is eating your RAM, `kill brave` lists its processes with memory and CPU use. You can quit one or all the matches. It only lists your own processes, and nothing happens until you press Enter.

You can set up your own keywords in `~/.config/omarchy/extensions/commandbar.json` to open URLs or run commands. The defaults include `g` for Google, `yt` for YouTube and `gh` for GitHub. Changes apply when you save.

If you want something that's missing, open an issue or send a PR. The [repo](https://github.com/Saikomantisu/omarchy-commandbar) has a [contributing guide](https://github.com/Saikomantisu/omarchy-commandbar/blob/main/CONTRIBUTING.md). It's on the [Omarchy plugin directory](https://plugins.omarchy.org/plugin.html?id=io.github.saikomantisu.commandbar) too.

To remove it and clear its saved data and settings:

```bash
omarchy plugin remove io.github.saikomantisu.commandbar
rm -rf ~/.cache/omarchy-commandbar ~/.config/omarchy/extensions/commandbar.json
```
