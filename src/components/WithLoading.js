import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';

const WithLoading = (Component) => {
  return (WithLoadingComponent = ({isLoading, ...props}) => {
    if (!isLoading) return <Component {...props} />;
    return (
      <View style={[styles.container]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.textStyle}>Please Wait.</Text>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {color: '#0000ff' , textAlign:'center'}
});

export default WithLoading;
