import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, Image , TouchableOpacity} from 'react-native';

const Item = (props) => {
  const {artistName, imageLowRes , trackName , collectionName} = props.item ;
  const {navigationProp} = props
  return (
  <TouchableOpacity style={styles.item} onPress={() => {
    navigationProp.push('SONG DETAILS', {
      item: props.item,
    })
  }}>
    <Image
      style={styles.tinyLogo}
      source={{
        uri: imageLowRes,
      }}
    />
    <View style={{flexDirection: 'column', flexShrink:1,padding:5}}>
      <Text numberOfLines={1} style={styles.title}>{artistName}</Text>
      <Text numberOfLines={1} style={styles.subTitles}>{collectionName}</Text>
      <Text numberOfLines={1} style={styles.subTitles}>{trackName}</Text>
    </View>
  </TouchableOpacity>
)};

const SongsList = (props) => {
  const {songs, navigation} = props;
  if (!songs) return null;
  if (!songs.length) return <Text>No Songs, sorry</Text>;

  const renderItem = ({item}) => (
    <Item item={item} navigationProp={navigation}/>
  );

  return (
    <FlatList
      data={songs}
      renderItem={renderItem}
      keyExtractor={(item) => item.trackId}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 8,
    flexDirection: 'row',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  subTitles: {
    fontSize: 20
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});

export default SongsList;
