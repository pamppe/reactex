import {Text} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {useUser} from '../hooks/ApiHooks';
import {useContext} from 'react';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Card, Button, Input} from '@rneui/themed';

const RegisterForm = () => {
  const {postUser, checkUsername} = useUser();
  const {setIsLoggedIn, setUser} = useContext(MainContext);

  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
      email: '', // Add the email field
      full_name: '', // Add the full_name field
    },
    mode: 'onBlur',
  });

  const signIn = async (userData) => {
    try {
      const registrationResponse = await postUser(userData);
      console.log('registration response', registrationResponse);
      if (registrationResponse && registrationResponse.token) {
        console.log('login response', registrationResponse);
        await AsyncStorage.setItem('userToken', registrationResponse.token);
        setIsLoggedIn(true);
        setUser(registrationResponse.user);
      }
    } catch (error) {
      console.error(error);
      // Handle the error.
    }
  };

  return (
    <Card>
      <Card.Title>Registration Form</Card.Title>
      <Controller
        control={control}
        rules={{
          required: {value: true, message: 'This field is required.'},
          minLength: {
            value: 3,
            message: 'This field must be at least 3 characters long.',
          },
          validate: async (value) => {
            try {
              const isAvailable = await checkUsername(value);
              console.log('username validator', value, isAvailable);
              return isAvailable ? isAvailable : 'Username is already taken.';
            } catch (error) {
              console.error(error);
            }
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            errorMessage={errors.username?.message}
          />
        )}
        name="username"
      />
      {errors.username && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            errorMessage={errors.password?.message}
          />
        )}
        name="password"
      />
      <Controller
        control={control}
        rules={{
          required: {value: true, message: 'This field is required.'},
          validate: (value) => {
            const {password} = getValues();
            console.log('password validator', password);
            return value === password ? true : 'Password dont match';
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="confirm password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
            errorMessage={errors.confirm_password?.message}
          />
        )}
        name="confirm_password"
      />
      <Controller
        control={control}
        rules={{
          required: {value: true, message: 'This field is required'},
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'must be a valid email address',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            errorMessage={errors.email?.message}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{
          minLength: {
            value: 3,
            message: 'This field must be at least 3 characters long.',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="full name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
        name="full_name"
      />

      <Button title="Submit" onPress={handleSubmit(signIn)} />
    </Card>
  );
};

export default RegisterForm;
