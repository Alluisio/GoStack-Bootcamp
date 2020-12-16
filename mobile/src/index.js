import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

// Elemento não possui valor semântico
// Elemento não possui estilização própria
// Todos os componentes possuem por padrão "display:flex"

// View: dic, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, h3

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <View style={styles.container}>
        <Text style={styles.title}>Hello GoStack</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
