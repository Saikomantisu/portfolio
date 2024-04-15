+++
title = 'Navigation Bar & Bottom Navigation Bar in Flutter'
date = 2024-04-15T04:45:08+05:30
cover = "https://i.imgur.com/Io1ifvv.jpeg"
categories = ["Mobile Development"]
tags  = ["Flutter", "Navigation Bar"]
draft = true
+++

### What is the difference?
According to the [flutter docs](https://api.flutter.dev/flutter/material/BottomNavigationBar-class.html) `NavigationBar` is an updated version of `BottomNavigationBar`. 

Whether to use `NavigationBar` or `BottomNavigationBar` mainly depnds on the requirement of your app, But there are some pros and cons to both of them.

Before we start, Just wanted to clarify that I'm still leaning about flutter as I'm writing this blog.

### Getting Started

First, you have to deside what is the purpose of your navigation bar, `NavigaionBar` provieds access to destinations and recommended to use on larger screens whereas `BottomNavigationBar` can contain both destinations and actions and is not recommended to use on larger screens.

After that, the implementation of both of the compornents are very stright forward and simple.