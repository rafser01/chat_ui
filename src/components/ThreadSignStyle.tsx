import {View, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../constants/Colors';

type Props = {};

const ThreadSignStyle = (props: Props) => (
  <View style={styles.threadSignStyle} />
);

export default ThreadSignStyle;
const styles = StyleSheet.create({
  threadSignStyle: {
    position: 'absolute',
    borderLeftColor: colors.borderColor,
    borderLeftWidth: 4,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 4,
    borderBottomLeftRadius: 10,
    height: 40,
    width: 20,
    left: 10,
  },
});
