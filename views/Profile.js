import React, {useContext, useEffect, useState} from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTag} from '../hooks/ApiHooks';
import {mediaUrl} from '../utils/app-config';

const Profile = (props) => {
  const [avatar, setAvatar] = useState('http://placekitten.com/640');
  const {getFilesByTag} = useTag();
  const {setIsLoggedIn, user} = useContext(MainContext);
  const logOut = async () => {
    console.log('profile, logout');
    try {
      await AsyncStorage.clear();
      setIsLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };
  const loadAvatar = async () => {
    try {
      const avatars = await getFilesByTag('avatar_' + user.user_id);
      console.log(avatars);
      if (avatars.length > 0) {
        setAvatar(mediaUrl + avatars.pop().filename);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadAvatar();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile view</Text>
      <Button title="Log out!" onPress={logOut} />
      <Text>{user.username}</Text>
      <Image style={styles.Image} source={{uri: avatar}} />
      <Text>{user.email}</Text>
      <Text>{user.full_name}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 100,
    height: 100,
  },
});

export default Profile;
