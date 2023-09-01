import {
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/app-config';

const ListItem = ({singleMedia, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('touched', singleMedia.title);
        navigation.navigate('Single', singleMedia);
      }}
    >
      <View style={styles.box}>
        <Image
          style={styles.Image}
          source={{
            uri: mediaUrl + singleMedia.thumbnails.w160,
          }}
        />
        <View style={styles.View}>
          <Text style={styles.Text}>{singleMedia.title}</Text>
          <Text>{singleMedia.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
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
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  Image: {
    margin: 10,
    width: '45%',
    height: 200,
    borderRadius: 5,
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

export default ListItem;
