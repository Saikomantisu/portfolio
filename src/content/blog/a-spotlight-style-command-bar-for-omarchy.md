---
title: "I made a Spotlight-style command bar for Omarchy"
description: "Open apps, switch windows, convert currencies and quit processes from one input box."
date: 2026-11-05
---

I wanted a quicker way to do the small things I keep interrupting my work for, like converting a price or finding a window I've lost. So I built [Command Bar](https://github.com/Saikomantisu/omarchy-commandbar), a Spotlight-style plugin for Omarchy.

Press Super + Period, type what you need, and hit Enter. Results show up as you type.

![Command Bar demonstrating file search, conversions, window switching and other commands](/images/blog/omarchy-commandbar/demo.gif)

#### One input box

Omarchy already has a calculator, an emoji picker and an agent picker, each on its own key. I'd rather remember one shortcut and type what I need. Omarchy's menu still opens on Super + Space.

The bar works out which results to show from your query.

- `12*8 + 15%`, `sqrt(2)`, `15% of 200` and `5!` go to the calculator.
- `100 usd to eur`, `$50` or `usd jpy` convert currency.
- `time in tokyo` shows the local time, and `3pm cet to pst` converts between time zones.
- `days until dec 25` counts the days, and `next friday` finds the date.
- `5 km to mi`, `72f` and `2 cups in ml` convert units, even offline.
- `:fire` searches emoji. Pressing Enter types the emoji into the app you were just using. Symbols work too, with queries like `:arrow` and `:degree`.

Currency rates come from open.er-api.com and refresh at most once a day.

#### Apps, windows and processes

Type `firefox` or `term` to find an app, or `brave new window` to find that action. Command Bar opens apps through `uwsm-app` and `gtk-launch`, just like Omarchy's own launcher.

If an app is already running, its open windows appear too. You can search by window title with `w github`, or type `w ` to list every open window, most recent first.

`kill brave` lists your Brave processes with their memory and CPU use. The top row quits all the matches. Pick a row below it to quit just one process. The list only includes your own processes, and nothing happens until you press Enter.

#### Files and developer tools

Type `.pdf` to search file names or `~/Downloads/` to browse that folder. Press Tab to go into a selected folder. File search uses `fd` and reads file names, not their contents.

Type `example.com` or `localhost:3000` and press Enter to open it in your browser. You can also generate a UUID with `uuid`, hash text with `sha256 hello` or encode it with `base64 hello`.

`ai` sends a prompt to your Omarchy agent with auto-approve enabled. The agent can run commands without asking, and the result row says so before you press Enter.

#### Help you can try

I don't remember all these queries. Typing `?` brings up a help topic for each feature.

![Command Bar showing its built-in help topics](/images/blog/omarchy-commandbar/preview.png)

Each topic has examples with answers, so `5 km to mi` shows `→ 3.1069 mi`. Press Enter on an example to try it. Search help with `?money`, or type part of a feature's name into the bar. `emo` finds emoji search and `curr` finds currency conversion.

#### Your own keyword commands

Keywords are prefixes that open a URL or run a command. The defaults include `g` for Google, `yt` for YouTube and `gh` for GitHub.

Set your own keywords, hotkey, home currency and time zone in `~/.config/omarchy/extensions/commandbar.json`.

```json
{
  "hotkey": "SUPER + PERIOD",
  "currency": { "home": "EUR", "favorites": ["USD", "GBP"] },
  "time": { "home": "Europe/Berlin", "clock24": true },
  "commands": [
    { "keyword": "ddg", "title": "DuckDuckGo", "open": "https://duckduckgo.com/?q={q}" },
    { "keyword": "say", "title": "Notify", "run": "notify-send {q}" }
  ]
}
```

`{q}` is whatever you type after the keyword. In `open` commands it gets URL-encoded. In `run` commands it gets shell-quoted, so your query can't change the command itself. Changes apply when you save the file.

#### What it touches

I'd want to know this before installing a plugin, so here's what Command Bar stores and changes.

- It saves exchange rates, your last query and app usage counts in `~/.cache/omarchy-commandbar/`. When app matches have the same score, the ones you open more often come first.
- It doesn't edit your Hyprland or Omarchy config files. It registers its hotkey in the running Hyprland and removes it when you disable or remove the plugin.
- If another action already uses the hotkey, it leaves that binding alone and sends a notification.
- The only background network request fetches exchange rates. Running a web search or an AI prompt sends that query to the service you've chosen.

#### Install it

Everything it depends on ships with Omarchy. Install the plugin with:

```bash
omarchy plugin add https://github.com/Saikomantisu/omarchy-commandbar --enable
```

Then press Super + Period. If you want to remove it and clear its saved data and settings:

```bash
omarchy plugin remove io.github.saikomantisu.commandbar
rm -rf ~/.cache/omarchy-commandbar ~/.config/omarchy/extensions/commandbar.json
```

#### Add a feature

Each feature is a JavaScript file in `providers/`. A provider has an id, a name, help examples and a `match` function. That function takes the query and returns results, or an empty list if the query isn't for it. Register it in `providers/index.js` and add its id to the config.

Run the provider tests without opening Command Bar:

```bash
node tests/run.js
```

The [source](https://github.com/Saikomantisu/omarchy-commandbar) and [contributing guide](https://github.com/Saikomantisu/omarchy-commandbar/blob/main/CONTRIBUTING.md) are on GitHub. If there's a feature you want, open an issue or send a PR. Command Bar is also on the [Omarchy plugin directory](https://plugins.omarchy.org/plugin.html?id=io.github.saikomantisu.commandbar).
