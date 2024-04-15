+++
title = 'Navigation Bar & Bottom Navigation Bar in Flutter'
date = 2024-04-15T04:45:08+05:30
cover = "https://i.imgur.com/Io1ifvv.jpeg"
categories = ["Mobile Development"]
tags  = ["Flutter", "Navigation Bar"]
draft = false
+++

### What is the difference?
According to the [flutter docs](https://api.flutter.dev/flutter/material/BottomNavigationBar-class.html) `NavigationBar` is an updated version of `BottomNavigationBar`. 

Whether to use `NavigationBar` or `BottomNavigationBar` mainly depnds on the requirement of your app, Both `BottomNavigationBar` and `NavigationBar` serve as means of navigation within an app, but they have different implementations and use cases

Before we start, Just wanted to clarify that I'm still leaning about flutter as I'm writing this blog.

### Getting Started

First, you have to deside what is the purpose of your navigation bar, `NavigaionBar` provieds access to destinations and recommended to use on larger screens whereas `BottomNavigationBar` can contain both destinations and actions and is not recommended to use on larger screens.

After that, the implementation of both of the compornents are very stright forward and simple.

### Implementation of `BottomNavigationBar`

This example shows a `BottomNavigationBar` as it is used within a Scaffold widget. The `BottomNavigationBar` has three `BottomNavigationBarItem` widgets, which means it defaults to `BottomNavigationBarType`.fixed, and the `currentIndex` is set to index 0. The selected item is amber. The `_onItemTapped` function changes the selected item's index and displays a corresponding message in the center of the Scaffold.

```dart
class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _selectedIndex = 0;

  static const List<Widget> _Pages = [
    Text('Home'),
    Text('News'),
    Text('Settings'),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: _Pages.elementAt(_selectedIndex),
      ),

      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home'
          ),

          BottomNavigationBarItem(
            icon: Icon(Icons.newspaper),
            label: 'News'
          ),

          BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            label: 'Settings'
          ),
        ],

        currentIndex: _selectedIndex,
        selectedItemColor: Colors.amber[800],
        onTap: _onItemTapped,
      ),
    );
  }
}
```

![Bottom Navigation Bar Example](https://i.imgur.com/3wa8gGk.png)

### Implementation of `NavigationBar`

This example shows a `NavigationBar` as it is used within a `Scaffold` widget. The `NavigationBar` has three `NavigationDestination` widgets and the initial `_selectedIndex` is set to index 0. The onDestinationSelected callback changes the selected item's index and displays a corresponding widget in the body of the Scaffold.

##### Enable Material 3 on your flutter app
```dart
ThemeData(
    useMaterial3: true,
)
```

```dart
class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _selectedIndex = 0;

  static const List<Widget> _Pages = [
    Text('Home'),
    Text('News'),
    Text('Settings'),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: _Pages.elementAt(_selectedIndex),
      ),

      bottomNavigationBar: NavigationBar(
        destinations: const <Widget>[
          // Home Page
          NavigationDestination(
            icon: Icon(Icons.home),
            label: 'Home',
            tooltip: 'Home',
          ),

          // News page
          NavigationDestination(
            icon: Icon(Icons.newspaper),
            label: 'News',
            tooltip: 'News',
          ),

          // Settings page
          NavigationDestination(
            icon: Icon(Icons.settings),
            label: 'Settings',
            tooltip: 'Settings',
          ),
        ],
        selectedIndex: _selectedIndex,
        onDestinationSelected: _onItemTapped,
      ),
    );
  }
}
```

![Navigation Bar Example](https://i.imgur.com/LR6zbJL.png)

There are multiple methods to implement a navigation bar in flutter, but some may work with the app's requirement but some may not. Like I said in the begin you should first find the particuler use case in your app. 

Then its as simple as it gets to implement the navigtion bar.