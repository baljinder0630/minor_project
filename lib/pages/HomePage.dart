// ignore_for_file: prefer_const_constructors

import 'package:minor_project/services/notification.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: ElevatedButton(
            onPressed: () async {
              await Notifications.showNotification();
            },
            child: Text("Show Notification")),
      ),
    );
  }
}
