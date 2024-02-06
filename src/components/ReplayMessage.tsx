import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

type Props = {};

import Avatar2 from '../assets/img/avatar2.png';
import colors from '../constants/Colors';

const ReplayMessage: React.FC<Props> = () => {
  return (
    <View style={styles.threaderAvatarContainer}>
      <Image source={Avatar2} style={styles.avatarTwoStyle} />
      <View style={styles.replayMessageTextContainer}>
        <Text style={styles.replayMessage}>
          Hey
          <Text style={styles.mantionText}> @Robert_Mendez </Text>
          can you share an ETA with Angela?
        </Text>
        {/* === thumbs up with count === */}
        <View style={styles.thumbsUpContainer}>
          <Text style={{}}>👍 1</Text>
        </View>
      </View>
    </View>
  );
};

export default ReplayMessage;

const styles = StyleSheet.create({
  threaderAvatarContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  avatarTwoStyle: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  replayMessageTextContainer: {
    backgroundColor: '#fbf9ec',
    borderRadius: 15,
    width: '80%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 5,
    paddingTop: 10,
  },
  mantionText: {
    backgroundColor: colors.mantionTextBg,
    padding: 2,
    borderRadius: 5,
    fontWeight: '500',
    color: colors.mantionText,
  },

  thumbsUpContainer: {
    bottom: -20,
    backgroundColor: '#f3f3f1',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  replayMessage: {
    color: colors.replayMessage,
    fontWeight: '600',
  },
});
