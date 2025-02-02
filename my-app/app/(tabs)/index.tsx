import AppNavigator from '@/components/AppNavigator';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// import AppNavigator from './src/navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#DDE0BD"
  },
});

export default App;
