import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ChatUI from './src/screens/ChatUI';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ChatUI />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
