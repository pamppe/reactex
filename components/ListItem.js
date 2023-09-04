import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.TouchableOpacity}>
        <View style={styles.box}>
          <Image
            style={styles.Image}
            source={{uri: props.singleMedia.thumbnails.w160}}
          />
          <View style={styles.View}>
            <Text style={styles.Title}>{props.singleMedia.title}</Text>
            <Text style={styles.Description}>
              {props.singleMedia.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'pink', // Background color
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  box: {
    flexDirection: 'row',
    borderRadius: 15,
    margin: 10,
    padding: 10,
    justifyContent: 'center',
  },
  Image: {
    width: 150,
    height: 250,
    borderRadius: 10,
    marginRight: 10,
  },
  View: {
    width: '60%',
    marginLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  Description: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 14,
    margin: 5,
    color: 'black',
  },
});

export default ListItem;
