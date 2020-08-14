import * as React from 'react';
import {Button, View, Text, Image, StyleSheet, Linking} from 'react-native';

BackGroundImage = ({imgUri}) => (
  <Image
    style={styles.backGroundLogo}
    source={{
      uri: imgUri,
    }}
  />
);

AlbumImage = ({imgUri}) => (
  <Image
    style={styles.tinyLogo}
    source={{
      uri: imgUri,
    }}
  />
);

AlbumDescription = () => (
  <View style={{flexDirection: 'row', flexWrap: 'wrap', padding: 10}}>
    <Text
      style={[
        styles.title,
        {fontSize: 18, color: 'grey', fontWeight: '400', textAlign: 'justify'},
      ]}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      pulvinar lorem eu ligula gravida tincidunt. Donec a nisi eros. Nunc
      venenatis mauris sed risus euismod iaculis. Donec sapien nibh, rutrum non
      imperdiet hendrerit, congue vel risus. Phasellus enim turpis, venenatis
      sit amet faucibus sed, malesuada eu justo. Ut id ultricies mauris.
    </Text>
  </View>
);

function DetailsScreen({route}) {
  const {item} = route.params;
  const {
    artistName,
    trackName,
    collectionName,
    imageHighRes,
    trackViewUrl,
  } = item;
  return (
    <View style={styles.container}>
      <BackGroundImage imgUri={imageHighRes} />
      <View style={{alignItems: 'center'}}>
        <AlbumImage imgUri={imageHighRes} />
        <Text style={styles.title}>{artistName}</Text>
        <Text style={styles.title}>{trackName}</Text>
        <Text style={[styles.title, {fontSize: 20}]}>{collectionName}</Text>
        <AlbumDescription />
        <Button
          title="Listen on Apple Music"
          onPress={() =>
            Linking.openURL(trackViewUrl).catch((err) =>
              console.error('An error occurred', err),
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontWeight: 'bold',
  },
  subTitles: {
    fontSize: 20,
  },
  backGroundLogo: {
    position: 'absolute',
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    opacity: 0.5,
  },
  tinyLogo: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#FFF',
    marginTop: 125,
  },
});

export default DetailsScreen;
