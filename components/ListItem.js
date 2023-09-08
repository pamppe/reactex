import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/app-config';
import {Avatar} from '@rneui/themed';
import {ListItem as RNEListItem} from '@rneui/base';

const ListItem = ({singleMedia, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('touched', singleMedia.title);
        navigation.navigate('Single', singleMedia);
      }}
    >
      <RNEListItem bottomDivider>
        <Avatar
          rounded
          size={100}
          source={{uri: mediaUrl + singleMedia.thumbnails.w160}}
        />
        <RNEListItem.Title>{singleMedia.title}</RNEListItem.Title>
        <RNEListItem.Subtitle>{singleMedia.description}</RNEListItem.Subtitle>
      </RNEListItem>
    </TouchableOpacity>
  );
};
ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};
export default ListItem;
