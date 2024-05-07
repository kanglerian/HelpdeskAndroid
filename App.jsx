import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Notifications } from 'react-native-notifications';

const App = () => {
  Notifications.registerRemoteNotifications();

  Notifications.events().registerNotificationReceivedForeground((notification: Notification, completion) => {
    console.log(`Notification received in foreground: ${notification.title} : ${notification.body}`);
    completion({ alert: false, sound: false, badge: false });
  });

  Notifications.events().registerNotificationOpened((notification: Notification, completion) => {
    console.log(`Notification opened: ${notification.payload}`);
    completion();
  });
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})