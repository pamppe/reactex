import React, {useContext, useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {Button} from '@rneui/themed';
import PropTypes from 'prop-types';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useUser} from '../hooks/ApiHooks';
import LoginForm from '../components/LoginFrom';
import RegisterForm from '../components/RegisterForm';

const Login = ({navigation}) => {
  // props is needed for navigation
  const {setIsLoggedIn, setUser} = useContext(MainContext);
  const {getUserByToken} = useUser();
  const [toggleRegister, setToggleRegister] = useState(false);
  const [buttonTitle, setButtonTitle] = useState('or Register');

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      // hardcoded token validation
      const userData = await getUserByToken(token);
      console.log('userdata', userData);
      if (userData) {
        setIsLoggedIn(true);
        setUser(userData);
      }
    } catch (error) {
      console.log('checkToken', error);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <TouchableOpacity
      onPress={() => Keyboard.dismiss()}
      style={{flex: 1}}
      activeOpacity={1}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {toggleRegister ? (
          <RegisterForm setToggleRegister={setToggleRegister} />
        ) : (
          <LoginForm />
        )}
        <Button
          onPress={() => {
            setToggleRegister(!toggleRegister);
          }}
        >
          {toggleRegister ? 'or Login' : 'or Register'}
        </Button>
      </KeyboardAvoidingView>
    </TouchableOpacity>
  );
};
Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
