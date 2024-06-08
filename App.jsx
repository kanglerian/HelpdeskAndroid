import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {io} from 'socket.io-client';

const App = () => {
  const [message, setMessage] = useState('PESAN');
  const socket = io('https://api.politekniklp3i-tasikmalaya.ac.id');

  socket.on('connect', () => {
    console.log('Berhasil terhubung ke server Socket.IO');
  });

  socket.on('connect_error', () => {
    console.log(
      'Koneksi ke server Socket.IO terputus. Pesan tidak terkirim. Coba lagi nanti.',
    );
  });

  socket.on('help', help => {
    console.log(help);
    setMessage(help.message);
  });

  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
