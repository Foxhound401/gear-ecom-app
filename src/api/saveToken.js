import {AsyncStorage} from 'react-native';

const saveToken = async token => {
  try {
    await AsyncStorage.setItem('@token', token);
    return 'SUCCESSFULL';
  } catch (error) {
    return error;
  }
};

export default saveToken;
