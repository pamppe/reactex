import React from 'react';
import PropTypes from 'prop-types';
import {Text, SafeAreaView, StyleSheet, Image, Platform} from 'react-native';
import {mediaUrl} from '../utils/app-config';

const Single = ({route, navigation}) => {
  const singleMedia = route.params;
  console.log('route params', route.params);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{width: '60%', height: '60%'}}
        source={{
          uri: mediaUrl + singleMedia.filename,
        }}
      />
      <Text>{singleMedia.title}</Text>
      <Text>Description: {singleMedia.description}</Text>
      <Text>user ID: {singleMedia.user_id}</Text>
      <Text>time added: {singleMedia.time_added}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableOpacity: {
    marginVertical: 2,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
  },
  Image: {
    margin: 5,
    width: '45%',
    height: 'auto',
  },
  View: {
    width: '50%',
    margin: 5,
  },
  Text: {
    height: 'auto',
    width: '100%',
  },
});

Single.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default Single;
