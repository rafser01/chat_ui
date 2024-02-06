import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import Avatar1 from '../assets/img/avatar1.png';

type Props = {};

const OwnerAvatar = () => {
  return (
    <View style={styles.avatarContainer}>
      <Image source={Avatar1} style={{height: 50, width: 50}} />
    </View>
  );
};

export default OwnerAvatar;

const styles = StyleSheet.create({
  avatarContainer: {
    flex: 0.1,
    marginHorizontal: 10,
    alignSelf: 'center',
    top: -130,
  },
});
