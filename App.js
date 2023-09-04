import {
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import List from './components/List';

import {Settings} from 'react-native-feather';

const App = () => {
  const image = {uri: 'http://placekitten.com/2039/1920'};
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ImageBackground style={styles.header} source={image}>
          <Text style={styles.headerTitle}>Kassipojad</Text>
          <Settings
            stroke="white"
            fill="none"
            width={32}
            height={32}
            style={styles.icon}
          />
        </ImageBackground>
      </View>

      <List />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: 'pink',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10,
  },

  header: {
    height: 250,
  },

  headerTitle: {
    position: 'absolute',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    bottom: 10,
    backgroundColor: 'pink',
  },

  TouchableOpacity: {
    marginVertical: 2,
    padding: 5,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default App;
