import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import VoiceMail from '../assets/img/voicemail.png';
import colors from '../constants/Colors';

type Props = {};

const MissedCall: React.FC<Props> = () => {
  return (
    <View style={styles.missedCallContainer}>
      <Image source={VoiceMail} style={styles.voiceMailImage} />

      <View style={styles.missedCallTextContainer}>
        <Text style={styles.missedCallText}>Missed call</Text>
        <Text style={styles.noAnsweredText}>No one answered</Text>
      </View>
    </View>
  );
};

export default MissedCall;

const styles = StyleSheet.create({
  missedCallContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    marginVertical: 10,
  },
  missedCallTextContainer: {
    paddingLeft: 15,
    alignItems: 'flex-start',
  },
  missedCallText: {
    color: colors.missedCallText,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5,
  },
  noAnsweredText: {
    fontSize: 16,
    color: colors.noAnswareText,
  },
  voiceMailImage: {height: 50, width: 50},
});
