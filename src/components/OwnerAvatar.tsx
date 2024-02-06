import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import Avatar1 from '../assets/img/avatar1.png';

type Props = {};

const OwnerAvatar: React.FC<Props> = () => {
  return (
    <View style={styles.avatarContainer}>
      <Image source={Avatar1} style={styles.avatarImageStyle} />
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
  avatarImageStyle: {height: 50, width: 50},
});
