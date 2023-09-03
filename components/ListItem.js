import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = ({singleMedia}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('touched!', singleMedia.title);
      }}
      style={styles.container}
    >
      <Image style={styles.image} source={{uri: singleMedia.thumbnails.w160}} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{singleMedia.title}</Text>
        <Text style={styles.description}>{singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#668', // Background color
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    width: 120,
    height: 100,
    borderRadius: 10,
    marginRight: 10, //
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: 'black',
  },
});

export default ListItem;
