// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Platform,StatusBar} from 'react-native';
import Onbording from './Screens/Onbording';
import FastImage from 'react-native-fast-image';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <SafeAreaView style={styles.androidSafeArea}>

    <View className=''>
      <Onbording />

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidSafeArea:{
    paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0
  }
});
