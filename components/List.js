import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, Image} from 'react-native';

const url =
  'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';

const List = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setMediaArray(json);
    } catch (error) {
      console.error('Error loading media:', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  const keyExtractor = (_, index) => index.toString();

  const renderItem = ({item}) => (
    <View style={{padding: 16}}>
      <Image
        source={{uri: item.thumbnails.w160}}
        style={{width: 160, height: 160}}
      />
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default List;
